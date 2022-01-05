import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' ;
import "./App.css"
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import About from './pages/About';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddEdit} />
        <Route path="/update/:id" component={AddEdit} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
