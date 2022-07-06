import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Step1 from "../pages/Signup/Step1";
import Step2 from "../pages/Signup/Step2";
// import your route components too

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup">
        <Route index element={<Signup />} />
        <Route path="step-1" element={<Step1 />} />
        <Route path="step-2" element={<Step2 />} />
        <Route path="step-3" element={<Step1 />} />
        <Route path="step-4" element={<Step1 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
