import React, { useEffect } from "react";
import "./admin.css";
import Headerr from "../components/Headerr";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

function Admin() {
  const emailValue = useSelector((store) => store.email);
  const navigate = useNavigate(); 
  console.log(emailValue);

  let usersArray=[]
  console.log(emailValue)

  const users = [
    { id: 1, status: "Do/MM/YYYY", recentCheck: 2 },
    { id: 2, status: "Do/MM/YYYY", recentCheck: 2 },
    { id: 3, status: "Do/MM/YYYY", recentCheck: 2 },
    { id: 4, status: "Do/MM/YYYY", recentCheck: 2 },
    { id: 5, status: "Do/MM/YYYY", recentCheck: 2 },
  ];


  const handleAddUser = () => {
    navigate('/admin-home/add-user'); 
  };

  useEffect(()=>{
    const fetchUsers=async()=>{
      const usersData=await axios.post('https://vridhamitra.onrender.com/get-users',{
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
          <h2>BluePulse: A new age of healthcare is here</h2>
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
            <div className="table-actions"> 
              <button className="view-all">View all</button>
              <button 
                className="add-user-btn" 
                onClick={handleAddUser}
              >
                + Add User
              </button>
            </div>
          </div>
        </section>
      </main>
      <section className="section">
        <h3>Recent Locations</h3>
        <div className="map-placeholder">
          <img src="src\assets\map.jpg" alt="Map placeholder" />
        </div>
        <div className="text"><p>Powered by Google Maps</p></div>
      </section>
    </div>
  );
}

export default Admin;