import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import ExploreServices from './pages/ExploreServices/ExploreServices';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Registration from './pages/Login/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import Purchase from './pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/explore-services">
              <ExploreServices></ExploreServices>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Registration></Registration>
            </Route>
            <Route exact path="/purchase">
              <Purchase></Purchase>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
