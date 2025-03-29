import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRouter from "./Routes/UserRouter";
import AdminRouter from "./Routes/AdminRouter";
const App = () => {
 


 

  return (
    <>
    <Routes>
    <Route path="/*" element={<UserRouter />} />
    <Route path="/admin/*" element={<AdminRouter />}/>
    </Routes>

      </>
  );
};

export default App;