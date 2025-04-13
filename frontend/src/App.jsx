import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import { Link } from "react-router-dom";

const App = () => {

  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://vridhamitra.onrender.com/", {
        withCredentials: false
      });
      setMsg(data.data.message);
    }
    fetchData();
  }, []);
  console.log(msg);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">VridhaMitra</h1>
          <div className="w-16 h-1 bg-blue-300 mb-6"></div>

          <h2 className="text-2xl font-semibold mb-4">The Perfect Combination of Volunteered Care and AI Detection.</h2>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <p className="text-gray-700 text-lg mb-8">
            A single, intuitive app combining emergency response, daily health management using AI,
            and community support—designed specifically for seniors and their caregivers.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
              See all features ➤
            </button>
            <Link to='/sign-up'>
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-200">
              Get Started
            </button></Link>
            <Link to='/login'>
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-200">
              Log in
            </button></Link>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Blue Pulse. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default App;
