import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* -------- ADMIN PAGES -------- */
import Login from "./pages/admin/login";
import Register from "./pages/admin/register";
import Forgot from "./pages/admin/forgot";
import HomeAdmin from "./pages/admin/home_admin";

/* -------- USER PAGES -------- */
import HomeUser from "./pages/user/home_user";
// import BookAppointment from "./pages/user/bookAppointment";
import Treatments from "./pages/user/treatments";

/* -------- COMMON / OPTIONAL -------- */
// import Stories from "./pages/successStories/stories";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* -------- AUTH -------- */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />

        {/* -------- ADMIN -------- */}
        <Route path="/admin/home" element={<HomeAdmin />} />

        {/* -------- USER -------- */}
        <Route path="/user/home" element={<HomeUser />} />
        {/* <Route path="/user/book-appointment" element={<BookAppointment />} /> */}
        <Route path="/user/treatments" element={<Treatments />} />

        {/* -------- SUCCESS STORIES -------- */}
        {/* <Route path="/stories" element={<Stories />} /> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;
