import Home from './pages/Home';
import Playground from './pages/Playground';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Playground' element={<Playground/>}></Route>
    </Routes>
  );
}

export default App;