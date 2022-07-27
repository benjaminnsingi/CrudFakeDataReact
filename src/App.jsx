import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/navbar";
import AddPage from "./pages/AddPage";
import ListPage from "./pages/ListPage";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
         <div className="container">
            <Routes>
              <Route exact path="/" element={<ListPage/>}/>
              <Route path="/ajout" element={<AddPage/>}/>
            </Routes>
         </div>
      </Router>
    </div>
  )
}

export default App
