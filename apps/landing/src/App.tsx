import { FloatingDemoButton } from './components/ui/FloatingDemoButton';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRouter } from './routes/AppRouter';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
        <FloatingDemoButton />
      </div>
    </Router>
  );
}

export default App;