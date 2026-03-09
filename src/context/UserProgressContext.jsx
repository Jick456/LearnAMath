import React, { createContext, useState, useContext, useEffect } from 'react';
import { gachaCharacters, getCharacterStage } from '../data/characters';
import analytics from '../utils/analytics';

const UserProgressContext = createContext();

export function UserProgressProvider({ children }) {
    const [user, setUser] = useState(null);

    // Progress State
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [weaknesses, setWeaknesses] = useState([]);

    // Settings & Preferences
    const [activeLevel, setActiveLevel] = useState('Sec 1');
    const [userStream, setUserStream] = useState('G3');
    const [theme, setTheme] = useState('dark');

    // Inventory State
    const [unlockedCharacters, setUnlockedCharacters] = useState([gachaCharacters[0]]);
    const [activeCharacter, setActiveCharacter] = useState(gachaCharacters[0]);

    // UI Modals global state
    const [showReward, setShowReward] = useState(false);
    const [rewardData, setRewardData] = useState({ title: '', text: '', emoji: '' });

    const maxXp = level * 100;

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    const gainXp = (amount) => {
        let newXp = xp + amount;
        let newLevel = level;
        let hasLeveledUp = false;

        if (newXp >= maxXp) {
            newXp = newXp - maxXp;
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
        user, setUser,
        xp, level, maxXp, gainXp,
        weaknesses, setWeaknesses, markWeakness, resolveWeakness,
        activeLevel, setActiveLevel,
        userStream, setUserStream,
        theme, toggleTheme,
        unlockedCharacters, activeCharacter, setActiveCharacter, claimCharacter,
        showReward, setShowReward, rewardData, setRewardData
    };

    return (
        <UserProgressContext.Provider value={val}>
            {children}
        </UserProgressContext.Provider>
    );
}

export const useUserProgress = () => useContext(UserProgressContext);
