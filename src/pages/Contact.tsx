import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you for reaching out. We will get back to you shortly." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="gold-accent mb-3">Get In Touch</p>
          <h1 className="text-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-display text-2xl text-foreground mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking to enroll in a course, book a consultation, or partner with us, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Phone</p>
                    <a href="tel:+254798645696" className="text-muted-foreground text-sm hover:text-heritage-green transition-colors">
                      +254 798 645 696
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <a href="mailto:divineheritageconsultancy@gmail.com" className="text-muted-foreground text-sm hover:text-heritage-green transition-colors">
                      divineheritageconsultancy@gmail.com
                    </a>
                    <br />
                    <a href="mailto:divineheritageconsultancy@yahoo.com" className="text-muted-foreground text-sm hover:text-heritage-green transition-colors">
                      divineheritageconsultancy@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Address</p>
                    <p className="text-muted-foreground text-sm">
                      P.O Box 24116-00100, Nairobi<br />
                      Flamingo Towers, 4th Floor<br />
                      Upper Hill – Mara Road<br />
                      (opposite Japanese Embassy)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="card-heritage space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-input bg-background rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-input bg-background rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-input bg-background rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-input bg-background rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <option value="">Select a topic</option>
                      <option>Course Enrollment</option>
                      <option>Consultation Booking</option>
                      <option>Partnership Inquiry</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-input bg-background rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold text-sm transition-all hover:-translate-y-px hover:shadow-lg active:scale-[0.98]"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
