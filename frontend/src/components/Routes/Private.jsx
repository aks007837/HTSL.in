import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth.jsx";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", // Update this URL to match your backend URL
  });
  const authCheck = async () => {
    const res = await axiosInstance.get("/api/v1/auth/usertest", {
      headers: {
        Authorization: auth?.token,
      },
    });
    console.log(res);
    // console.log(res.data);
    if (res.data.ok) {
      setOk(true);
    } else {
      setOk(false);
    }
  };
  useEffect(() => {
    if (auth?.token) authCheck();
    // console.log(auth);
    // console.log(ok);
  }, [auth?.token]);

  return ok ? <Outlet /> : `spinner`;
}
