import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full z-50 relative">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+254798645696" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" /> +254 798 645 696
            </a>
            <a href="mailto:info@divineheritageconsultancy.org" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" /> info@divineheritageconsultancy.org
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Flamingo Towers, 4th Floor, Upper Hill, Nairobi</span>
            <span className="sm:hidden">Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-heritage">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Divine Heritage Consultancy" className="h-12 sm:h-14 border-0 outline-none" style={{ border: 'none' }} />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? "text-heritage-green"
                    : "text-foreground hover:text-heritage-green"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-heritage-green transition-all duration-300 ${
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex bg-heritage-green text-heritage-green-foreground px-6 py-2.5 rounded-sm text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-lg active:scale-[0.98]"
          >
            Get In Touch
          </Link>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-card px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm font-medium border-b border-border/50 ${
                  location.pathname === link.path ? "text-heritage-green" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 block text-center bg-heritage-green text-heritage-green-foreground px-6 py-2.5 rounded-sm text-sm font-semibold"
            >
              Get In Touch
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
