import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-800 to-black">
      {/* Fullscreen Navigation */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center z-50"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-extrabold text-white"
        >
          Bienvenido 🚀
        </motion.h1>
        <nav className="mt-8 space-y-6 text-lg">
          {/* Enlaces dinámicos usando Link */}
          <Link to="/inicio" className="nav-link">
            <motion.div
              whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
              className="text-2xl font-semibold text-gray-300 hover:text-white transition"
            >
              Inicio
            </motion.div>
          </Link>
          <Link to="/nosotros" className="nav-link">
            <motion.div
              whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
              className="text-2xl font-semibold text-gray-300 hover:text-white transition"
            >
              Nosotros
            </motion.div>
          </Link>
          <Link to="/contacto" className="nav-link">
            <motion.div
              whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
              className="text-2xl font-semibold text-gray-300 hover:text-white transition"
            >
              Contacto
            </motion.div>
          </Link>
        </nav>
      </motion.div>

      {/* Button to toggle the menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
      >
        {isOpen ? "Cerrar" : "Menú"}
      </button>

      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isOpen ? 0.3 : 0.8 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-black blur-3xl"
      />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold tracking-wider mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]"
        >
            Crea tu pagina{" "}
            <motion.span
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            >
            😀
            </motion.span>
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl max-w-2xl text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
            Haz el uso de animaciones con react y enrutamientos con react-router-dom
        </motion.p>
        </div>

    </div>
  );
}

export default Home;
