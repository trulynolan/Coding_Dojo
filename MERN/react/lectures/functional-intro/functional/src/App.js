import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';

function App() {
  return (
    <div className="App">
      <h1>Hey it's me!</h1>
      <ClassCounter start={10}/>
      <ClassCounter start={100}/>
      <FunctionalCounter start={1000}/>
      <FunctionalCounter start={10000}/>
    </div>
  );
}

export default App;