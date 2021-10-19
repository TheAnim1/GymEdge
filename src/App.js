import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/LoginAuth/Login/Login';
import PrivateRoute from './components/LoginAuth/PrivateRoute/PrivateRoute';
import NotFound404 from './components/NotFound404/NotFound404';
import Register from './components/Register/Register';
import Service from './components/Service/Service';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
          <Header></Header>
              <Switch>
                
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route exact path="/home">
                  <Home></Home>
                </Route>
                <Route exact path="/about-us">
                <AboutUs></AboutUs>
                </Route>
                <Route exact path="/faq">
                <Faq></Faq>
                </Route>
                <PrivateRoute exact path="/blogs">
                <Blog></Blog>
                </PrivateRoute>
                
                <PrivateRoute exact path="/service/:serviceId">
                <Service></Service>
                </PrivateRoute>
                <Route exact path="/login">
                <Login></Login>
                </Route>
                <Route exact path="/register">
                <Register></Register>
                </Route>

                <Route exact path="*">
                    <NotFound404></NotFound404>
                </Route>
                
              </Switch>
              <Footer></Footer>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
