import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Form from './Components/Form';
import Category from './Components/Category';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Form />
        <Switch>
          <Route exact path="/:category/:id">
            <Category />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;