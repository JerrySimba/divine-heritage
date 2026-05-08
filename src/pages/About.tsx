import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, Heart, BookOpen, Globe, Shield, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import drJoan from "@/assets/dr-joan.png";
import joanSpeaking from "@/assets/joan-speaking.jpg";
import joanConference from "@/assets/joan-conference.jpg";
import joanSelfie from "@/assets/joan-selfie.jpg";
import joanGroup from "@/assets/joan-group.jpg";
import joanGreen from "@/assets/joan-green.jpg";
import divine2 from "@/assets/divine2.jpg";

const coreValues = [
  { icon: Shield, title: "Integrity", desc: "Evidence-based interventions grounded in rigorous academic standards." },
  { icon: Users, title: "Inclusivity", desc: "Promoting gender equity and diversity in every programme." },
  { icon: Globe, title: "Impact", desc: "Measurable outcomes that transform institutions from the inside out." },
  { icon: BookOpen, title: "Excellence", desc: "World-class training trusted by governments and corporations alike." },
];

const education = [
  { degree: "Ph.D. in Education", institution: "Kenyatta University" },
  { degree: "Master of Arts in Sociology (Disaster Management)", institution: "University of Nairobi" },
  { degree: "Bachelor of Education (English & Literature)", institution: "Moi University" },
  { degree: "Certificate in Strategic Management", institution: "Witwatersrand University" },
  { degree: "Strategic Leadership & Development", institution: "Kenya School of Government" },
  { degree: "Senior Management Course", institution: "Kenya School of Government" },
];

