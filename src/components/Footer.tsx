import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer>
      {/* CTA band */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-primary-foreground text-display text-2xl md:text-3xl">
            Ready to transform your organization?
          </h3>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-8 py-3 rounded-sm font-semibold text-sm tracking-wide transition-all hover:-translate-y-px hover:shadow-lg active:scale-[0.98]"
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Divine Heritage Consultancy" className="h-12 mb-4" />
            <p className="text-sm leading-relaxed opacity-70">
              Where passion forges progress. Divine Heritage Consultancy delivers expert training and consultancy services for institutional transformation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent text-sm tracking-wider uppercase">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent text-sm tracking-wider uppercase">Our Services</h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>Supervision Skills Training</p>
              <p>Mental Health for HR</p>
              <p>Gender & Diversity</p>
              <p>Interview Skills</p>
              <p>Strategic Retirement</p>
              <p>Culture & Diversity Management</p>
              <p>Life Skills & Disaster Management</p>
              <p>Mentorship Programmes</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent text-sm tracking-wider uppercase">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+254798645696" className="flex items-start gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" /> +254 798 645 696
              </a>
              <a href="mailto:info@divineheritageconsultancy.org" className="flex items-start gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" /> info@divineheritageconsultancy.org
              </a>
              <div className="flex items-start gap-2 opacity-70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>P.O Box 24116-00100, Nairobi<br />Flamingo Towers, 4th Floor<br />Upper Hill – Mara Road<br />(opposite Japanese Embassy)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-50">
            <p>© {new Date().getFullYear()} Divine Heritage Consultancy. All rights reserved.</p>
            <p>Where passion forges progress</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
