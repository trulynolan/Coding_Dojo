import './App.css';
import Form from './Components/Form';
import AllPets from './Components/AllPets';
import Single from './Views/Single';
import Update from './Views/Update';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AllPets />
          </Route>
          <Route exact path="/pets/new">
            <Form/>
          </Route>
          <Route exact path="/pets/:_id">
            <Single/>
          </Route>
          <Route exact path="/pets/update/:_id">
            <Update/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;