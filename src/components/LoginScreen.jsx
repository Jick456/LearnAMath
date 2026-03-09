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
            name: 'Guest Arithmancer',
            email: 'guest@learnamath.app',
            isNewUser: true,
            isGuest: true,
        };

        onLogin(mockUser);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full" style={{ minHeight: '80vh', animation: 'fadeIn 0.5s ease' }}>
            <Card style={{ padding: 'var(--space-8)', maxWidth: '450px', width: '100%', textAlign: 'center' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>The Realm of Axiom</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-8)', fontSize: '1rem' }}>
                    Arithmancer, sign in to cast Proofs, mend the shattered islands, and summon your elemental companions!
                </p>

                {error && (
                    <div style={{ color: 'var(--accent-error)', backgroundColor: 'rgba(224, 122, 95, 0.1)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-4)', fontSize: '0.9rem', border: '1px solid var(--accent-error)' }}>
                        {error}
                    </div>
                )}

                <div style={{ textAlign: 'left', marginBottom: 'var(--space-6)', backgroundColor: 'var(--surface-hover)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
                    onClick={() => {
                        setAgreed(!agreed);
                        if (!agreed) setError('');
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', pointerEvents: 'none' }}>
                        <input
                            type="checkbox"
                            checked={agreed}
                            readOnly
                            style={{ marginTop: '0.25rem', width: '18px', height: '18px', pointerEvents: 'auto' }}
                        />
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.4, pointerEvents: 'auto' }}>
                            I agree to the <button onClick={(e) => { e.stopPropagation(); setLegalType('terms'); }} style={{ color: 'var(--primary-hover)', textDecoration: 'underline', border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>Terms of Service</button> and <button onClick={(e) => { e.stopPropagation(); setLegalType('privacy'); }} style={{ color: 'var(--primary-hover)', textDecoration: 'underline', border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>Privacy Policy</button>, and consent to the collection and use of my personal data in accordance with Singapore's PDPA.
                        </span>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <Button
                        onClick={() => {
                            if (!agreed) {
                                setError('You must agree to the Terms of Service to continue.');
                                return;
                            }
                            handleGoogleLogin();
                        }}
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: 'var(--space-3)',
                            fontSize: '1.1rem',
                            backgroundColor: 'white',
                            color: 'black',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            border: '1px solid #ddd'
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 48 48" style={{ pointerEvents: 'none' }}>
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6 c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>
                        {loading ? 'Authenticating...' : 'Sign in with Google'}
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={handleGuestLogin}
                        style={{
                            width: '100%',
                            padding: 'var(--space-3)',
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            border: '1px solid var(--surface-border)',
                            backgroundColor: 'transparent'
                        }}
                    >
                        Continue as Guest
                    </Button>
                </div>
            </Card>

            <LegalModal
                show={!!legalType}
                type={legalType}
                onClose={() => setLegalType(null)}
            />
        </div>
    );
}
