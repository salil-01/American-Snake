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
