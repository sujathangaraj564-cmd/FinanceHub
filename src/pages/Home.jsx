import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>Finance-Hub</h1>

          <p>
            Smart Financial Management Solutions
          </p>

          <div className="hero-buttons">
            <Link to="/login">
              <button className="btn-gold">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Home;