import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BottomAudioPlayer } from './components/audio/BottomAudioPlayer';
import { AppRoutes } from './routes';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AudioProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-background text-white selection:bg-brand-yellow selection:text-black">
          {/* Top White Radio Header */}
          <Header />

          {/* Main Content Area (padded bottom for sticky player) */}
          <main className="flex-1 pb-16">
            <AppRoutes />
          </main>

          {/* Station Footer */}
          <Footer />

          {/* Sticky Vibrant Golden Yellow Bottom Player Bar */}
          <BottomAudioPlayer />
        </div>
      </AudioProvider>
    </BrowserRouter>
  );
};

export default App;
