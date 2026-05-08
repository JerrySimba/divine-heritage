import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, DollarSign, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
  {
    title: "Supervision Skills for Managers",
    objectives: [
      "Develop Effective Communication and Feedback Skills",
      "Enhance Leadership and Motivation Skills",
      "Improve Oversight and Performance Management",
      "Conflict Resolution and Problem-Solving",
    ],
  },
  {
    title: "Mental Health Training Course for HR Managers",
    objectives: [
      "Increase Awareness and Understanding of Workplace Mental Health",
      "Build Skills for Early Identification and Support",
      "Promote a Supportive and Inclusive Work Environment",
      "Strengthen Crisis Management and Referral Pathways",
    ],
  },
  {
    title: "Gender and Diversity Mainstreaming",
    objectives: [
      "Gender and diversity management tools",
      "Gender and diversity Mainstreaming",
      "Deepen Understanding of Gender and Inclusion Concepts",
      "Integrate Gender and Inclusion into Policies and Practices",
      "Strengthen Leadership for Inclusive Workplaces",
    ],
  },
  {
    title: "Interview Skills for HR Managers",
    objectives: [
      "Enhance Preparation and Planning Skills",
      "Strengthen Communication and Presentation Skills",
      "Build Competence in Handling Different Interview Formats",
      "Improve Self-Awareness and Confidence",
      "Master psychological tools for minimizing stress at interviews",
      "Acquire tools for HIGHEST BID IDENTIFICATION for interviewees",
      "Psychosocial tools for identification of high performers",
    ],
  },
  {
    title: "Investigation Skills for HR Managers",
    objectives: [
      "Build Knowledge of Investigation Principles and Ethics",
      "Develop Practical Skills in Evidence Gathering and Analysis",
      "Enhance Interviewing and Fact-Finding Techniques",
      "Improve Reporting and Decision Making Competence",
    ],
  },
  {
    title: "Succession Management Course for HR Managers",
    objectives: [
      "Strengthen Understanding of Succession Planning Principles",
      "Develop Skills in Talent Identification and Assessment",
      "Acquire tools for Design and Implementation of Succession Strategies",
      "Improve Monitoring, Evaluation, and Risk Management in Succession",
    ],
  },
  {
    title: "Strategic Retirement",
    subtitle: "This course is fit for anyone in employment",
    objectives: [
      "Plan Retirement and Preparedness to exit employment",
      "Strengthen Financial Literacy and Security Skills",
      "Promote Well-being and Healthy Living in Retirement",
      "Develop Personal Transition and Legacy Plans",
    ],
  },
  {
    title: "Positive Discipline Course for School Principals",
    objectives: [
      "Deepen Understanding of Positive Discipline Principles",
      "Provide hands on tools for dealing with difficult students",
      "Strengthen Leadership in Creating Supportive School Cultures",
      "Develop Skills in Conflict Resolution and Behavior Management",
      "Enhance Policy Implementation and Stakeholder Engagement",
    ],
  },
  {
    title: "Culture and Diversity Management",
    objectives: [
      "Deepen Understanding of Cultural Competence in the Workplace",
      "Develop Strategies for Managing Multicultural Teams",
      "Build Inclusive Policies that Respect Diverse Backgrounds",
      "Strengthen Communication Across Cultural Boundaries",
    ],
  },
  {
    title: "Gender and Inclusion Management",
    objectives: [
      "Master Gender-Responsive Policy Development",
      "Build Skills for Inclusive Leadership and Decision Making",
      "Integrate Inclusion Metrics into Organizational Systems",
      "Strengthen Advocacy for Equity at all Levels",
    ],
  },
  {
    title: "Life Skills",
    objectives: [
      "Develop Critical Thinking and Problem-Solving Abilities",
      "Build Effective Communication and Interpersonal Skills",
      "Strengthen Emotional Intelligence and Self-Awareness",
      "Enhance Personal and Professional Goal Setting",
    ],
  },
  {
    title: "Disaster Management",
    objectives: [
      "Build Knowledge of Disaster Risk Reduction Frameworks",
      "Develop Emergency Response and Coordination Skills",
      "Strengthen Community Resilience and Preparedness Planning",
      "Improve Post-Disaster Recovery and Rehabilitation Strategies",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="gold-accent mb-3">What We Offer</p>
          <h1 className="text-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Professional Training Programmes
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Each course runs for 5 days (40 hours) and is designed to deliver practical, transformative skills for professionals at all levels. We also design bespoke programmes for institutions according to established needs.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.4 }}
                className="card-heritage flex flex-col"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {course.title}
                </h3>
                {course.subtitle && (
                  <p className="text-accent text-sm font-medium italic mb-3">{course.subtitle}</p>
                )}

                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Objectives of the course:
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {course.objectives.map((obj, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-heritage-green font-bold mt-0.5">{j + 1}.</span>
                      {obj}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" /> 5 Days (40 Hrs)
                    </span>
                    <span className="flex items-center gap-1.5 text-lg font-bold text-accent">
                      <DollarSign className="w-4 h-4" /> USD 650
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center gap-1 text-sm font-semibold text-heritage-green hover:gap-2 transition-all"
                  >
                    Enroll <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
