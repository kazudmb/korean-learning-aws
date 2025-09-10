import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';

// Deployment test - v1.1.0 - Fixed GitHub Actions pipeline
import Header from './components/Header';
import Hero from './components/Hero';
import PhrasesSection from './components/PhrasesSection';
import QuizSection from './components/QuizSection';
import LevelsSection from './components/LevelsSection';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
    },
    background: {
      default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
  },
  typography: {
    fontFamily: '"Noto Sans JP", "Noto Sans KR", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 15,
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <Header />
        <Hero />
        <PhrasesSection />
        <QuizSection />
        <LevelsSection />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;