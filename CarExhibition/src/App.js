import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShareLayout from "./pages/ShareLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProducts from "./pages/SingleProducts";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProducts />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          ></Route>
          <Route path=" * " element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
