import { motion } from "framer-motion";
import { Check, Clock, Star, TrendingUp, Zap } from "lucide-react";

const PlanCard = ({
  title,
  plans,
  validity,
  featured = false,
  color = "from-blue-500 to-purple-600",
  icon,
  bonus,
  discount,
}) => {
  // Parse plan string (e.g., "10GB - ₦3,400 - 7 days")
  const parsePlan = (planString) => {
    const parts = planString.split(" - ");
    return {
      data: parts[0] || "",
      price: parts[1] || "",
      note: parts[2] || null,
    };
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white rounded-2xl shadow-lg p-6 md:p-7 overflow-hidden border-2 group
        ${
          featured
            ? "border-[#FF4081]/50 bg-gradient-to-br from-[#FF4081]/5 to-[#1A237E]/5"
            : "border-gray-200"
        }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FF4081] to-[#1A237E] text-white px-4 py-1.5 rounded-bl-xl font-bold text-sm flex items-center gap-1.5 shadow-md">
          <Star className="w-4 h-4 fill-white" />
          Popular
        </div>
      )}

      {/* Discount Badge (if provided) */}
      {discount && (
        <div className="absolute top-4 left-4 bg-[#1A237E] text-white px-3 py-1 rounded-full font-bold text-xs shadow">
          {discount}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:scale-105 transition-transform`}
        >
          {icon || title[0]}
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{validity}</span>
          </div>
        </div>
      </div>

      {/* Bonus Info */}
      {bonus && (
        <div className="mb-5 bg-gradient-to-r from-[#1A237E]/10 to-[#FF4081]/10 border border-[#1A237E]/20 rounded-xl p-4 text-sm">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-[#1A237E] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1A237E] mb-1">
                Bonus Included:
              </p>
              <p className="text-gray-700">{bonus}</p>
            </div>
          </div>
        </div>
      )}

      {/* Plans List */}
      <div className="space-y-2 mb-6">
        {/* Table Header */}
        <div className="flex justify-between items-center text-xs font-semibold text-gray-500 uppercase tracking-wide pb-2 border-b border-gray-200">
          <span>Data</span>
          <span>Price</span>
        </div>

        {/* Plan Items */}
        {plans.map((plan, index) => {
          const parsed = parsePlan(plan);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ backgroundColor: "rgba(26, 35, 126, 0.05)" }}
              className="flex justify-between items-center py-2.5 px-3 rounded-lg hover:bg-[#1A237E]/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 bg-gradient-to-br ${color} rounded-md flex items-center justify-center text-white opacity-90 group-hover:opacity-100 transition-opacity`}
                >
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900 text-base">
                    {parsed.data}
                  </span>
                  {parsed.note && (
                    <span className="block text-xs text-gray-500">
                      {parsed.note}
                    </span>
                  )}
                </div>
              </div>
              <span className="font-bold text-lg text-[#1A237E]">
                {parsed.price}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Features */}
      <div className="grid grid-cols-3 gap-3 mb-6 text-center text-xs text-gray-600">
        {["Instant Delivery", "Secure", "24/7 Support"].map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <Check className="w-4 h-4 text-green-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="/contact"
        className={`block w-full bg-gradient-to-r ${color} text-white text-center py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-98`}
      >
        Order Now
      </a>

      {/* Subtle Background Decoration */}
      <div
        className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${color} rounded-full opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`}
      />
    </motion.div>
  );
};

export default PlanCard;
