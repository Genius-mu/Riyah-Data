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
  // Parse plan string to extract data and price
  const parsePlan = (planString) => {
    const parts = planString.split(" - ");
    return {
      data: parts[0],
      price: parts[1],
      note: parts[2] || null,
    };
  };

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white rounded-2xl shadow-xl p-8 m-4 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] border-2 ${
        featured
          ? "border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50"
          : "border-gray-200"
      } overflow-hidden group`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-white" />
          Popular
        </div>
      )}

      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-xs">
          {discount}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform`}
        >
          {icon || title[0]}
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{validity}</span>
          </div>
        </div>
      </div>

      {/* Bonus Info */}
      {bonus && (
        <div className="mb-6 bg-purple-100 border border-purple-300 rounded-xl p-4">
          <div className="flex items-start gap-2">
            <Zap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-purple-900 mb-1">
                Bonus Included:
              </p>
              <p className="text-sm text-purple-700">{bonus}</p>
            </div>
          </div>
        </div>
      )}

      {/* Plans List */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wide border-b pb-2">
          <span>Data</span>
          <span>Price</span>
        </div>
        {plans.map((plan, index) => {
          const parsed = parsePlan(plan);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ x: 5, backgroundColor: "rgba(147, 51, 234, 0.05)" }}
              className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-purple-200 transition-all group/item"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center opacity-80 group-hover/item:opacity-100 transition-opacity`}
                >
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-lg">
                    {parsed.data}
                  </span>
                  {parsed.note && (
                    <span className="block text-xs text-gray-500">
                      {parsed.note}
                    </span>
                  )}
                </div>
              </div>
              <span className="font-bold text-xl text-gray-900">
                {parsed.price}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Features */}
      <div className="border-t pt-4 mb-6 space-y-2">
        {["Instant Delivery", "No Hidden Fees", "24/7 Support"].map(
          (feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <Check className="w-4 h-4 text-green-500" />
              <span>{feature}</span>
            </div>
          )
        )}
      </div>

      {/* CTA Button */}
      <a
        href="/contact"
        className={`block w-full bg-gradient-to-r ${color} text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-95`}
      >
        Order Now
      </a>

      {/* Decorative Element */}
      <div
        className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity`}
      />
    </motion.div>
  );
};

export default PlanCard;
