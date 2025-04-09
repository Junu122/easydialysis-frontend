import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/User/Home";
import Login from "../pages/User/Login";
import Myappoinments from "../pages/User/Myappoinments";
import Myprofile from "../pages/User/Myprofile";
import Contact from "../pages/User/Contact";
import Appoinment from "../pages/User/Appoinment";
import Navbar from "../components/User/Navbar";
import Dialysiscenters from "../pages/User/Dialysiscenters";
import Servies from "../pages/User/Servies";
import About from "../pages/User/About";
import Signup from "../pages/User/Signup";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../features/auth/authSlice";
import PrivateRoute from "../utils/PrivateRoute";
import { useEffect, useState } from "react";
import TransactionSuccess from "../pages/User/TransactionSuccess";
import PublicRoute from "../utils/PublicRoute";
import KidneyAndDialysisPage from "../pages/User/AboutKidney";
import KidneyMedicationGuide from '../pages/User/MedicationGuidline'
import KidneyDietNutritionGuide from "../pages/User/DietAndNutrition";
const UserRouter = () => {
  const dispatch = useDispatch();
  const {  isLoading } = useSelector((state) => state.auth);
  console.log(isLoading, "isloading in app.jsx");
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    dispatch(checkAuth()).finally(() => {
      console.log("response succeed : ");
    });
    setInitialCheckDone(true);
  }, [dispatch]);
  if (!initialCheckDone) {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin text-center "></div>{" "}
            <p className="mt-4  text-lg font-semibold text-primary">
              EASY DIALYSIS
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/myappoinments"
          element={
            <PrivateRoute>
              <Myappoinments />
            </PrivateRoute>
          }
        />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dialysis" element={<Dialysiscenters />} />
        <Route path="/services" element={<Servies />} />
        <Route path="/about" element={<About />} />
        <Route path="/kidney" element={<KidneyAndDialysisPage />}  />
        <Route path="/KidneyMedicationGuide" element={<KidneyMedicationGuide />} />
        <Route path="/kidneyDiet" element={<KidneyDietNutritionGuide /> } />
        <Route
          path="/dialysis/:centerid"
          element={
            <PrivateRoute>
              <Appoinment />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={
           <PublicRoute>
              <Signup />
            </PublicRoute>
        } />
        <Route
          path="/success"
          element={
            <PrivateRoute>
              <TransactionSuccess />
            </PrivateRoute>
          }
        />{" "}
      </Routes>
    </>
  );
};
export default UserRouter;
