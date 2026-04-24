import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Accueil" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Expérience Professionnelle" },
];

export default function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff] border-b border-stone-200 shadow-sm">
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo / Brand */}
        <button
          onClick={() => handleNav("home")}
          className="text-stone-900 font-bold text-lg tracking-tight hover:text-[#0e7490] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:ring-offset-2 rounded-sm"
          aria-label="Revenir à l'accueil"
        >
          Antoine <span className="text-[#0e7490]">Fillaudeau</span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0" role="list">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                aria-current={currentPage === link.id ? "page" : undefined}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:ring-offset-2 ${
                  currentPage === link.id
                    ? "text-[#0e7490] bg-[#edfefe]"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:ring-offset-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#ffffff] border-t border-stone-100 overflow-hidden"
          >
            <ul className="px-4 py-3 flex flex-col gap-1 list-none m-0" role="list">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    aria-current={currentPage === link.id ? "page" : undefined}
                    className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] ${
                      currentPage === link.id
                        ? "text-[#0e7490] bg-[#edfefe]"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
