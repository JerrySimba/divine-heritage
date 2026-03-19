import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, BookOpen, Calendar, Clock, MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import divine1 from "@/assets/divine1.jpg";
import divine2 from "@/assets/serv3.jpg";
import divine3 from "@/assets/home1.jpg";
import joanGreen from "@/assets/joan-green.jpg";
import joanGroup from "@/assets/joan-group.jpg";
import joanWorkshop from "@/assets/joan-workshop.jpg";
import joanConference from "@/assets/joan-conference.jpg";
import joanSelfie from "@/assets/joan-selfie.jpg";
import serv1 from "@/assets/serv1.jpg";
import serv2 from "@/assets/serv2.jpg";
import home4 from "@/assets/home4.jpg";
import upc1 from "@/assets/upc1.jpg";
import upc2 from "@/assets/upc2.jpg";
import upc3 from "@/assets/upc3.jpg";

const slides = [
  {
    image: divine1,
    title: "Strategic Consultancy for Institutional Excellence",
    desc: "We empower organizations through expert training, institutional development, and strategic advisory rooted in legacy.",
  },
  {
    image: divine2,
    title: "Building Leaders, Transforming Organizations",
    desc: "Comprehensive professional development programmes designed to build leadership capacity and strengthen HR systems.",
  },
  {
    image: divine3,
    title: "Where Passion Forges Progress",
    desc: "Evidence-based interventions that deliver measurable results for government, corporate, and educational institutions across East Africa.",
  },
];

const serviceHighlights = [
  { title: "Professional Training Programmes", image: serv1, desc: "Comprehensive courses in supervision, mental health, and leadership designed for managers and HR professionals across East Africa." },
  { title: "Institutional Development & Advisory", image: serv2, desc: "Strategic consultancy for government, corporate, and educational institutions to strengthen systems, policies, and organizational capacity." },
  { title: "Certification & Accreditation", image: home4, desc: "Accredited training programmes with professional certification in supervision skills, gender mainstreaming, succession management, and more." },
];

