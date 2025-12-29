import { motion } from "framer-motion";
import { Wifi, Clock, Star, Zap } from "lucide-react";
import PlanCard from "../components/PlanCard";

const Plans = () => {
  const networks = [
    {
      name: "MTN",
      color: "from-yellow-400 to-yellow-600",
      icon: "M",
      categories: [
        {
          title: "MTN Standard Plans",
          validity: "30 Days",
          featured: true,
          plans: [
            "1GB - ₦900",
            "2GB - ₦1,400",
            "3GB - ₦1,900",
            "5GB - ₦2,400",
            "7GB - ₦3,450",
            "12.5GB - ₦5,450",
            "16.5GB - ₦6,460",
          ],
        },
        {
          title: "MTN Weekly Plans",
          validity: "7 Days",
          plans: ["1GB - ₦800", "1.2GB - ₦850", "6GB - ₦2,700", "7GB - ₦3,000"],
        },
      ],
    },
    {
      name: "Glo",
      color: "from-green-400 to-green-600",
      icon: "G",
      categories: [
        {
          title: "Glo Standard Plans",
          validity: "30 Days",
          featured: true,
          plans: ["1GB - ₦500", "2GB - ₦960", "3GB - ₦1,450", "5GB - ₦2,350"],
        },
        {
          title: "Glo Weekly Plans",
          validity: "7 Days",
          plans: ["1GB - ₦400"],
        },
        {
          title: "Glo Short Plans",
          validity: "3 Days",
          plans: ["3GB - ₦1,200", "5GB - ₦1,600"],
        },
      ],
    },
    {
      name: "Airtel",
      color: "from-red-400 to-red-600",
      icon: "A",
      categories: [
        {
          title: "Airtel Standard Plans",
          validity: "Varies",
          plans: ["10GB - ₦3,400 - 7 days", "7GB - ₦2,400 - 30 days"],
        },
        {
          title: "Airtel Elite Byte Pack",
          validity: "30 Days",
          featured: true,
          bonus: "Includes 2GB YouTube Night + 200MB (IG, YT, TT)",
          discount: "Best Value",
          plans: [
            "2GB - ₦1,600",
            "3GB - ₦2,200",
            "4GB - ₦2,650",
            "8GB - ₦3,200",
            "10GB - ₦4,200",
            "13GB - ₦5,400",
            "18GB - ₦6,100",
            "25GB - ₦8,400",
            "35GB - ₦10,800",
            "60GB - ₦15,800",
            "100GB - ₦25,000",
          ],
        },
      ],
    },
    {
      name: "9mobile",
      color: "from-emerald-400 to-emerald-600",
      icon: "9",
      categories: [
        {
          title: "9mobile Plans",
          validity: "30 Days",
          plans: [
            "1GB - ₦500",
            "2GB - ₦800",
            "3GB - ₦1,000",
            "4GB - ₦1,800",
            "5GB - ₦2,500",
            "10GB - ₦4,100",
          ],
        },
      ],
    },
  ];

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
            <Wifi className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Yummy Byte Rates
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Affordable data plans for all Nigerian networks with instant
            delivery
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: <Zap className="w-6 h-6" />, text: "Instant Delivery" },
              { icon: <Star className="w-6 h-6" />, text: "Best Prices" },
              { icon: <Clock className="w-6 h-6" />, text: "24/7 Available" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full text-white"
              >
                {item.icon}
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Networks Section with PlanCards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {networks.map((network, networkIndex) => (
            <motion.div
              key={networkIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: networkIndex * 0.1 }}
              className="mb-20 last:mb-0"
            >
              {/* Network Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${network.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                >
                  {network.icon}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {network.name}
                  </h2>
                  <p className="text-gray-600">Choose your perfect plan</p>
                </div>
              </div>

              {/* PlanCards Grid */}
              <div className="flex flex-wrap -mx-4">
                {network.categories.map((category, catIndex) => (
                  <PlanCard
                    key={catIndex}
                    title={category.title}
                    plans={category.plans}
                    validity={category.validity}
                    featured={category.featured}
                    color={network.color}
                    icon={network.icon}
                    bonus={category.bonus}
                    discount={category.discount}
                  />
                ))}
              </div>
            </motion.div>
          ))}
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
              Ready to Get Connected?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose your plan and get instant delivery. No hidden fees, no
              hassle!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-purple-600 py-4 px-10 rounded-full font-bold text-lg hover:shadow-2xl transition-all"
            >
              Contact Us to Order
            </a>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Activation",
                description: "Data delivered within seconds of payment",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Best Rates",
                description: "Unbeatable prices on all networks",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Always here to help with any issues",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
