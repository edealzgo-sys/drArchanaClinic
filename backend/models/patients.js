import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    pat_id: {
      type: Number,
      required: true,
      unique: true,
    },

    pat_code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    pat_mode: {
      type: String,
      trim: true,
    },

    pat_type: {
      type: String,
      trim: true,
    },

    pat_name: {
      type: String,
      required: true,
      trim: true,
    },

    pat_contact_no: {
      type: String,
      required: true,
      trim: true,
    },

    pat_age: {
      type: Number,
    },

    pat_gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    pat_email: {
      type: String,
      lowercase: true,
      trim: true,
    },

    pat_healthissue: {
      type: String,
    },

    pat_healthreports: {
      type: String,
    },

    pat_address: {
      type: String,
    },

    pat_date: {
      type: Date,
      required: true,
    },

    pat_time: {
      type: String, // TIME handled as string in MongoDB
      required: true,
    },

    doct_update: {
      type: String,
    },

    pat_status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: false },
  }
);

export default mongoose.model("PatientBooking", patientSchema);
