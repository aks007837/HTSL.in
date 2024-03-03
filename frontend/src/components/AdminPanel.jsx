import React from "react";
import "./css/adminPanel.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const AdminPanel = () => {
  return (
    <div className="Admin-panel">
      <Link className="links" to="/loggedin-admin/admin-panel">
        <div>Home</div>
      </Link>
      <Link className="links" to="/loggedin-admin/admin-panel/add-testimonials">
        <div>Add testimonials</div>
      </Link>
      <Link className="links" to="/loggedin-admin/admin-panel/show-users">
        <div>Show Registerd Users</div>
      </Link>
      <Link className="links" to="/loggedin-admin/admin-panel/get-testimonials">
        <div>Control or delete testimonials</div>
      </Link>
      <Link className="links" to="/loggedin-admin/admin-panel/add-video">
        <div>Add Videos</div>
      </Link>
      <Link className="links" to="/loggedin-admin/admin-panel/get-video">
        <div>Show All the Videos</div>
      </Link>
    </div>
  );
};

export default AdminPanel;
