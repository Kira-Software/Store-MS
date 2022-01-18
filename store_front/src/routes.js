import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

import Privateroute from "./utils/privateroute";
import { useDispatch, useSelector } from "react-redux";

function AllRoutes() {
  const isauthenticated = useSelector((state) => state.auth.isauthenticated);
  const loading = useSelector((state) => state.auth.loading);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={isauthenticated ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