const career = [
  { role: "Technical Advisor, SEEQIP", org: "The World Bank" },
  { role: "CEO", org: "Beacon Teachers Africa (to date)" },
  { role: "Lead Consultant — Endline Evaluation (Somalia, Puntland, Jubaland, Somaliland)", org: "Savanna Consultancy / NCA & SCI GBV Project" },
  { role: "Key Expert Consultant, SEQIP Project", org: "The World Bank" },
  { role: "Minister for Education, Youth and Sports, Health, Trade, Tourism and Investment, CEC Member for Gender, Children, Culture and Social Services", org: "County Government of Embu" },
  { role: "General Manager, Education & Leadership", org: "Equity Group Foundation" },
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
            About Divine Heritage Consultancy
          </h1>
        </div>
      </section>

      {/* About the Consultancy */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={divine2}
                alt="Divine Heritage Consultancy office"
                className="rounded-lg w-full object-cover h-80 lg:h-[420px] shadow-heritage-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-5"
            >
              <p className="gold-accent mb-1">The Consultancy</p>
              <h2 className="text-display text-3xl lg:text-4xl text-foreground">
                A Legacy of Institutional Transformation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Divine Heritage Consultancy is a premier training and advisory firm headquartered in Nairobi, Kenya. We specialize in delivering evidence-based professional development programmes that build leadership capacity, strengthen human resource systems, and foster inclusive organizational cultures across East Africa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of institutional transformation experience, we have trained more than 500 professionals and served over 50 organizations — from government ministries and county governments to multinational corporations and educational institutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach bridges academic theory with real-world practice, ensuring every programme delivers measurable, lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="gold-accent mb-3">What Drives Us</p>
            <h2 className="text-display text-3xl lg:text-4xl text-foreground">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-heritage text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="gold-accent mb-3">Our Reach</p>
            <h2 className="text-display text-3xl lg:text-4xl text-foreground mb-4">Trusted Across East Africa</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img src={joanGroup} alt="Training delegates" className="rounded-lg w-full h-72 object-cover shadow-heritage" />
            <img src={joanConference} alt="International conference" className="rounded-lg w-full h-72 object-cover shadow-heritage" />
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Meet the Founder</p>
            <h2 className="text-display text-3xl lg:text-4xl text-primary-foreground">
              Dr. Joan Mwende Kiema Ngunnzi
            </h2>
            <p className="text-primary-foreground/70 mt-2 text-lg font-serif italic">
              Educationist · Global Development Strategist · Leader Par Excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/20 rounded-lg rotate-2" />
                <img
                  src={drJoan}
                  alt="Dr. Joan Mwende Kiema Ngunnzi"
                  className="relative rounded-lg w-full max-w-md mx-auto object-cover shadow-heritage-lg"
                />
              </div>
            </motion.div>

            {/* Bio narrative */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3 space-y-5"
            >
              <p className="text-primary-foreground/85 leading-relaxed">
                An acclaimed educationist, global development strategist, and leader par excellence — Dr. Joan Mwende Kiema Ngunnzi is the visionary behind Divine Heritage Consultancy. An accomplished author spanning nearly every literary, study, and educational genre, and a publisher at large, she brings a rare blend of academic depth and practical wisdom to everything she touches.
              </p>

              <p className="text-primary-foreground/85 leading-relaxed">
                Dr. Joan Mwende Kiema Ngunnzi's public service journey began as the Embu County Minister for Gender, Children, Culture and Social Services, where she established initiatives to unite women artisans through exhibitions and market support, and led the development of the County Gender and Child Protection policies. Within a single year, she spearheaded a baseline survey on Gender-Based Violence and Disability and was elected Chair of the Gender County Ministers Caucus — a portfolio she used to train scores of women in gender and leadership.
              </p>

              <p className="text-primary-foreground/85 leading-relaxed">
                Later, as County Minister for Health, she led her team to place greater focus on primary healthcare, moving medical camps into rural communities to listen to people within their own environments. Her greatest joy? A mega campaign that screened thousands for Tuberculosis, placed the sick under treatment — with the support of Governor H.E. Martin Nyagah Wambora — and helped flatten the curve of neonatal deaths at a time when Embu County had been called out as leading in neonatal mortality.
              </p>

              <p className="text-primary-foreground/85 leading-relaxed">
                In 2014, she spearheaded the establishment of the <strong className="text-accent">Beacon Teachers Movement</strong> — a child protection initiative in collaboration with Plan International — which she has nurtured from concept to its current stature as <strong className="text-accent">Beacon Teachers Africa</strong>, championing children's rights, safeguarding, and enhanced teacher welfare for better learning outcomes.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://womawordsliterary.wordpress.com/2020/05/06/conversations-inside-candidtalkstudio-with-iconic-embu-county-minister-joan-mwende-kiema-ngunzi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors underline underline-offset-4"
            >
              Want to know more about Dr. Joan Mwende Kiema Ngunnzi? Read this feature →
            </a>
          </div>
        </div>
      </section>

      {/* More bio + community work */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="gold-accent mb-1">Community & Literary Legacy</p>
              <h2 className="text-display text-3xl text-foreground">
                A Gift to Community & Language
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For her community, Dr. Joan Mwende Kiema Ngunnzi has authored six course books in her local Kikamba language — a gift that helps children learn to read and write in their mother tongue, giving them a strong grounding for language learning. These books have since found their way to Harvard University, where they are used to teach Kikamba.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                She is also actively involved in educating local communities on indigenous foods as a measure to reduce malnutrition and cancer. A poet, songwriter, and educator at heart, she writes poetry and teaches it to youth whenever she has the chance — and sings at the slightest provocation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={joanSpeaking} alt="Dr. Joan speaking at an event" className="rounded-lg w-full h-64 object-contain shadow-heritage bg-secondary/30" />
              <img src={joanSelfie} alt="Dr. Joan with community members" className="rounded-lg w-full h-64 object-contain shadow-heritage bg-secondary/30" />
              <img src={joanGreen} alt="Dr. Joan in a meeting" className="rounded-lg w-full h-64 object-contain shadow-heritage col-span-2 bg-secondary/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Career */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-display text-2xl text-foreground">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="card-heritage !p-4"
                  >
                    <p className="font-semibold text-foreground text-sm">{e.degree}</p>
                    <p className="text-muted-foreground text-xs mt-1">{e.institution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Career */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-display text-2xl text-foreground">Career Highlights</h3>
              </div>
              <div className="space-y-4">
                {career.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="card-heritage !p-4"
                  >
                    <p className="font-semibold text-foreground text-sm">{c.role}</p>
                    <p className="text-accent text-xs font-medium mt-1">{c.org}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
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
