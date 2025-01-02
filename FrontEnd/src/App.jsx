import React from "react";
import { Routes, Route } from "react-router-dom";
import UI from "./Layout/UI";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import NewArrivals from "./Pages/NewArrivals";
import Trending from "./Pages/Trending";
import RecentBlog from "./Pages/RecentBlog";
import Newsletter from "./Pages/Newsletter";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserTable from "./components/UserTable";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<UI />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="newarrivals" element={<NewArrivals />} />
          <Route path="trending" element={<Trending />} />
          <Route path="recentBlog" element={<RecentBlog />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="userdetails" element={<UserTable />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
