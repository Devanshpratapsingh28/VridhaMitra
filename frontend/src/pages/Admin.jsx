import React, { useEffect } from "react";
import "./admin.css";
import Headerr from "../components/Headerr";
import { useSelector } from "react-redux";
import axios from "axios";

function Admin() {

  const emailValue = useSelector((store) => store.email)
  let usersArray=[]
  console.log(emailValue)

  // Sample data for the users table
  const users = [
    { id: 1, status: "Do/MM/YYYY", recentCheck: 2 },
    { id: 2, status: "Do/MM/YYYY", recentCheck: 2 },
    { id: 3, status: "Do/MM/YYYY", recentCheck: 2 },
    { id: 4, status: "Do/MM/YYYY", recentCheck: 2 },
    { id: 5, status: "Do/MM/YYYY", recentCheck: 2 },
  ];

  useEffect(()=>{
    const fetchUsers=async()=>{
      const usersData=await axios.post('http://127.0.0.1:3000/get-users',{
        email:emailValue.email
      })
      console.log(usersData)
      usersArray=usersData.usersArray;
    }
    fetchUsers()
    console.log(usersArray)
  },[])
  return (
    <div className="app">
      <Headerr/>
      <main className="main-content">
        <div className="hero-section">
          <h2>BluePulse:A new age of healthcare is here</h2>
        </div>
      <section className="section" id="section1">
        <h3>Manage care for your loved ones</h3>
        
        <div className="table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Status</th>
                <th>Recent Check</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.status}</td>
                  <td>{user.recentCheck}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="view-all">View all</button>
        </div>
      </section>
</main>
      <section className="section">
        <h3>Recent Locations</h3>
        <div className="map-placeholder">
        <img src="src\assets\map.jpg"/ >
        </div>
        <div className="text"><p>Powered by Google Maps</p></div>
      </section>
    </div>
  );
}

export default Admin;