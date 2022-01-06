import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import CodeForInterview from './Component/CodeForInterview';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import app from  './CSR/App';
import chat from  './CSR/Chat';
import sidebar from  './CSR/Sidebar';
import sidebarchat from  './CSR/SidebarChat';
import axios from  './CSR/axios';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/SCR" component={app} />
        <Route exact path="/SRC" component={chat} />
        <Route exact path="/SRC" component={sidebar} />
        <Route exact path="/SRC" component={sidebarchat} />
        <Route exact path="/SRC" component={axios} />
        <Route exact path="/" component={CodeForInterview} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
