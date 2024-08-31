import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Pages/Home/Home';
import ReactJS from './Component/ReactJS';
import NodeJS from './Component/NodeJS';
import ExpressJS from './Component/ExpressJS';
import Js from './Js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={< Home />}/>
            <Route path='/Js' element={< Js />}/>
            <Route path='/React' element={< ReactJS />}/>
            <Route path='/Node' element={< NodeJS />}/>
            <Route path='/Express' element={< ExpressJS />}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
