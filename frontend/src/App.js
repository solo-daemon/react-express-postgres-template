import './App.css';
import {
  BrowserRouter,
  Routes,
  Route ,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename='/'>
      <div>
        Code for you react app.
      </div>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
