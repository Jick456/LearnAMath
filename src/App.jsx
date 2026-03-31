import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Avatar from './components/Avatar';
import TopicSelector from './components/TopicSelector';
import RewardModal from './components/RewardModal';
import Button from './components/Button';
import GachaPull from './components/GachaPull';
import LoginScreen from './components/LoginScreen';
import AccountSetup from './components/AccountSetup';
import GuideCompanion from './components/GuideCompanion';
import Sidebar from './components/Sidebar';
import AdBanner from './components/AdBanner';
import { topics, questions } from './data/questions';

// Lazy loaded components for better performance
const StoryAnimation = lazy(() => import('./components/StoryAnimation'));
const CrashCourse = lazy(() => import('./components/CrashCourse'));
const QuestionInterface = lazy(() => import('./components/QuestionInterfaceNew'));
const ConceptVisualizer = lazy(() => import('./components/ConceptVisualizer'));
import analytics from './utils/analytics';
import LegalModal from './components/LegalModal';
import genshinBg from './assets/images/genshin_bg.png';

import { BrowserRouter, Routes, Route, useNavigate, useLocation } from './utils/router';
import { useUserProgress, UserProgressProvider } from './context/UserProgressContext';
import ErrorBoundary from './components/ErrorBoundary';

import 'katex/dist/katex.min.css';

