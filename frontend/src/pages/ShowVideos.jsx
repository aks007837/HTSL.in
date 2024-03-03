import React from "react";
import { Layout } from "../components";
import AdminPanel from "../components/AdminPanel";
import { useState, useEffect } from "react";
import "./css/userPanel.css";
import axios from "axios";
const ShowVideos = () => {
  const [data, setData] = useState([]);

  const getDatas = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/videos/get-videos"
      );
      console.log(res.data);
      setData(res.data);
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
          {data.length == 0 ? (
            <h1>No Videos Found</h1>
          ) : (
            <div className="tables">
              <h1>All Videos</h1>
              <table>
                <thead>
                  <tr className="trow">
                    <th>Video Type</th>
                    <th>Video URL</th>
                    <th>Video Message</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((vid) => (
                    <tr key={vid._id} className="trow">
                      <td className="tdata">{vid.type}</td>
                      <td className="tdata">{vid.links}</td>
                      <td className="tdata">{vid.message}</td>
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

export default ShowVideos;
