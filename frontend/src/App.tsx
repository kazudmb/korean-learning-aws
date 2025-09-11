import React from 'react';

// Deployment test - v1.3.0 - Migrated to shadcn/ui
import Header from './components/Header';
import Hero from './components/Hero';
import PhrasesSection from './components/PhrasesSection';
import QuizSection from './components/QuizSection';
import LevelsSection from './components/LevelsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen gradient-bg font-sans">
      <Header />
      <Hero />
      <PhrasesSection />
      <QuizSection />
      <LevelsSection />
      <Footer />
    </div>
  );
};

export default App;