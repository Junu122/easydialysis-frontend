import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
import Myappoinments from "./pages/User/Myappoinments";
import Myprofile from "./pages/User/Myprofile";
import Contact from "./pages/User/Contact";
import Appoinment from "./pages/User/Appoinment";
import Navbar from "./components/User/Navbar";
import Dialysiscenters from "./pages/User/Dialysiscenters";
import Servies from "./pages/User/Servies";
import About from "./pages/User/About";
import Signup from "./pages/User/Signup";
import { useDispatch,useSelector } from 'react-redux';
import { checkAuth } from "./features/auth/authSlice";
import PrivateRoute from "./utils/privateRoute";
import { useEffect ,useState} from "react";
const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated,isLoading  } = useSelector((state) => state.auth);
 console.log(isLoading,"isloading in app.jsx")
const [initialCheckDone, setInitialCheckDone] = useState(false);
useEffect(() => {
  // Check auth status when component mounts
  setTimeout(()=>{
    dispatch(checkAuth())
      .finally(() => {
        console.log("response succeed : ")
      });
      setInitialCheckDone(true);
      console.log(initialCheckDone,"555555")
      console.log(isAuthenticated,"666666")
  },1000)
}, []);

 if(!initialCheckDone){
  return <>
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin text-center "></div>
        <p className="mt-4  text-lg font-semibold text-primary">EASY DIALYSIS</p>
      </div>
    </div>
  </>
 }


 

  return (
    <>
   
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myappoinments" element={<Myappoinments />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appoinment" element={<Appoinment />} />
        <Route path="/dialysis" element={<Dialysiscenters />} />
        <Route path="/services" element={<Servies />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dialysis/:centerid"
          element={
            <PrivateRoute>
              <Appoinment />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
      </>
  );
};

export default App;