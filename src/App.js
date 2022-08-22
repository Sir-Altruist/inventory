import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Purchases from "./pages/Purchases";
import Reports from "./pages/Reports";
import Returns from "./pages/Returns";
import Sales from "./pages/Sales";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import { Login, Register } from "./pages";
function App() {
  const path = window.location.pathname.split("/")[1];

  let links =
    path !== "dashboard" ? (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    ) : (
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="/dashboard/purchases" element={<Purchases />} />
            <Route path="/dashboard/sales" element={<Sales />} />
            <Route path="/dashboard/returns" element={<Returns />} />
            <Route path="/dashboard/report" element={<Reports />} />
          </Routes>
        </Layout>
      </Router>
    );
  return <>{links}</>;
}

export default App;
