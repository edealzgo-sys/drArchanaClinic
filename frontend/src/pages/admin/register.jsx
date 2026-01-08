import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState(""); // ✅ name matches backend
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mobileno.length < 10) {
      alert("Mobile number must be at least 10 digits");
      return;
    }

    try {
      await api.post("/admin/register", {
        email,
        password,
        mobileno, // ✅ correct key
      });

      alert("Registered successfully");
      navigate("/admin/login");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full max-w-md shadow"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Register
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel" // ✅ correct type
          placeholder="Enter mobile number"
          className="w-full p-3 border rounded mb-4"
          value={mobileno}
          onChange={(e) =>
            setMobileno(e.target.value.replace(/\D/g, "")) // digits only
          }
          maxLength={15}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-green-600 text-white py-3 rounded">
          Register
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/admin/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
