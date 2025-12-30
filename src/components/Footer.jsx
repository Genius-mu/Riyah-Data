import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/plans", label: "Data Plans" },
    { path: "/contact", label: "Contact" },
  ];

  const networks = [
    { name: "MTN", color: "text-yellow-400" },
    { name: "Glo", color: "text-green-400" },
    { name: "Airtel", color: "text-red-400" },
    { name: "9mobile", color: "text-emerald-400" },
  ];

  const features = [
    { icon: <Zap className="w-4 h-4" />, text: "Instant Delivery" },
    { icon: <Shield className="w-4 h-4" />, text: "100% Secure" },
    { icon: <Clock className="w-4 h-4" />, text: "24/7 Support" },
    { icon: <Star className="w-4 h-4" />, text: "Best Rates" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp}>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  RAYAH'S BYTE BUZZ
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Reshaping the world one byte at a time. Nigeria's most trusted
              platform for instant airtime and data delivery.
            </p>

            {/* Features */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <div className="text-purple-400">{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Networks Supported */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4 text-white">Networks</h3>
            <div className="space-y-3">
              {networks.map((network) => (
                <div key={network.name} className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${network.color.replace(
                      "text",
                      "bg"
                    )}`}
                  />
                  <span className="text-gray-400">{network.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <p className="text-sm text-gray-400 mb-2">Get Started Today</p>
              <Link
                to="/plans"
                className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
              >
                View Plans
              </Link>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:09132755106"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="text-sm font-semibold">09132755106</p>
                </div>
              </a>

              <a
                href="https://wa.me/2349132755106"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                  <p className="text-sm font-semibold">Chat with us</p>
                </div>
              </a>

              <a
                href="mailto:balogunameerah06@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-semibold text-xs">
                    support@rayahsbytebuzz.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-semibold">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media & Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 flex items-center justify-center md:justify-end gap-1">
                &copy; 2025 RAYAH'S BYTE BUZZ.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                All rights reserved. Terms & Privacy Policy
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Accent */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
    </footer>
  );
};

export default Footer;
