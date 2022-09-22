import Header from "./Components/Header"
import Home from "./Components/Home";
import Search from "./Components/Search"
import AddPost from './Components/AddPost'
import Likes from './Components/Likes'
import Profile from "./Components/Profile"
import Footer from "./Components/Footer";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/" element={<Search />}></Route>

        <Route path="/" element={<AddPost />}></Route>
        
        <Route path="/" element={<Likes />}></Route>
        
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;


