import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Avatar from './components/Avatar';
import TopicSelector from './components/TopicSelector';
import RewardModal from './components/RewardModal';
import Button from './components/Button';
import GachaPull from './components/GachaPull';
import LoginScreen from './components/LoginScreen';
import AccountSetup from './components/AccountSetup';
import { topics, questions } from './data/questions';

// Lazy loaded components for better performance
const StoryAnimation = lazy(() => import('./components/StoryAnimation'));
const CrashCourse = lazy(() => import('./components/CrashCourse'));
const QuestionInterface = lazy(() => import('./components/QuestionInterfaceNew'));
const ConceptVisualizer = lazy(() => import('./components/ConceptVisualizer'));
import analytics from './utils/analytics';
import LegalModal from './components/LegalModal';

import { BrowserRouter, Routes, Route, useNavigate, useLocation } from './utils/router';
import { useUserProgress, UserProgressProvider } from './context/UserProgressContext';

import 'katex/dist/katex.min.css';

function MainApp() {
  const {
    user, setUser, logout, xp, level, maxXp, theme, toggleTheme,
    unlockedCharacters, activeCharacter, setActiveCharacter, claimCharacter,
    activeLevel, setActiveLevel, userStream, setUserStream,
    weaknesses, gainXp, markWeakness, resolveWeakness,
    showReward, setShowReward, rewardData
  } = useUserProgress();

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [legalType, setLegalType] = useState(null);
  const [showGacha, setShowGacha] = useState(false);

  const navigate = useNavigate();
  const { pathname: viewMode } = useLocation();

  useEffect(() => {
    analytics.trackEvent('page_view', { view: viewMode, topic: selectedTopic });
  }, [viewMode, selectedTopic]);

  const activeTopicObj = selectedTopic && selectedTopic !== 'weaknesses' ? topics.find(t => t.id === selectedTopic) : null;

  useEffect(() => {
    // Clear old theme classes first
    document.body.className = theme === 'light' ? 'light-mode' : '';

    if (activeTopicObj?.themeClass && (viewMode === '/story' || viewMode === '/crashcourse' || viewMode === '/questions')) {
      document.body.classList.add(activeTopicObj.themeClass);
    }
  }, [activeTopicObj, viewMode, theme]);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    if (loggedInUser.isNewUser) {
      navigate('/setup');
    } else {
      navigate('/home');
    }
  };

  const handleAccountSetupComplete = (lvl) => {
    setUserStream(lvl);
    navigate('/home');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleStartTopic = (topicId) => {
    setSelectedTopic(topicId);
    if (topicId === 'weaknesses') {
      navigate('/questions');
    } else {
      navigate('/story'); // go to story intro
    }
  };

  const handleCompleteTopic = (resolvedWeaknessId = null) => {
    if (selectedTopic === 'weaknesses') {
      if (resolvedWeaknessId !== null) {
        resolveWeakness(resolvedWeaknessId);
      }
      navigate('/selector');
      return;
    }

    gainXp(50);
    setShowGacha(true);
  };

  const handleGachaClaim = (pulledChar) => {
    setShowGacha(false);
    claimCharacter(pulledChar);
    navigate('/home');
  };

  const getActiveQuestions = () => {
    if (selectedTopic === 'weaknesses') return weaknesses;
    return questions[selectedTopic] || { learning: [], testing: [] };
  };

  // Redirect to login if user object is not present in Context, unless currently there.
  if (!user && viewMode !== '/') {
    navigate('/');
    return null;
  }

  return (
    <div className="container" style={{ paddingBottom: 'var(--space-12)' }}>
      {user && (
        <header className="flex justify-between items-center" style={{ padding: 'var(--space-6) 0', borderBottom: '1px solid var(--surface-border)', marginBottom: 'var(--space-8)' }}>
          <h1 className="gradient-text" style={{ cursor: 'pointer', margin: 0, display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }} onClick={() => navigate('/home')}>
            LearnAMath
          </h1>
          <div className="flex gap-2 sm:gap-4 items-center flex-wrap justify-end">
            <Button variant="secondary" onClick={toggleTheme} style={{ padding: '6px', borderRadius: '50%', minWidth: '40px', height: '40px' }}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </Button>

            <div className="flex items-center gap-3 glass-panel" style={{ padding: '4px 12px 4px 6px', borderRadius: 'var(--radius-full)' }}>
              {user.picture ? (
                <img src={user.picture} alt={user.name} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--primary)' }} />
              ) : (
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '12px' }}>
                  {user.name?.[0] || 'A'}
                </div>
              )}
              <div className="flex items-center gap-2 text-sm">
                <span style={{ fontWeight: 600, color: 'var(--accent-warning)' }}>Lvl {level}</span>
              </div>
              <button
                onClick={handleLogout}
                style={{ fontSize: '0.8rem', color: 'var(--accent-error)', marginLeft: '4px', textDecoration: 'underline', border: 'none', background: 'none', cursor: 'pointer' }}
                title="Sign Out"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
      )}

      <main className="flex flex-col items-center justify-center gap-6" style={{ minHeight: '70vh' }}>
        <Suspense fallback={<div className="flex justify-center items-center h-full"><div className="glow-text" style={{ fontSize: '1.5rem' }}>Loading Axioms...</div></div>}>
          <Routes>
            <Route path="/" element={<LoginScreen onLogin={handleLogin} />} />

            <Route path="/setup" element={<AccountSetup onComplete={handleAccountSetupComplete} />} />

            <Route path="/home" element={
              <div className="flex flex-col items-center gap-8 w-full max-w-[800px] text-center" style={{ animation: 'fadeIn 0.5s ease' }}>
                <h2 className="glow-text" style={{ lineHeight: 1.1 }}>Conquer MOE Maths</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                  Elevate your math skills with syllabus-backed interactive modules. Grow your companion collection, earn rewards, and secure that A1!
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 'var(--space-8)' }}>
                  <Avatar
                    level={level}
                    xp={xp}
                    maxXp={maxXp}
                    activeCharacter={activeCharacter}
                    unlockedCharacters={unlockedCharacters}
                    onSelectCharacter={setActiveCharacter}
                  />
                  <div style={{ textAlign: 'center' }}>
                    {unlockedCharacters.length > 1 && (
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Click your companion to swap characters!</p>
                    )}
                  </div>

                  <Button size="lg" onClick={() => navigate('/selector')} style={{ fontSize: '1.5rem', padding: 'var(--space-4) var(--space-8)', marginTop: 'var(--space-4)', animation: 'pulse-glow 2s infinite' }}>
                    Start Learning
                  </Button>
                </div>
              </div>
            } />

            <Route path="/selector" element={
              <div style={{ animation: 'fadeIn 0.5s ease', width: '100%' }}>
                <TopicSelector
                  topics={topics}
                  activeLevel={activeLevel}
                  onLevelChange={setActiveLevel}
                  onSelect={handleStartTopic}
                  weaknessCount={weaknesses.length}
                  userStream={userStream}
                />
              </div>
            } />

            <Route path="/story" element={
              activeTopicObj ? (
                <StoryAnimation
                  topic={activeTopicObj}
                  pet={activeCharacter}
                  onComplete={() => navigate('/crashcourse')}
                />
              ) : <div />
            } />

            <Route path="/crashcourse" element={
              activeTopicObj ? (
                <CrashCourse
                  topic={activeTopicObj}
                  onSkip={() => navigate('/questions')}
                  onContinue={() => navigate('/questions')}
                />
              ) : <div />
            } />

            <Route path="/questions" element={
              selectedTopic ? (
                <div style={{ animation: 'fadeIn 0.5s ease', width: '100%' }}>
                  <QuestionInterface
                    questionsObj={getActiveQuestions()}
                    onComplete={handleCompleteTopic}
                    onGainXp={gainXp}
                    onMissedQuestion={markWeakness}
                    isWeaknessMode={selectedTopic === 'weaknesses'}
                  />
                </div>
              ) : <div />
            } />
          </Routes>
        </Suspense>
      </main>

      <footer style={{ marginTop: 'auto', padding: 'var(--space-8) 0', borderTop: '1px solid var(--surface-border)', textAlign: 'center', opacity: 0.6, fontSize: '0.85rem' }}>
        <p>© 2026 LearnAMath. All rights reserved.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
          <button onClick={() => setLegalType('terms')} style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}>Terms of Service</button>
          <button onClick={() => setLegalType('privacy')} style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}>Privacy Policy</button>
        </div>
      </footer>

      <RewardModal show={showReward} onClose={() => setShowReward(false)} title={rewardData.title} rewardText={rewardData.text} rewardEmoji={rewardData.emoji} />
      <LegalModal show={!!legalType} type={legalType} onClose={() => setLegalType(null)} />
      {showGacha && <GachaPull unlockedCharIds={unlockedCharacters.map(c => c.id)} onClaim={handleGachaClaim} />}

      {/* Floating Active Pet Companion */}
      {user && activeCharacter && viewMode !== '/' && viewMode !== '/setup' && viewMode !== '/home' && (
        <motion.div
          style={{
            position: 'fixed', bottom: '20px', right: '20px', zIndex: 1500,
            filter: "drop-shadow(0 0 15px " + activeCharacter.color + "66)",
            cursor: 'pointer',
            transform: 'scale(clamp(0.7, 5vw, 1))'
          }}
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => navigate('/home')}
          title="Go Home"
        >
          <div style={{ fontSize: 'clamp(2.5rem, 10vw, 3.5rem)', userSelect: 'none' }}>
            {activeCharacter.emoji}
          </div>
        </motion.div>
      )}

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <UserProgressProvider>
        <MainApp />
      </UserProgressProvider>
    </BrowserRouter>
  );
}

export default App;
