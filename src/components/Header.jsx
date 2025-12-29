import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Home, Info, Package, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/about", label: "About", icon: <Info className="w-5 h-5" /> },
    { path: "/plans", label: "Plans", icon: <Package className="w-5 h-5" /> },
    { path: "/contact", label: "Contact", icon: <Phone className="w-5 h-5" /> },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#FF4081] to-[#1A237E] rounded-full flex items-center justify-center shadow-md"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FF4081] to-[#1A237E] bg-clip-text text-transparent">
                  RAYAH'S BYTE BUZZ
                </span>
                <span className="text-xs text-gray-500 tracking-tight">
                  Stay Connected
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-gray-50/80 px-2 py-1 rounded-full">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                        isActive(link.path)
                          ? "bg-gradient-to-r from-[#1A237E] to-[#FF4081] text-white shadow-md"
                          : "text-gray-700 hover:bg-white/80"
                      }`}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </motion.div>
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1A237E] to-[#FF4081] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="/plans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-3 bg-gradient-to-r from-[#1A237E] to-[#FF4081] text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all text-sm"
              >
                Get Started
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF4081] to-[#1A237E] text-white shadow-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FF4081] to-[#1A237E] rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl bg-gradient-to-r from-[#FF4081] to-[#1A237E] bg-clip-text text-transparent">
                      Menu
                    </span>
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X size={24} className="text-gray-600" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        to={link.path}
                        onClick={toggleMenu}
                        className={`flex items-center gap-3 px-5 py-3.5 rounded-xl font-medium transition-all ${
                          isActive(link.path)
                            ? "bg-gradient-to-r from-[#1A237E] to-[#FF4081] text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <a
                    href="/plans"
                    onClick={toggleMenu}
                    className="block w-full bg-gradient-to-r from-[#1A237E] to-[#FF4081] text-white text-center py-3.5 px-6 rounded-xl font-semibold shadow-md"
                  >
                    View All Plans
                  </a>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 p-4 bg-gradient-to-br from-[#1A237E]/5 to-[#FF4081]/5 rounded-xl border border-[#1A237E]/10"
                >
                  <h4 className="font-bold text-[#1A237E] mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Contact us for instant support
                  </p>
                  <a
                    href="tel:09132755106"
                    className="flex items-center gap-2 text-[#1A237E] font-medium text-sm hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    09132755106
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
