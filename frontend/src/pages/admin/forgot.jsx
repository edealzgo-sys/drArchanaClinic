import React, { useState } from "react";
import api from "../../api/axios";
import { Link } from "react-router-dom";

const Forgot = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);

  // STEP 1: Send OTP
  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      await api.post("/otp/send-otp", { mobile });
      alert("OTP sent successfully");
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send OTP");
    }
  };

  // STEP 2: Verify OTP & Reset Password
  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      await api.post("/otp/verify-otp-reset", {
        mobile,
        otp,
        newPassword,
      });
      alert("Password updated successfully");
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={step === 1 ? sendOtp : resetPassword}
        className="bg-white p-8 rounded-xl w-full max-w-md shadow"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {step === 1 ? "Send OTP" : "Reset Password"}
        </h2>

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full p-3 border rounded mb-4"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="OTP"
              className="w-full p-3 border rounded mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 border rounded mb-4"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </>
        )}

        <button className="w-full bg-purple-600 text-white py-3 rounded">
          {step === 1 ? "Send OTP" : "Update Password"}
        </button>

        <p className="text-center mt-4">
          <Link to="/" className="text-blue-600">
            Back to Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Forgot;