function MainApp() {
    const {
    user, setUser, login, logout, xp, level, maxXp,
    unlockedCharacters, activeCharacter, setActiveCharacter, claimCharacter,
    activeLevel, setActiveLevel, userStream, setUserStream,
    weaknesses, gainXp, markWeakness, resolveWeakness,
    showReward, setShowReward, rewardData
  } = useUserProgress();

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [legalType, setLegalType] = useState(null);
  const [showGacha, setShowGacha] = useState(false);
  const [lastTestScore, setLastTestScore] = useState(0);

  const navigate = useNavigate();
  const { pathname: viewMode } = useLocation();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${genshinBg})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
  }, []);

  useEffect(() => {
    analytics.trackEvent('page_view', { view: viewMode, topic: selectedTopic });
  }, [viewMode, selectedTopic]);

  const activeTopicObj = selectedTopic && selectedTopic !== 'weaknesses' ? topics.find(t => t.id === selectedTopic) : null;
  useEffect(() => {
    // Remove any existing theme- classes
    const classes = Array.from(document.body.classList);
    classes.forEach(cls => {
      if (cls.startsWith('theme-')) {
        document.body.classList.remove(cls);
      }
    });

    if (activeTopicObj?.themeClass && (viewMode === '/story' || viewMode === '/crashcourse' || viewMode === '/questions')) {
      document.body.classList.add(activeTopicObj.themeClass);
    }
  }, [activeTopicObj, viewMode]);

  const handleLogin = (loggedInUser) => {
    login(loggedInUser);
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

  const handleCompleteTopic = (resolvedWeaknessId = null, score = 0) => {
    if (selectedTopic === 'weaknesses') {
      if (resolvedWeaknessId !== null) {
        resolveWeakness(resolvedWeaknessId);
      }
      navigate('/selector');
      return;
    }

    setLastTestScore(score);
    gainXp(50);
    setShowGacha(true);
  };

  const handleGachaClaim = (pulledChar) => {
    setShowGacha(false);
    claimCharacter(pulledChar);
    navigate('/selector');
  };

  const getActiveQuestions = () => {
    if (selectedTopic === 'weaknesses') return weaknesses;
    return questions[selectedTopic] || { learning: [], testing: [] };
  };

  // Redirect to login if user object is not present in Context, unless currently there.
  useEffect(() => {
    if (!user && viewMode !== '/') {
      navigate('/');
    }
  }, [user, viewMode, navigate]);

  if (!user && viewMode !== '/') return null;

  return (
    <div className="flex min-h-screen">
      {user && <Sidebar />}
      <div className={`flex-1 transition-all duration-300 ${user ? 'app-content-with-sidebar' : ''} container`} style={{ paddingBottom: 'var(--space-12)' }}>
        {user && (
        <header className="flex justify-between items-center py-6 px-10 relative z-[2000]" style={{ borderBottom: '1px solid var(--header-border)', background: 'var(--header-bg)', backdropFilter: 'blur(10px)' }}>
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/home')}>
            <span className="glow-text font-black text-2xl tracking-[4px] uppercase">LearnAMaths</span>
          </div>
          
          <div className="flex gap-4 items-center">


            <div className="flex items-center gap-4 px-4 py-2 rounded-2xl border" style={{ background: 'var(--surface)', borderColor: 'var(--surface-border)' }}>
              <div className="relative">
                {user.picture ? (
                  <img src={user.picture} alt={user.name} className="w-9 h-9 rounded-full border-2 border-geo-gold" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-geo-gold flex items-center justify-center font-black text-sm text-black">
                    {user.name?.[0]?.toUpperCase() || 'A'}
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 bg-geo-gold text-[10px] px-1 rounded-sm font-bold text-black border border-white/40">
                  Lvl {level}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-bold opacity-90">{user.name}</div>
                <button
                  onClick={handleLogout}
                  className="text-[10px] uppercase tracking-widest font-black text-red-400 hover:text-red-300 transition-colors"
                >
                  Dissolve Link
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Site-Wide Top Ad Unit */}
      <div className="flex justify-center w-full px-4 mt-6">
        <AdBanner 
          dataAdSlot="2345678901" // Placeholder for Top Banner
          dataAdFormat="horizontal" 
          fullWidth={true}
        />
      </div>

      <main className="flex flex-col items-center justify-center gap-6" style={{ minHeight: '70vh' }}>
        <ErrorBoundary>
          <Suspense fallback={<div className="flex justify-center items-center h-full"><div className="glow-text" style={{ fontSize: '1.5rem' }}>Loading Axioms...</div></div>}>
            <Routes>
              <Route path="/" element={<LoginScreen onLogin={handleLogin} />} />

            <Route path="/setup" element={<AccountSetup onComplete={handleAccountSetupComplete} />} />

            <Route path="/home" element={
              <div className="flex flex-col items-center gap-12 w-full max-w-[1000px] py-10" style={{ animation: 'fadeIn 0.7s ease' }}>
                <div className="text-center relative">
                  <h2 className="premium-heading" data-text="Grasp Your Destiny" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1 }}>Grasp Your Destiny</h2>
                  <p className="mt-6" style={{ fontSize: '1.25rem', maxWidth: '750px', margin: '1.5rem auto 0 auto', lineHeight: 1.6, fontWeight: 500, color: 'var(--text-muted)' }}>
                    The shattered islands of mathematics awaits your resonance. Bond with celestial companions and mend the dissonant flows through pure logic.
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-geo-gold/20 blur-[100px] rounded-full group-hover:bg-geo-gold/40 transition-all duration-700" />
                    <Avatar
                      level={level}
                      xp={xp}
                      maxXp={maxXp}
                      activeCharacter={activeCharacter}
                      unlockedCharacters={unlockedCharacters}
                      onSelectCharacter={setActiveCharacter}
                    />
                  </div>

                  <div className="glass-panel p-10 max-w-[450px] w-full text-center flex flex-col gap-8 items-center" style={{ border: '2px solid var(--geo-gold)' }}>
                    <div className="flex flex-col gap-2 w-full text-center">
                       <span className="opacity-50 font-black uppercase tracking-[5px] text-xs">Scholar Status</span>
                       <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Ascension Rank {level}</h3>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                      <div className="flex justify-between text-xs font-black uppercase tracking-widest opacity-70">
                        <span>Axiom Resonance</span>
                        <span>{xp} / {maxXp}</span>
                      </div>
                      <div className="progress-container h-3" style={{ background: 'var(--surface-sub)' }}>
                        <div className="progress-fill" style={{ width: `${(xp / maxXp) * 100}%`, background: 'var(--celestial-blue)' }} />
                      </div>
                    </div>

                    <button 
                      className="genshin-btn genshin-btn-premium w-full text-2xl py-6" 
                      onClick={() => navigate('/selector')}
                    >
                      Begin Voyage
                    </button>
                    
                    {unlockedCharacters.length > 1 && (
                      <p className="opacity-40 text-xs italic">Axiom companions wait in the resonance pool.</p>
                    )}
                  </div>
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
                  onSkip={() => navigate('/questions')}
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
        </ErrorBoundary>

        {/* Site-Wide Bottom Ad Unit */}
        <div className="flex justify-center w-full px-4 mt-12 mb-6">
          <AdBanner 
            dataAdSlot="3456789012" // Placeholder for Bottom Banner
            dataAdFormat="horizontal" 
            fullWidth={true}
          />
        </div>
      </main>

      <footer className="mt-auto py-12 border-t border-white/10 text-center opacity-40 text-xs font-bold uppercase tracking-[4px]">
        <p>© 2026 LearnAMaths | Masters of Mathematics</p>
        <div className="flex justify-center gap-8 mt-4">
          <button onClick={() => setLegalType('terms')} className="hover:text-geo-gold transition-colors underline cursor-pointer">Decree of Axiom</button>
          <button onClick={() => setLegalType('privacy')} className="hover:text-geo-gold transition-colors underline cursor-pointer">Veil of Shadows</button>
        </div>
      </footer>

      <RewardModal show={showReward} onClose={() => setShowReward(false)} title={rewardData.title} rewardText={rewardData.text} rewardImage={rewardData.image} />
      <LegalModal show={!!legalType} type={legalType} onClose={() => setLegalType(null)} />
      {showGacha && <GachaPull unlockedCharIds={unlockedCharacters.map(c => c.id)} onClaim={handleGachaClaim} score={lastTestScore} />}

      {/* Floating Active Pet Companion (Original) or Guide */ }
      {user && viewMode !== '/' && viewMode !== '/setup' && (
        <GuideCompanion 
          activeCharacter={activeCharacter}
          level={level}
          message={
            viewMode === '/home' ? `Welcome back, Scholar ${user.name}! Ready to ascend?` :
            viewMode === '/selector' ? "Choose your domain wisely. Each node holds ancient secrets." :
            viewMode === '/questions' ? "Focus your mind. The proof is within your reach!" :
            null
          }
        />
      )}

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      </div>
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
