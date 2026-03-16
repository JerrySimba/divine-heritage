import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, BookOpen, Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import drJoan from "@/assets/dr-joan.png";
import trainingImg from "@/assets/training-workshop.jpg";
import eventImg from "@/assets/event-conference.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { title: "Supervision Skills for Managers", icon: Users, desc: "Develop effective communication, leadership, and performance management skills." },
  { title: "Mental Health Training for HR", icon: BookOpen, desc: "Build awareness and skills for early identification and support of workplace mental health." },
  { title: "Gender & Diversity Mainstreaming", icon: Award, desc: "Strengthen leadership for inclusive workplaces with practical gender integration tools." },
  { title: "Interview Skills for HR Managers", icon: Users, desc: "Master preparation, communication, and psychosocial tools for identifying high performers." },
  { title: "Investigation Skills for HR", icon: BookOpen, desc: "Build practical skills in evidence gathering, interviewing, and reporting." },
  { title: "Succession Management", icon: Award, desc: "Acquire tools for talent identification, assessment, and succession strategy implementation." },
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px] py-16 lg:py-0">
            <motion.div
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              <motion.p variants={fadeUp} custom={0} className="gold-accent mb-4">
                Where Passion Forges Progress
              </motion.p>
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground leading-tight mb-6"
              >
                Strategic Wisdom for{" "}
                <span className="text-accent">Modern Heritage</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-primary-foreground/80 text-base lg:text-lg max-w-lg mb-8 leading-relaxed"
              >
                Consultancy rooted in legacy, engineered for the future. We empower organizations through expert training, institutional development, and strategic advisory.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="bg-accent text-accent-foreground px-8 py-3 rounded-sm font-semibold text-sm tracking-wide transition-all hover:-translate-y-px hover:shadow-lg active:scale-[0.98] flex items-center gap-2"
                >
                  Our Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-sm font-semibold text-sm tracking-wide transition-all hover:bg-primary-foreground/10"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-lg -rotate-3" />
                <img
                  src={drJoan}
                  alt="Dr. Joan Ngunnzi Mwende - CEO, Divine Heritage Consultancy"
                  className="relative rounded-lg w-72 sm:w-80 lg:w-96 object-cover shadow-heritage-lg"
                />
              </div>
            </motion.div>
          </div>
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

      {/* About teaser */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={trainingImg}
                alt="Professional training workshop"
                className="rounded-lg shadow-heritage-lg w-full object-cover h-80 lg:h-[420px]"
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
                Meet the Founder <ArrowRight className="w-4 h-4" />
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
