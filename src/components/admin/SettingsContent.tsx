import { FC, useState } from "react";

const SettingsContent: FC = () => {
  const [email, setEmail] = useState("example@example.com");
  const [password, setPassword] = useState("********");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);

  const handleEmailChange = () => {
    setEmail(newEmail);
    setNewEmail("");
    setEditingEmail(false);
  };

  const handlePasswordChange = () => {
    setPassword(newPassword);
    setNewPassword("");
    setEditingPassword(false);
  };

  const handleCancelEmail = () => {
    setNewEmail("");
    setEditingEmail(false);
  };

  const handleCancelPassword = () => {
    setNewPassword("");
    setEditingPassword(false);
  };

  return (
    <div className="content-grid">
      <div className="card">
        <h2>PENGATURAN</h2>

        {/* Data Email Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Data Email</h3>
          <p className="text-gray-700">Email: {email}</p>

          {editingEmail ? (
            <div className="mt-4">
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded"
                placeholder="Masukan Email"
              />
              <div className="mt-2">
                <button
                  onClick={handleEmailChange}
                  className="mr-2 inline-block px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEmail}
                  className="inline-block px-4 py-2 bg-gray-300 text-gray-700 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <button
                onClick={() => setEditingEmail(true)}
                className="inline-block px-4 py-2 bg-green-500 text-white rounded"
              >
                Edit Email
              </button>
            </div>
          )}
        </div>

        {/* Data Password Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Data Password</h3>
          <p className="text-gray-700">Password: {password}</p>

          {editingPassword ? (
            <div className="mt-4">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded"
                placeholder="Masukan Password"
              />
              <div className="mt-2">
                <button
                  onClick={handlePasswordChange}
                  className="mr-2 inline-block px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelPassword}
                  className="inline-block px-4 py-2 bg-gray-300 text-gray-700 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <button
                onClick={() => setEditingPassword(true)}
                className="inline-block px-4 py-2 bg-green-500 text-white rounded"
              >
                Edit Password
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MainContent: FC = () => (
  <>
    <SettingsContent />
  </>
);

export default MainContent;
