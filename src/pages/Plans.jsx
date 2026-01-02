import { motion } from "framer-motion";
import { Wifi, Clock, Star, Zap } from "lucide-react";
import PlanCard from "../components/PlanCard";
import { Helmet } from "react-helmet-async";

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
            "7GB - ₦3,450",
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
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "RAYAH'S BYTE BUZZ",
            url: "https://yourdomain.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://yourdomain.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A237E] via-[#1A237E]/80 to-[#FF4081] py-16 md:py-20 overflow-hidden">
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
          className="relative container mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-lg rounded-full mb-4 sm:mb-6"
          >
            <Wifi className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our Yummy Byte Rates
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8">
            Affordable data plans for all Nigerian networks with instant
            delivery
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              {
                icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
                text: "Instant Delivery",
              },
              {
                icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
                text: "Best Prices",
              },
              {
                icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
                text: "24/7 Available",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 sm:px-6 sm:py-3 rounded-full text-white text-sm sm:text-base"
              >
                {item.icon}
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Networks Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {networks.map((network, networkIndex) => (
            <motion.div
              key={networkIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: networkIndex * 0.15 }}
              className="mb-12 sm:mb-16 last:mb-0"
            >
              {/* Network Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${network.color} rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-md`}
                >
                  {network.icon}
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#1A237E]">
                    {network.name}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Choose your perfect plan
                  </p>
                </div>
              </div>

              {/* PlanCards Grid - Responsive with grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1A237E] to-[#FF4081]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Get Connected?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Choose your plan and get instant delivery. No hidden fees, no
              hassle!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#1A237E] py-3 sm:py-4 px-8 sm:px-10 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transition-all"
            >
              Contact Us to Order
            </a>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
            {[
              {
                icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Instant Activation",
                description: "Data delivered within seconds of payment",
              },
              {
                icon: <Star className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Best Rates",
                description: "Unbeatable prices on all networks",
              },
              {
                icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10" />,
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
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#1A237E] text-white rounded-full mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A237E] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
