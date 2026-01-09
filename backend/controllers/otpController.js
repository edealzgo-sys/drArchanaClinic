import axios from "axios";

export const sendOtp = async (req, res) => {
  const { mobile } = req.body;

  // Ensure mobile number has country code
  const formattedMobile = mobile.startsWith('+91') ? mobile : `+91${mobile}`;

  console.log('Sending OTP to:', formattedMobile);

  try {
    const response = await axios.post(
      "https://control.msg91.com/api/v5/widget/sendOtp",
      {
        widgetId: process.env.MSG91_WIDGET_ID,
        identifier: formattedMobile
      },
      {
        headers: {
          authkey: process.env.MSG91_AUTH_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    console.log('MSG91 response:', response.data);
    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error('MSG91 error:', error.response?.data);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};
export const verifyOtpReset = async (req, res) => {
  const { mobile, otp, newPassword } = req.body;

  try {
    await axios.post(
      "https://control.msg91.com/api/v5/widget/verifyOtp",
      {
        widgetId: process.env.MSG91_WIDGET_ID,
        identifier: mobile,
        otp
      },
      {
        headers: {
          authkey: process.env.MSG91_AUTH_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    // 🔐 Hash password before saving
    // const hashed = await bcrypt.hash(newPassword, 10);
    // await Admin.updateOne({ mobile }, { password: hashed });

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error.response?.data);
    res.status(400).json({ message: "Invalid OTP" });
  }
};
