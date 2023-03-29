
import "./App.css";
import Footer from "./components/Homepage/Footer";
import { MainRoutes } from "./pages/MainRoutes";


function App() {
    return (
        <div className="App">
            <MainRoutes />
            <Footer />
        </div>
    );

import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './pages/MainRoutes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={"/admin"}>Admin</Link>
      <MainRoutes/>
    </div>
  );

}

export default App;
