import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  MessageCircle,
  Phone,
  HelpCircle,
  Zap,
  Shield,
  Clock,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = [
    {
      id: "all",
      label: "All Questions",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    { id: "general", label: "General", icon: <Zap className="w-5 h-5" /> },
    { id: "orders", label: "Orders", icon: <Smartphone className="w-5 h-5" /> },
    {
      id: "payment",
      label: "Payment",
      icon: <CreditCard className="w-5 h-5" />,
    },
    { id: "support", label: "Support", icon: <Shield className="w-5 h-5" /> },
  ];

  const faqs = [
    {
      category: "general",
      question: "What is RAYAH'S BYTE BUZZ?",
      answer:
        "RAYAH'S BYTE BUZZ is Nigeria's premier platform for purchasing airtime and data for all major networks (MTN, Glo, Airtel, and 9mobile). We offer instant delivery, competitive prices, and 24/7 customer support to keep you connected.",
    },
    {
      category: "general",
      question: "Which networks do we support?",
      answer:
        "We support all four major Nigerian networks: MTN, Glo, Airtel, and 9mobile.",
    },
    {
      category: "general",
      question: "How fast is delivery?",
      answer:
        "Delivery is instant! Once payment is confirmed, your data or airtime is delivered within seconds.",
    },
    {
      category: "orders",
      question: "How do I place an order?",
      answer:
        "Browse our plans, choose a network and data bundle, then contact us via phone (09132755106) or WhatsApp to place your order.",
    },
    {
      category: "orders",
      question: "Can I order for another number?",
      answer: "Yes! Just provide the recipient's phone number when ordering.",
    },
    {
      category: "orders",
      question: "What if I enter the wrong number?",
      answer:
        "Double-check the number before confirming. Once delivered, data cannot be reversed. Contact us immediately if there's an error.",
    },
    {
      category: "orders",
      question: "How long is the validity?",
      answer:
        "Most plans have 30-day validity. Some have 7-day or 3-day validity (clearly marked).",
    },
    {
      category: "orders",
      question: "Can I get a refund?",
      answer:
        "Refunds are not possible after instant delivery, but we guarantee replacement or refund if there's a delivery issue.",
    },
    {
      category: "payment",
      question: "What payment methods are accepted?",
      answer:
        "We accept bank transfers, mobile money, and other secure methods. We'll provide details when you order.",
    },
    {
      category: "payment",
      question: "Is payment safe?",
      answer:
        "Yes! We use secure, encrypted processing and never store payment details.",
    },
    {
      category: "payment",
      question: "Are there hidden fees?",
      answer: "No hidden fees. The price you see is the price you pay.",
    },
    {
      category: "payment",
      question: "Do you offer bulk discounts?",
      answer:
        "Yes! Special rates are available for bulk purchases and regular customers. Contact us to discuss.",
    },
    {
      category: "support",
      question: "What are your operating hours?",
      answer:
        "Monday-Friday: 8:00 AM - 8:00 PM\nSaturday: 9:00 AM - 6:00 PM\nSunday: 10:00 AM - 4:00 PM",
    },
    {
      category: "support",
      question: "How can I contact support?",
      answer:
        "Call/WhatsApp: 09132755106\nEmail: support@rayahsbytebuzz.com\nWe usually respond within 5 minutes.",
    },
    {
      category: "support",
      question: "What if data doesn't arrive?",
      answer:
        "Check your balance first. If it's still missing after 5 minutes, contact us with your number and details.",
    },
    {
      category: "support",
      question: "Do you provide technical help?",
      answer:
        "Yes! We can guide you through balance checks, troubleshooting, and network settings.",
    },
    {
      category: "general",
      question: "Why are your prices lower?",
      answer:
        "We have direct partnerships and low overhead costs, allowing us to offer the best rates.",
    },
    {
      category: "general",
      question: "Are there subscription plans?",
      answer:
        "Currently pay-as-you-go. We're planning subscription options for regular customers soon.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A237E] via-[#1A237E]/80 to-[#FF4081] py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full mb-6"
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>
      </section>

      {/* Search Section */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#1A237E] focus:ring-2 focus:ring-[#FF4081]/50 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all text-sm ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#1A237E] to-[#FF4081] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or category filter
                </p>
              </motion.div>
            ) : (
              <div className="space-y-3">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 pr-4 text-base">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openQuestion === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-[#1A237E]" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openQuestion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#1A237E] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Our support team is always ready to help you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                href="tel:09132755106"
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-gradient-to-br from-[#1A237E]/5 to-[#1A237E]/10 p-5 rounded-xl text-center hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-[#1A237E] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Available 7 days a week
                </p>
                <p className="font-semibold text-[#1A237E]">09132755106</p>
              </motion.a>

              <motion.a
                href="https://wa.me/2349132755106"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-gradient-to-br from-[#FF4081]/5 to-[#FF4081]/10 p-5 rounded-xl text-center hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-[#FF4081] rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Quick response guaranteed
                </p>
                <p className="font-semibold text-[#FF4081]">Chat Now</p>
              </motion.a>

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-gradient-to-br from-[#1A237E]/5 to-[#FF4081]/5 p-5 rounded-xl text-center hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1A237E] to-[#FF4081] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Response Time</h3>
                <p className="text-sm text-gray-600 mb-1">We're super fast</p>
                <p className="font-semibold text-[#1A237E]">Under 5 minutes</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1A237E] to-[#FF4081]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Browse our affordable data plans and stay connected
            </p>
            <Link
              to="/plans"
              className="inline-block bg-white text-[#1A237E] py-3 px-8 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all"
            >
              View Our Plans
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
