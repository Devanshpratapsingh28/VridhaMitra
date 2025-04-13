import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import { Link } from "react-router-dom";
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

  return (<>

    <div className="home-logo">Vridha Mitra</div>

    <div className="heading-logo">
      <span className="heading-the">The </span>
      <span className="heading-perfect">Perfect </span>
      <span className="heading-combination">combination of <br /></span>
      <span className="heading-volunteered">Volunteered </span>
      <span className="heading-carelogo"> </span>
      <span className="heading-care">Care </span>
      <span className="heading-and">and </span>
      <span className="heading-ai">AI</span>
      <div className="heading-detection">detection</div>
      <div className="heading-ailogo"></div>
    </div>
    <div className="small-text">A single, intuitive app combining emergency response,<br /> daily health management using AI,
      and community support <br />designed specifically for seniors and their caregivers.</div>
                <Link to='/user-home/health-form'>
      <div className="svg-text">Get Started</div>
      </Link>
    <svg className="svg-get" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
      <circle cx="84.5" cy="84.5" r="82" fill="url(#paint0_linear_4_29)" stroke="url(#paint1_linear_4_29)" stroke-width="5" />
      <defs>
        <linearGradient id="paint0_linear_4_29" x1="164" y1="-6.5" x2="5.00001" y2="164" gradientUnits="userSpaceOnUse">
          <stop stop-color="#39EBF5" stop-opacity="0.5" />
          <stop offset="1" stop-color="#20666A" stop-opacity="0.9" />
        </linearGradient>
        <linearGradient id="paint1_linear_4_29" x1="164" y1="5" x2="5" y2="164" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="#39ECF5" />
        </linearGradient>
      </defs>
    </svg>
  </>

  );
};

export default App;
