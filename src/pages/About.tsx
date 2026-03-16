import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import drJoan from "@/assets/dr-joan.png";

const milestones = [
  { icon: GraduationCap, label: "Ph.D. in Organizational Development" },
  { icon: Award, label: "15+ Years of Institutional Consulting" },
  { icon: Briefcase, label: "Government & Corporate Advisory" },
  { icon: Heart, label: "Champion of Inclusive Workplaces" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="gold-accent mb-3">Who We Are</p>
          <h1 className="text-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground">
            The Visionary Behind the Heritage
          </h1>
        </div>
      </section>

      {/* Dr. Joan section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/15 rounded-lg rotate-2" />
                <img
                  src={drJoan}
                  alt="Dr. Joan Ngunnzi Mwende"
                  className="relative rounded-lg w-full max-w-md mx-auto object-cover shadow-heritage-lg"
                />
              </div>
              <div className="mt-8 text-center lg:text-left">
                <h3 className="text-display text-2xl text-foreground">Dr. Joan Ngunnzi Mwende</h3>
                <p className="text-accent font-semibold mt-1">Founder & CEO</p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3 space-y-6"
            >
              <h2 className="text-display text-3xl text-foreground">
                A Legacy of Academic Excellence & Institutional Impact
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Dr. Joan Ngunnzi Mwende is a distinguished organizational development specialist and the visionary founder of Divine Heritage Consultancy. With a career spanning over 15 years in institutional consulting, she has become a trusted advisor to government agencies, multinational corporations, and educational institutions across East Africa.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Holding a doctorate in Organizational Development, Dr. Joan brings a unique blend of academic rigour and practical wisdom to every engagement. Her work focuses on building leadership capacity, strengthening human resource systems, promoting gender equity, and fostering mentally healthy workplaces.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Under her stewardship, Divine Heritage Consultancy has trained over 500 professionals and served more than 50 organizations, earning a reputation for transformative, evidence-based interventions that deliver measurable results.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 card-heritage !p-4"
                  >
                    <m.icon className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{m.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="gold-accent mb-3">Our Mission</p>
          <h2 className="text-display text-3xl lg:text-4xl text-foreground mb-8">
            Empowering Organizations Through Knowledge & Heritage
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            At Divine Heritage Consultancy, we believe that sustainable organizational growth is rooted in the development of people. Our mission is to deliver world-class training programmes that equip professionals with the skills, knowledge, and confidence to lead with integrity, inclusivity, and vision. We bridge the gap between academic theory and real-world practice, ensuring every programme leaves a lasting impact.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
