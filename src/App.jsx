import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRouter from "./Routes/UserRouter";
import AdminRoutes from './Routes/AdminRoutes'
const App = () => {
 


 

  return (
    <>
    <Routes>
    <Route path="/*" element={<UserRouter />} />
    <Route path="/admin/*" element={<AdminRoutes />}/>
    </Routes>

      </>
  );
};

export default App;