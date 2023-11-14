
import { Outlet } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Header></Header>
        <Outlet/>
      </Provider>

    </div>
  );
}

export default App;
