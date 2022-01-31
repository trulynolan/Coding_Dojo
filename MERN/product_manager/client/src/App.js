import './App.css';
import Form from './Components/Form';
import AllProducts from './Components/AllProducts';
import {BrowserRouter,Switch,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Form/>
      <Switch>
      <Route exact path="/products">
        <AllProducts/>
      </Route>
    </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;