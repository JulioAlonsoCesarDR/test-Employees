import SignIn from "./components/SignIn";
import Employees from "./components/Employees";

import { Provider } from 'react-redux';
import { store } from './redux/store'
import { HashRouter, Route, Switch } from "react-router-dom";
import Upload from "./components/Upload";

function App() {
  const isAuth = () => {
    const isAuth = localStorage.getItem
    if(isAuth) {
      return <Employees/>
    }else{

      return <SignIn/>
    }
  }
  return (
    <Provider store ={store}>
      <HashRouter>
        <Switch>
          <Route exact path='/login' component={SignIn}/>
          <Route exact path='/employees' component={Employees}/>
          <Route exact path='/upload' component={Upload}/>
          {/* <Route render={isAuth()}/> */}
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
