import React from "react";
import AdminPanel from "../components/AdminPanel";
import { Layout } from "../components";
import { useState, useEffect } from "react";
import "./css/userPanel.css";
import axios from "axios";
const UserPanel = () => {
  const [users, setUsers] = useState([]);

  const getDatas = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/users/getall"
      );
      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.log(`Error in fetching data ${error}`);
    }
  };
  useEffect(() => {
    getDatas();
    console.log("use effect running");
  }, []);
  return (
    <Layout>
      <div className="admin">
        <div className="admin-left">
          <AdminPanel />
        </div>
        <div className="admin-right-panel" id="bgimg">
          {users.length == 0 ? (
            <h1>No User Found</h1>
          ) : (
            <div className="tables">
              <h1>All Users</h1>
              <table>
                <thead>
                  <tr className="trow">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((usr) => (
                    <tr key={usr._id} className="trow">
                      <td className="tdata">{usr.fname}</td>
                      <td className="tdata">{usr.lname}</td>
                      <td className="tdata">{usr.username}</td>
                      <td className="tdata">{usr.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UserPanel;