const events = [
  {
    date: "15 APR",
    title: "Leadership Excellence Workshop",
    location: "Nairobi, Kenya",
    time: "9:00 AM - 5:00 PM",
    seats: "Limited Seats",
  },
  {
    date: "22 MAY",
    title: "HR Mental Health Awareness Summit",
    location: "Virtual Event",
    time: "10:00 AM - 3:00 PM",
    seats: "Open Registration",
  },
  {
    date: "10 JUN",
    title: "Diversity & Inclusion Conference",
    location: "Mombasa, Kenya",
    time: "8:30 AM - 4:30 PM",
    seats: "Limited Seats",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Professionals Trained" },
  { value: "50+", label: "Organizations Served" },
  { value: "8", label: "Specialized Courses" },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Slider */}
      <section className="relative h-[550px] sm:h-[620px] lg:h-[700px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="text-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground leading-tight mb-6">
              {slides[current].title}
            </h1>
            <p className="text-primary-foreground/85 text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
              {slides[current].desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-heritage-green text-heritage-green-foreground px-8 py-3 rounded-sm font-semibold text-sm tracking-wide transition-all hover:-translate-y-px hover:shadow-lg active:scale-[0.98] flex items-center gap-2"
              >
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border border-primary-foreground/40 text-primary-foreground px-8 py-3 rounded-sm font-semibold text-sm tracking-wide transition-all hover:bg-primary-foreground/10"
              >
                CONTACT US
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slider controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/20 hover:bg-primary-foreground/40 text-primary-foreground p-2 rounded-full transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/20 hover:bg-primary-foreground/40 text-primary-foreground p-2 rounded-full transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-heritage-green scale-110" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-heritage-green py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-serif font-bold text-heritage-green-foreground">{stat.value}</p>
                <p className="text-heritage-green-foreground/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser with Dr. Joan green coat */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-accent/15 rounded-lg rotate-1" />
              <img
                src={joanGreen}
                alt="Dr. Joan Ngunnzi Mwende - CEO, Divine Heritage Consultancy"
                className="relative rounded-lg w-full object-cover h-80 lg:h-[450px] shadow-heritage-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="gold-accent mb-3">About Us</p>
              <h2 className="text-display text-3xl lg:text-4xl text-foreground mb-6">
                An Authoritative Approach to Institutional Development
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by Dr. Joan Ngunnzi Mwende, Divine Heritage Consultancy is a premier training and advisory firm headquartered in Nairobi, Kenya. We deliver specialized professional development programs designed to build leadership capacity, strengthen HR systems, and foster inclusive organizational cultures.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 15 years of institutional transformation experience, our programs are trusted by government entities, corporate organizations, and educational institutions across East Africa.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-heritage-green font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="gold-accent mb-3">Our Services</p>
            <h2 className="text-display text-3xl lg:text-4xl text-foreground mb-4">
              Professional Training Programmes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive courses designed for managers, HR professionals, and institutional leaders. Each programme runs for 5 days (40 hours).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="card-heritage group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-bold text-lg">USD 650</span>
                  <span className="text-xs text-muted-foreground">5 Days · 40 Hrs</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold text-sm transition-all hover:-translate-y-px hover:shadow-lg active:scale-[0.98]"
            >
              View All Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Organizations / Impact gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="gold-accent mb-3">Our Impact</p>
            <h2 className="text-display text-3xl lg:text-4xl text-foreground mb-4">
              Transforming Organizations Across East Africa
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From government ministries to corporate boardrooms, our evidence-based interventions have built lasting capacity in over 50 organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img src={joanGroup} alt="Professional training delegates" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-lg font-semibold text-primary-foreground">Institutional Training</h3>
                <p className="text-primary-foreground/80 text-sm">Building leadership across government and corporate sectors</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img src={joanWorkshop} alt="Workshop participants in training session" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-lg font-semibold text-primary-foreground">Professional Workshops</h3>
                <p className="text-primary-foreground/80 text-sm">Hands-on skills development for HR professionals</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img src={joanConference} alt="International conference delegates" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-lg font-semibold text-primary-foreground">Global Conferences</h3>
                <p className="text-primary-foreground/80 text-sm">Thought leadership at international forums</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Impact with selfie photo */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Community Engagement</p>
              <h2 className="text-display text-3xl lg:text-4xl text-primary-foreground mb-6">
                Empowering Communities, One Programme at a Time
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-4">
                Beyond corporate boardrooms, Divine Heritage Consultancy is committed to grassroots impact. Through partnerships with organizations like Plan International, we champion child protection, teacher welfare, and community-driven development.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Our initiatives have trained hundreds of community leaders, educators, and public servants, creating ripple effects that transform entire communities.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-sm font-semibold text-sm transition-all hover:-translate-y-px hover:shadow-lg active:scale-[0.98]"
              >
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <img
                src={joanSelfie}
                alt="Dr. Joan with community leaders and educators"
                className="rounded-lg w-full object-cover h-80 lg:h-[420px] shadow-heritage-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="gold-accent mb-3">What's Coming</p>
            <h2 className="text-display text-3xl lg:text-4xl text-foreground mb-4">
              Latest & Upcoming Events
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="card-heritage group overflow-hidden"
              >
                <img
                  src={eventImg}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-serif font-bold text-primary tabular-nums leading-none">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {event.date.split(" ")[1]}
                  </span>
                  {event.seats === "Limited Seats" && (
                    <span className="ml-auto gold-accent text-[10px] bg-accent/10 px-2 py-1 rounded">
                      {event.seats}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                <div className="flex flex-col gap-1 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {event.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {event.time}</span>
                </div>
                <button className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-heritage-green border border-heritage-green/30 py-2 rounded-sm hover:bg-heritage-green hover:text-heritage-green-foreground transition-all">
                  Register <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
