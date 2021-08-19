import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login/login.page';
import Welcome from './pages/welcome/welcome.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/welcome/:name" component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
