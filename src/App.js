import Feeds from "./Components/Feeds"
import Search from "./Components/Search"
import AddPost from './Components/AddPost'
import Likes from './Components/Likes'
import Profile from "./Components/Profile"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/bootstrap-override.css";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/feeds" element={<Feeds/>}></Route>

        <Route path="/" element={<Search />}></Route>

        <Route path="/" element={<AddPost />}></Route>
        
        <Route path="/" element={<Likes />}></Route>
        
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      
    </Router>
  );
}


export default App;


