
import { Outlet } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet/>
    </div>
  );
}

export default App;
