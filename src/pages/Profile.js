import React, { useState } from "react";
import { FaUser, FaBox, FaLock } from "react-icons/fa";

import { useAuth } from "../contexts/AuthContext";
import ProfileSection from "../components/ProfileSection";
import OrdersSection from "../components/OrderSection";
import Spinner from "../components/Spinner";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const { userInfo, updateUserInfo } = useAuth();

  const handleSave = async (updateUserInfo) => {
    try {
      const res = fetch(`https://dummyjson.com/users/${userInfo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateUserInfo),
      });
      if (!res.ok) throw new Error("Error updating user data");
    } catch {}
  };

  if (!userInfo) {
    return <Spinner />;
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4">
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${
                  activeTab === "profile"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                <FaUser /> User information
              </button>
            </li>
            <li>
              <button
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${
                  activeTab === "orders"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("orders")}
              >
                <FaBox /> Orders
              </button>
            </li>
            {/* <li>
              <button
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${
                  activeTab === "adress"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("address")}
              >
                <FaMapMarkerAlt /> Address
              </button>
            </li> */}
            <li>
              <button
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${
                  activeTab === "security"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("security")}
              >
                <FaLock /> Security
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {activeTab === "profile" && <ProfileSection userInfo={userInfo} onSave={handleSave}/>}
        {activeTab === "orders" && <OrdersSection userInfo={userInfo} />}
        {/* {activeTab === "address" && <AddressSection />} */}
        {activeTab === "security" && <SecuritySection userInfo={userInfo} />}
      </main>
    </div>
  );
};


const SecuritySection = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Security</h2>
    {/* Здесь будет смена пароля */}
  </div>
);

export default Profile;
