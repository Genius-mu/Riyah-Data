import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Shield, Clock, TrendingUp, Star, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Delivery",
      description: "Get your airtime and data in seconds, 24/7",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Secure",
      description: "Bank-level encryption for all transactions",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Always here to help with any issues",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Best Rates",
      description: "Lowest prices guaranteed in Nigeria",
    },
  ];

  const networks = [
    { name: "MTN", color: "bg-yellow-500", discount: "5% off" },
    { name: "Airtel", color: "bg-red-500", discount: "4% off" },
    { name: "Glo", color: "bg-green-500", discount: "6% off" },
    { name: "9mobile", color: "bg-emerald-600", discount: "5% off" },
  ];

  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "99.9%", label: "Uptime" },
    { value: "₦2M+", label: "Transactions Daily" },
    { value: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      name: "Chioma Adeyemi",
      rating: 5,
      text: "Best data service ever! Always instant and reliable. I've been using them for 6 months now.",
      role: "Regular Customer",
    },
    {
      name: "Tunde Okafor",
      rating: 5,
      text: "The prices are unbeatable and customer service is excellent. Highly recommended!",
      role: "Business Owner",
    },
    {
      name: "Blessing Michael",
      rating: 5,
      text: "I love how fast the delivery is. No more going to shops to buy data cards!",
      role: "Student",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Helmet>
        <title>
          RAYAH'S BYTE BUZZ | Buy Cheap MTN, Glo, Airtel, 9mobile Data & Airtime
        </title>
        <meta
          name="description"
          content="Buy affordable MTN, Glo, Airtel & 9mobile data plans with instant delivery in Nigeria. Best prices, 24/7 support."
        />
        <meta
          name="keywords"
          content="RAYAH, riyahdata, ryah, buy data, cheap data Nigeria, MTN data, Glo data, Airtel data, 9mobile data, instant data delivery"
        />
        <meta
          property="og:title"
          content="RAYAH'S BYTE BUZZ - Affordable Data & Airtime"
        />
        <meta
          property="og:description"
          content="Instant delivery of cheap data bundles for all networks in Nigeria."
        />
        <meta
          property="og:image"
          content="https://riyahdata.vercel.app/og-image.jpg"
        />{" "}
        {/* Add a real image */}
        <meta property="og:url" content="https://riyahdata.vercel.app/" />
        <meta name="twitter:card" content="riyahdata" />
        <link
          alt="RAYAH'S BYTE BUZZ"
          rel="canonical"
          href="https://riyahdata.vercel.app/"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A237E] via-purple-600 to-[#FF4081] overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 py-20 text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            RAYAH'S BYTE BUZZ
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nigeria's fastest and most reliable platform for airtime and data.
            Instant delivery, unbeatable prices!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link alt="RAYAH'S BYTE BUZZ" to="/plans">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1A237E] py-4 px-8 rounded-full font-bold text-lg shadow-2xl flex items-center gap-2"
              >
                View Plans <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link alt="RAYAH'S BYTE BUZZ" to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-full font-bold text-lg"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-[#1A237E] mb-4"
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We're committed to providing the best service in Nigeria
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A237E] text-white rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Network Providers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A237E] mb-4">
              All Major Networks Supported
            </h2>
            <p className="text-lg text-gray-600">
              Get the best deals on all Nigerian networks
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {networks.map((network, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-8 rounded-2xl text-center shadow-md relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 ${network.color} text-white text-xs px-3 py-1 rounded-bl-lg font-bold`}
                >
                  {network.discount}
                </div>
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 ${network.color} text-white rounded-full text-2xl font-bold mb-4`}
                >
                  {network.name[0]}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {network.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section hmm */}
      <section className="py-20 bg-gradient-to-br from-[#1A237E] to-[#FF4081]">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-xl text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A237E] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1A237E] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1A237E] to-[#FF4081]">
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
              Join thousands of satisfied customers enjoying instant airtime and
              data delivery
            </p>
            <Link alt="RAYAH'S BYTE BUZZ" to="/plans">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1A237E] py-4 px-10 rounded-full font-bold text-lg shadow-2xl inline-flex items-center gap-2"
              >
                Check Out Our Plans <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
