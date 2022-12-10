import './normalize.css'
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { TickerNavigation } from './Components/TickerNavigation/TickerNavigation';
import { Trading } from './Components/Trading/Trading';
import { Archive } from './Components/Archive/Archive';
import { TickerContent } from './Components/TickerContent/TickerContent';

function App() {
  return (
    <>
      <BrowserRouter>
        <TickerNavigation />
        <TickerContent>
          <Routes>
            <Route path='/' element={<Trading />}></Route>
            <Route path='/Archive' element={<Archive />}></Route>
          </Routes>
        </TickerContent>
      </BrowserRouter>
    </>
  );
}

export default App;
