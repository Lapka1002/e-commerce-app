import React, { useState } from "react";

const ProfileSection = ({ userInfo, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState(userInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo((prev) => ({
      ...prev,
      [name]: value,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const handleSave = () => {
    onSave(editedInfo);
    setIsEditing(false);
  };
  const { address, city, state, postalCode } = editedInfo.address;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Profile information</h2>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <div className="space-y-4">
          <div className="border-b pb-2">
            <p className="text-gray-500 text-sm">First Name</p>
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={editedInfo.firstName}
                onChange={handleChange}
                className="text-lg font-medium text-gray-900 w-full p-2 border rounded"
              />
            ) : (
              <p className="text-lg font-medium text-gray-900">
                {editedInfo.firstName}
              </p>
            )}
          </div>
          <div className="border-b pb-2">
            <p className="text-gray-500 text-sm">Last Name</p>
            {isEditing ? (
              <input
                type="text"
                name="lastName"
                value={editedInfo.lastName}
                onChange={handleChange}
                className="text-lg font-medium text-gray-900 w-full p-2 border rounded"
              />
            ) : (
              <p className="text-lg font-medium text-gray-900">
                {editedInfo.lastName}
              </p>
            )}
          </div>
          <div>
            <p className="text-gray-500 text-sm">Email</p>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedInfo.email}
                onChange={handleChange}
                className="text-lg font-medium text-gray-900 w-full p-2 border rounded"
              />
            ) : (
              <p className="text-lg font-medium text-gray-900">
                {editedInfo.email}
              </p>
            )}
          </div>
          <div>
            <p className="text-gray-500 text-sm">Address</p>
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={handleChange}
                  className="text-lg font-medium text-gray-900 w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleChange}
                  className="text-lg font-medium text-gray-900 w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  name="state"
                  value={state}
                  onChange={handleChange}
                  className="text-lg font-medium text-gray-900 w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  name="postalCode"
                  value={postalCode}
                  onChange={handleChange}
                  className="text-lg font-medium text-gray-900 w-full p-2 border rounded"
                />
              </>
            ) : (
              <p className="text-lg font-medium text-gray-900">
                {address}, {city}, {state}, {postalCode}
              </p>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileSection;
