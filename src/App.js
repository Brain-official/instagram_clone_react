import Home from "./Components/Home";
import Search from "./Components/Search"
import AddPost from './Components/AddPost'
import Likes from './Components/Likes'
import Profile from "./Components/Profile"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout/Layout";



function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/" element={<Search />}></Route>

        <Route path="/" element={<AddPost />}></Route>
        
        <Route path="/" element={<Likes />}></Route>
        
        <Route path="/" element={<Profile/>}></Route>
      </Routes>
      
    </Router>
  );
}


export default App;


