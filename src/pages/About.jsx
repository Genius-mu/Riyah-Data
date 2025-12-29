import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Award,
  Shield,
  Zap,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const About = () => {
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

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      description: "99.9% uptime with instant delivery guaranteed",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Your satisfaction is our top priority always",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed",
      description: "Lightning-fast transactions in seconds",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "Premium service at unbeatable prices",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const milestones = [
    { year: "2020", achievement: "Founded with a vision to connect Nigeria" },
    { year: "2021", achievement: "Reached 10,000+ happy customers" },
    { year: "2022", achievement: "Expanded to all major networks" },
    { year: "2023", achievement: "Processed over ₦100M in transactions" },
    { year: "2024", achievement: "50,000+ satisfied customers nationwide" },
  ];

  const team = [
    {
      role: "Founder & CEO",
      name: "Rayah",
      description:
        "Passionate about making connectivity accessible to all Nigerians",
    },
  ];

  const features = [
    "30-day validity on most data plans",
    "Instant automated delivery",
    "24/7 customer support",
    "All major Nigerian networks",
    "Secure payment processing",
    "Competitive pricing",
    "No hidden charges",
    "Money-back guarantee",
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
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
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About RAYAH'S BYTE BUZZ
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Reshaping the world one byte at a time, connecting Nigerians with
            affordable and reliable connectivity
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  RAYAH'S BYTE BUZZ was born from a simple belief: everyone
                  deserves affordable and reliable access to mobile
                  connectivity. We saw how expensive and inconvenient it was for
                  Nigerians to buy airtime and data, and we knew there had to be
                  a better way.
                </p>
                <p>
                  Starting with a vision to reshape the world one byte at a
                  time, we've grown from a small operation to serving over
                  50,000 satisfied customers across Nigeria. Our platform
                  supports all major networks—Airtel, MTN, Glo, and 9mobile—with
                  instant delivery and unbeatable prices.
                </p>
                <p>
                  Today, we're proud to be one of Nigeria's most trusted
                  platforms for airtime and data, processing thousands of
                  transactions daily and helping Nigerians stay connected with
                  their loved ones, work, and the world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-500 to-blue-600 p-10 rounded-2xl shadow-xl text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-white/90">
                To reshape the world one byte at a time by making mobile
                connectivity accessible, affordable, and hassle-free for every
                Nigerian. We're committed to providing instant, reliable service
                that keeps you connected to what matters most.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-purple-500 to-pink-500 p-10 rounded-2xl shadow-xl text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-white/90">
                To become Nigeria's number one platform for digital services,
                empowering millions with seamless connectivity. We envision a
                future where staying connected is effortless, affordable, and
                available to everyone, everywhere.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} text-white rounded-full mb-4`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {milestone.year}
                </div>
                <div className="flex-grow bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-lg text-gray-700">
                    {milestone.achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "99.9%", label: "Uptime" },
              { value: "₦100M+", label: "Transactions" },
              { value: "4", label: "Networks Supported" },
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of satisfied customers enjoying instant, affordable
              connectivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/plans"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
              >
                View Our Plans
              </a>
              <a
                href="/contact"
                className="inline-block bg-white border-2 border-gray-900 text-gray-900 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
