import React, { createContext, useState, useContext, useEffect } from 'react';
import { googleLogout } from '@react-oauth/google';
import { gachaCharacters, getCharacterStage } from '../data/characters';
import analytics from '../utils/analytics';

const UserProgressContext = createContext();

export function UserProgressProvider({ children }) {
    // Simple obfuscation to prevent casual reading of PII in localStorage
    const encodeData = (data) => btoa(JSON.stringify(data));
    const decodeData = (encoded) => {
        try {
            return JSON.parse(atob(encoded));
        } catch (e) {
            return null;
        }
    };

    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('learnamath_user_v2');
        return saved ? decodeData(saved) : null;
    });

    // Progress State
    const [xp, setXp] = useState(() => Number(localStorage.getItem('learnamath_xp')) || 0);
    const [level, setLevel] = useState(() => Number(localStorage.getItem('learnamath_level')) || 1);
    const [weaknesses, setWeaknesses] = useState(() => JSON.parse(localStorage.getItem('learnamath_weaknesses') || '[]'));
    const [gachaPity, setGachaPity] = useState(() => Number(localStorage.getItem('learnamath_gachaPity')) || 0);

    // Settings & Preferences
    const [activeLevel, setActiveLevel] = useState(() => localStorage.getItem('learnamath_activeLevel') || 'Sec 1');
    const [userStream, setUserStream] = useState(() => localStorage.getItem('learnamath_userStream') || 'G3');
    const [difficulty, setDifficulty] = useState(() => localStorage.getItem('learnamath_difficulty') || 'medium');
    const [theme, setTheme] = useState(() => localStorage.getItem('learnamath_theme') || 'dark');

    // Inventory State
    const [unlockedCharacters, setUnlockedCharacters] = useState(() => {
        const saved = JSON.parse(localStorage.getItem('learnamath_unlocked') || 'null');
        return saved || [gachaCharacters[0]];
    });
    const [activeCharacter, setActiveCharacter] = useState(() => {
        const savedId = localStorage.getItem('learnamath_activeCharId');
        return gachaCharacters.find(c => c.id === savedId) || gachaCharacters[0];
    });

    // UI Modals global state
    const [showReward, setShowReward] = useState(false);
    const [rewardData, setRewardData] = useState({ title: '', text: '', emoji: '' });

    const maxXp = level * 100;

    // Persistence Effect
    useEffect(() => {
        if (user) {
            const safeToStoreUser = { id: user.id, name: user.name, isGuest: user.isGuest, isNewUser: user.isNewUser };
            localStorage.setItem('learnamath_user_v2', encodeData(safeToStoreUser));
        } else {
            localStorage.removeItem('learnamath_user_v2');
        }

        localStorage.setItem('learnamath_xp', xp);
        localStorage.setItem('learnamath_level', level);
        localStorage.setItem('learnamath_weaknesses', JSON.stringify(weaknesses));
        localStorage.setItem('learnamath_activeLevel', activeLevel);
        localStorage.setItem('learnamath_userStream', userStream);
        localStorage.setItem('learnamath_theme', theme);
        localStorage.setItem('learnamath_unlocked', JSON.stringify(unlockedCharacters));
        localStorage.setItem('learnamath_activeCharId', activeCharacter.id);
        localStorage.setItem('learnamath_difficulty', difficulty);
        localStorage.setItem('learnamath_gachaPity', gachaPity);
    }, [user, xp, level, weaknesses, activeLevel, userStream, theme, unlockedCharacters, activeCharacter, gachaPity, difficulty]);

    useEffect(() => {
        document.body.classList.remove('dark-mode', 'light-mode');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    const login = (newUser) => {
        if (user && user.id !== newUser.id) {
            const keep = window.confirm("A different scholar was previously active. Do you wish to inherit their progress? (Cancel to start fresh)");
            if (!keep) {
                setXp(0);
                setLevel(1);
                setWeaknesses([]);
                setUnlockedCharacters([gachaCharacters[0]]);
                setActiveCharacter(gachaCharacters[0]);
                setGachaPity(0);
                setDifficulty('medium');
            }
        }
        
        // Strip PII (email, picture) for privacy before persisting
        const safeUser = {
            id: newUser.id,
            name: newUser.name,
            isNewUser: newUser.isNewUser,
            isGuest: newUser.isGuest,
            picture: newUser.picture // Keep for current session UI, but we'll strip below for storage
        };
        setUser(safeUser);
    };

    const logout = () => {
        googleLogout();
        setUser(null);
        // We keep progress locally for now, or we could clear it. 
        // For an educational app, keeping locally but signing out of profile is usually safer.
    };

    const gainXp = (amount) => {
        let newXp = xp + amount;
        let newLevel = level;
        let hasLeveledUp = false;

        while (newXp >= newLevel * 100) {
            newXp -= newLevel * 100;
            newLevel += 1;
            hasLeveledUp = true;
        }

        setXp(newXp);
        setLevel(newLevel);

        if (hasLeveledUp) {
            const oldStage = getCharacterStage(activeCharacter, level);
            const newStage = getCharacterStage(activeCharacter, newLevel);

            if (oldStage.name !== newStage.name) {
                setRewardData({
                    title: 'Elemental Ascension!',
                    text: `Your ${oldStage.name} ascended into ${newStage.name}!`,
                    image: newStage.image
                });
            } else {
                setRewardData({
                    title: 'Level Up!',
                    text: `You have reached Level ${newLevel}! Keep casting proofs!`,
                    emoji: '🌟'
                });
            }
            setShowReward(true);
        }
    };

    const markWeakness = (questionObj) => {
        setWeaknesses(prev => {
            if (!prev.find(q => q.id === questionObj.id)) {
                return [...prev, questionObj];
            }
            return prev;
        });
    };

    const resolveWeakness = (resolvedWeaknessId) => {
        setWeaknesses(prev => prev.filter(q => q.id !== resolvedWeaknessId));
        gainXp(10);
    };

    const claimCharacter = (pulledChar) => {
        const isDuplicate = unlockedCharacters.find(c => c.id === pulledChar.id);
        if (isDuplicate) {
            gainXp(50); // Convert dupes to 50 XP
        } else {
            setUnlockedCharacters(prev => [...prev, pulledChar]);
        }
    };

    const val = {
        user, setUser, login, logout,
        xp, level, maxXp, gainXp,
        weaknesses, setWeaknesses, markWeakness, resolveWeakness,
        activeLevel, setActiveLevel,
        userStream, setUserStream,
        difficulty, setDifficulty,
        theme, toggleTheme,
        unlockedCharacters, activeCharacter, setActiveCharacter, claimCharacter,
        showReward, setShowReward, rewardData, setRewardData,
        gachaPity, setGachaPity
    };

    return (
        <UserProgressContext.Provider value={val}>
            {children}
        </UserProgressContext.Provider>
    );
}

export const useUserProgress = () => useContext(UserProgressContext);
