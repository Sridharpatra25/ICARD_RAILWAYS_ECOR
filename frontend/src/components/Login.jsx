import React from "react";
import g20 from "../assets/g20.jpg";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div className="flex items-center justify-center h-screen bg-gray-100 mt-12 overflow-hidden ">
      <form className="bg-white shadow-lg rounded-xl px-6 py-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Admin Login
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter User ID"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            type="submit"
            className="mt-4 bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition duration-200"
          >
            Login
          </motion.button>
        </div>
        <img src={g20} alt="" />
      </form>
    </motion.div>
  );
};

export default Login;
