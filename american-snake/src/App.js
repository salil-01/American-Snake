import './App.css';
import { MainRoutes } from './pages/MainRoutes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={"/admin"}>Admin</Link>
      <Link to={"/products-men"}>Products</Link>
      <MainRoutes/>
    </div>
  );

}

export default App;
