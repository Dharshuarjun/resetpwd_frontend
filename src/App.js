import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Login from "./Login";
import Signup from './Signup';
import UserDetails from './UserDetails';
import Reset from './Reset';

function App() {
  return (
   <BrowserRouter>
   <div className="auth-wrapper">
    <div className="auth-inner">
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/sign-in" element={<Login/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/userDetails" element={<UserDetails/>}/>
      <Route path="/reset"element={<Reset/>}/>

    </Routes>
    </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
