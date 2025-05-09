import React, { useState } from "react";
import { FaUser, FaBox, FaLock, FaBars } from "react-icons/fa";

import { useAuth } from "../contexts/AuthContext";
import ProfileSection from "../components/ProfileSection";
import OrdersSection from "../components/OrderSection";
import SecuritySection from "../components/SecuritySection";
import Spinner from "../components/Spinner";
import SEO from "../components/SEO";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);
  const { userInfo, updateUserInfo } = useAuth();

  const handleSave = async (updateUserInfo) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${userInfo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateUserInfo),
      });
      if (!res.ok) throw new Error("Error updating user data");
    } catch (error) {
      toast.error("Failed to update profile.");
    }
  };

  if (!userInfo) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <SEO
        title={"Profile"}
        description={"View and update your profile, check your order history, and manage security settings."}
        keywords={"profile, account, orders, security settings"} />
      <button
        className="md:hidden p-4 bg-blue-500 text-white flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars className="mr-2" /> Menu
      </button>
      <aside className={`w-full md:w-64 bg-white shadow-md p-4 md:block ${menuOpen ? "block" : "hidden"}`}>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${activeTab === "profile" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                  }`}
                onClick={() => { setActiveTab("profile"); setMenuOpen(false); }}
              >
                <FaUser /> User information
              </button>
            </li>
            <li>
              <button
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${activeTab === "orders" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                  }`}
                onClick={() => { setActiveTab("orders"); setMenuOpen(false); }}
              >
                <FaBox /> Orders
              </button>
            </li>
            <li>
              <button
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${activeTab === "security" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                  }`}
                onClick={() => { setActiveTab("security"); setMenuOpen(false); }}
              >
                <FaLock /> Security
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {activeTab === "profile" && <ProfileSection userInfo={userInfo} onSave={handleSave} />}
        {activeTab === "orders" && <OrdersSection userInfo={userInfo} />}
        {activeTab === "security" && <SecuritySection userInfo={userInfo} onSave={handleSave} />}
      </main>
    </div>
  );
};

export default Profile;
