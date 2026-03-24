import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Card from './Card';
import Button from './Button';
import LegalModal from './LegalModal';

export default function LoginScreen({ onLogin }) {
    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState('');
    const [legalType, setLegalType] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            setLoading(true);
            try {
                const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                });
                const profile = await res.json();

                onLogin({
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    picture: profile.picture,
                    isNewUser: true, // We'll handle existing users in the context
                    isGuest: false,
                });
            } catch (err) {
                console.error('Google Auth Error:', err);
                setError('Failed to fetch profile from Google. Please try again.');
            } finally {
                setLoading(false);
            }
        },
        onError: (error) => {
            console.error('Login Failed:', error);
            setError('Google Sign-In failed. Please try again.');
        }
    });

    const handleGuestLogin = () => {
        if (!agreed) {
            setError('You must agree to the Terms of Service and Privacy Policy to continue.');
            return;
        }

        const mockUser = {
            id: 'guest-' + Math.random().toString(36).substr(2, 9),
            name: 'Guest Scholar',
            email: 'guest@learnamath.app',
            isNewUser: true,
            isGuest: true,
        };

        onLogin(mockUser);
    };

    const handleExport = () => {
        const data = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('learnamath_')) {
                data[key] = localStorage.getItem(key);
            }
        }
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `learnamath_backup_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleImport = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                Object.keys(data).forEach(key => {
                    if (key.startsWith('learnamath_')) {
                        localStorage.setItem(key, data[key]);
                    }
                });
                alert('Progress imported successfully! The academy will now realign.');
                window.location.reload();
            } catch (err) {
                setError('Failed to import data. The scroll might be corrupted.');
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="flex items-center justify-center w-full relative" style={{ minHeight: '85vh' }}>


            <div className="glass-panel p-10 max-w-[500px] w-full text-center relative z-20" style={{ border: '3px solid var(--geo-gold)' }}>
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-geo-gold rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-geo-gold rounded-br-xl" />

                <h2 className="glow-text" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: 'var(--space-2)' }}>LearnAMaths</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-8)', fontSize: '1.1rem', fontStyle: 'italic' }}>
                    Cast your Proofs and mend the shattered islands.
                </p>

                {error && (
                    <div className="p-3 mb-6 bg-red-100/10 border border-red-400/50 rounded-lg text-red-500 text-sm">
                        {error}
                    </div>
                )}

                <div className="text-left mb-8 p-4 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors"
                    onClick={() => {
                        setAgreed(!agreed);
                        if (!agreed) setError('');
                    }}
                >
                    <div className="flex gap-4">
                        <input
                            type="checkbox"
                            checked={agreed}
                            readOnly
                            className="mt-1 w-5 h-5 accent-emerald-500"
                        />
                        <span className="text-sm text-main leading-relaxed">
                            I accept the <button onClick={(e) => { e.stopPropagation(); setLegalType('terms'); }} className="text-blue-400 underline p-0 border-none bg-none cursor-pointer">Terms</button> and <button onClick={(e) => { e.stopPropagation(); setLegalType('privacy'); }} className="text-blue-400 underline p-0 border-none bg-none cursor-pointer">Privacy Policy</button>, and consent to PDPA data collection for my mastery logs.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <button
                        className="genshin-btn flex items-center justify-center gap-3 w-full"
                        style={{ background: 'white', color: 'black', padding: '1.2rem', borderColor: 'transparent' }}
                        onClick={() => {
                            if (!agreed) {
                                setError('Consult the scroll of agreement first.');
                                return;
                            }
                            handleGoogleLogin();
                        }}
                        disabled={loading}
                    >
                        <svg width="24" height="24" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6 c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>
                        {loading ? 'Manifesting Resonance...' : 'Sign in with Google'}
                    </button>

                    <button
                        className="genshin-btn w-full"
                        style={{ borderColor: 'var(--celestial-blue)', color: 'var(--celestial-blue)' }}
                        onClick={handleGuestLogin}
                    >
                        Continue as Guest
                    </button>
                    
                    <div className="flex gap-4 mt-2">
                        <button onClick={handleExport} className="w-1/2 p-2 text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                            Export Progress
                        </button>
                        <label className="w-1/2 p-2 text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-center">
                            Import Progress
                            <input type="file" accept=".json" style={{ display: 'none' }} onChange={handleImport} />
                        </label>
                    </div>
                </div>
            </div>

            <LegalModal show={!!legalType} type={legalType} onClose={() => setLegalType(null)} />
        </div>
    );
}
