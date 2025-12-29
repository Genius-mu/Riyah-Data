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
  RefreshCw,
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
      question: "Which networks do you support?",
      answer:
        "We support all four major Nigerian networks: MTN, Glo, Airtel, and 9mobile. You can purchase data plans for any of these networks through our platform with instant delivery.",
    },
    {
      category: "general",
      question: "How fast is the delivery?",
      answer:
        "Our data delivery is instant! Once your payment is confirmed, your data or airtime will be delivered to your phone within seconds. We have a 99.9% instant delivery success rate.",
    },
    {
      category: "orders",
      question: "How do I place an order?",
      answer:
        "Placing an order is easy! Simply browse our plans page, choose your preferred network and data plan, then contact us via phone (09132755106) or WhatsApp. Provide your phone number and make payment, and we'll deliver instantly.",
    },
    {
      category: "orders",
      question: "Can I order for someone else's number?",
      answer:
        "Yes! You can purchase data or airtime for any phone number. Just provide us with the recipient's phone number when placing your order, and we'll deliver directly to them.",
    },
    {
      category: "orders",
      question: "What if I enter the wrong phone number?",
      answer:
        "Please double-check the phone number before confirming your order. Once data is delivered to a number, it cannot be reversed or transferred. However, if you notice an error immediately, contact us right away and we'll do our best to help.",
    },
    {
      category: "orders",
      question: "How long is the validity period?",
      answer:
        "Most of our data plans have 30-day validity. Some special plans have 7-day or 3-day validity periods, which are clearly marked. Check the specific plan details before ordering.",
    },
    {
      category: "orders",
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Since data delivery is instant and cannot be reversed once delivered, we generally cannot offer refunds. However, if there's a technical issue on our end or the data wasn't delivered, we'll either resend or provide a full refund.",
    },
    {
      category: "payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, mobile money, and other secure payment methods. Contact us when placing your order and we'll provide you with payment details. All transactions are secure and encrypted.",
    },
    {
      category: "payment",
      question: "Is it safe to pay online?",
      answer:
        "Absolutely! We use secure payment processing methods and never store your payment information. All transactions are encrypted and protected. We've successfully processed thousands of transactions with zero security issues.",
    },
    {
      category: "payment",
      question: "Do you charge any hidden fees?",
      answer:
        "No hidden fees! The price you see is exactly what you pay. We believe in transparent pricing with no surprises at checkout.",
    },
    {
      category: "payment",
      question: "Can I get a discount for bulk purchases?",
      answer:
        "Yes! We offer special rates for bulk purchases and regular customers. Contact us directly to discuss bulk pricing and custom plans for your needs.",
    },
    {
      category: "support",
      question: "What are your operating hours?",
      answer:
        "We're available 7 days a week! Monday-Friday: 8:00 AM - 8:00 PM, Saturday: 9:00 AM - 6:00 PM, Sunday: 10:00 AM - 4:00 PM. For urgent issues, you can always reach us via WhatsApp.",
    },
    {
      category: "support",
      question: "How can I contact customer support?",
      answer:
        "You can reach us via phone at 09132755106, WhatsApp at the same number, or email at support@rayahsbytebuzz.com. We typically respond within 5 minutes during business hours.",
    },
    {
      category: "support",
      question: "What if my data doesn't arrive?",
      answer:
        "If your data hasn't arrived within 5 minutes, first check your phone's data balance by dialing your network's USSD code. If it's still not there, contact us immediately with your phone number and transaction details, and we'll resolve it right away.",
    },
    {
      category: "support",
      question: "Do you offer technical support?",
      answer:
        "Yes! If you're having trouble with your data connection or need help checking your balance, our support team is here to help. We can guide you through troubleshooting steps for your specific network.",
    },
    {
      category: "general",
      question: "Why are your prices lower than others?",
      answer:
        "We have direct partnerships with network providers and operate with low overhead costs. This allows us to pass the savings directly to you while maintaining excellent service quality.",
    },
    {
      category: "general",
      question: "Are there any subscription plans?",
      answer:
        "Currently, we operate on a pay-as-you-go basis, which gives you flexibility. However, we're working on introducing subscription plans for regular customers. Stay tuned!",
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 py-20 overflow-hidden">
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
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all text-lg shadow-lg"
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
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
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
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
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
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-lg text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openQuestion === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-6 h-6 text-purple-600" />
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
                          <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our support team is always ready to help you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                href="tel:09132755106"
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Available 7 days a week
                </p>
                <p className="font-semibold text-blue-600">09132755106</p>
              </motion.a>

              <motion.a
                href="https://wa.me/2349132755106"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Quick response guaranteed
                </p>
                <p className="font-semibold text-green-600">Chat Now</p>
              </motion.a>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
                <p className="text-sm text-gray-600 mb-2">We're super fast</p>
                <p className="font-semibold text-purple-600">Under 5 minutes</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Browse our affordable data plans and stay connected
            </p>
            <Link
              to="/plans"
              className="inline-block bg-white text-purple-600 py-4 px-10 rounded-full font-bold text-lg hover:shadow-2xl transition-all"
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
