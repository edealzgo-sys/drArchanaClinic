import Admin from "../models/admin.js";

//
// REGISTER
//
export const registerAdmin = async (req, res) => {
  try {
    const { email, password, mobileno } = req.body;

    if (!email || !password || !mobileno) {
      return res.status(400).json({
        message: "Email, password, and mobile number are required",
      });
    }

    // check existing admin (email or mobile)
    const adminExists = await Admin.findOne({
      $or: [{ email }, { mobileno }],
    });

    if (adminExists) {
      return res
        .status(400)
        .json({ message: "Email or mobile number already exists" });
    }

    const admin = await Admin.create({
      email,
      password,
      mobileno, // ✅ FIXED
    });

    res.status(201).json({
      message: "Admin registered successfully",
      admin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// LOGIN
//
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password required" });
    }

    const admin = await Admin.findOne({ email });

    if (!admin || admin.password !== password) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    if (!admin.isActive) {
      return res
        .status(403)
        .json({ message: "Admin account disabled" });
    }

    res.json({
      message: "Login successful",
      admin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// FORGOT PASSWORD
//
export const forgotPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({
        message: "Email and new password required",
      });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    admin.password = newPassword;
    await admin.save();

    res.json({
      message: "Password updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
