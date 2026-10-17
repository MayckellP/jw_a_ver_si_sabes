import { useEffect, useState } from 'react';
import { Home } from '../features/home/Home';
import { HostDashboard } from '../features/host-dashboard/HostDashboard';
import { es } from '../locales/es';

export function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    function updateRoute() { setHash(window.location.hash); }
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);
  const isHost = hash === '#/host';
  useEffect(() => {
    document.title = `${isHost ? es.quizzes : es.home} · ${es.brand}`;
    if (hash === '#games' || hash === '#how-it-works') document.querySelector(hash)?.scrollIntoView();
    else { window.scrollTo(0, 0); document.getElementById('main-content')?.focus(); }
  }, [hash, isHost]);
  return <><a className="skip-link" href="#main-content">{es.skip}</a>{isHost ? <HostDashboard/> : <Home/>}</>;
}
