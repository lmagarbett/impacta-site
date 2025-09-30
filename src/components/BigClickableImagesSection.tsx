import { Link } from "react-router-dom";
import herobg2 from "../assets/herobg2.jpeg";
import herobg3 from "../assets/herobg3.jpeg";

const BigClickableImagesSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <Link
          to="/services/repairs-maintenance"
          className="relative group overflow-hidden h-80 md:h-96 rounded-lg shadow-lg"
        >
          <img
            src={herobg2}
            alt="Welding and Repairs"
            className="absolute inset-0 w-full h-full object-cover opacity-45 transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(4, 75, 171, 0.5), rgba(15, 23, 42, 0.6))",
              mixBlendMode: "multiply",
            }}
          />
          <div className="relative z-20 flex items-center justify-center h-full text-white text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Repairs & Maintenance
              </h3>
              <p className="text-lg text-gray-200">
                Professional repair and maintenance solutions
              </p>
            </div>
          </div>
        </Link>

        {/* Second image - Industrial Textile Sewing */}
        <Link
          to="/services/industrial-textile-sewing" // Link to Industrial Textile Sewing service
          className="relative group overflow-hidden h-80 md:h-96 rounded-lg shadow-lg"
        >
          <img
            src={herobg3}
            alt="Industrial Textile Sewing"
            className="absolute inset-0 w-full h-full object-cover opacity-45 transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(4, 75, 171, 0.5), rgba(15, 23, 42, 0.6))",
              mixBlendMode: "multiply",
            }}
          />
          <div className="relative z-20 flex items-center justify-center h-full text-white text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Industrial Textile Sewing
              </h3>
              <p className="text-lg text-gray-200">
                Professional industrial textile sewing solutions
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BigClickableImagesSection;
