import React from "react";
import Sidebar from "../../components/dashboard-sidebar/Sidebar";
import Nav from "../../components/dashboard-Nav/Nav";
import DashboardDashboard from "../../components/dashborad-dashboard/DashboardDashboard";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <Sidebar />
      </div>
      <div className="dashboard-right">
        <Nav />
        <DashboardDashboard />
      </div>
    </div>
  );
}

export default Dashboard;
