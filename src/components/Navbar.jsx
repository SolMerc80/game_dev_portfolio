import { Link, useLocation } from 'react-router-dom';
import { Sword, Book, Home } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Tavern (Home)', path: '/', icon: <Home size={18} /> },
    { name: 'Character Sheet (About)', path: '/about', icon: <Book size={18} /> },
  ];

  return (
    <header className="rpg-box m-4 p-4 sticky top-4 z-50 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Sword className="text-[var(--color-ruby)]" />
        <span className="font-rpg text-2xl font-bold">DevQuest</span>
      </div>
      
      <nav className="flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-rpg text-xl flex items-center gap-2 hover:text-[var(--color-ruby)] transition-colors ${
              location.pathname === link.path ? 'text-[var(--color-ruby)]' : ''
            }`}
          >
            {location.pathname === link.path && <span className="animate-pulse">►</span>}
            {link.icon}
            <span className="hidden sm:inline">{link.name}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
