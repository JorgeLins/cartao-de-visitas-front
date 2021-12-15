import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { About } from './components/about/about'
import { Login } from "./pages/Login/login";
import { RecoverPassword } from "./pages/RecoverPassword/recover";
import { Dashboard } from "./pages/Dashboard/dashboard"
import { Register } from "./pages/Register/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/recuperarsenha" component={RecoverPassword} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/about" component={About}/>
        <Route path="/cadastro" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
