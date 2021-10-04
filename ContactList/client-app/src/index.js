import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import "./index.css";

// Import Components
import Main from "./Components/Main/Main";
import AddContact from "./Components/AddContact/AddContact";
import NotFound from "./Components/NotFound/NotFound";
import NavBar from "./Components/NavBar/NavBar";
import EditContact from "./Components/EditContact/EditContact"

// Import store
import store from "./store";
import { Provider } from "react-redux";

const App = () => {

  return (
    <div className="container bootstrap snippets bootdeys bootdey" >
      <div className="row decor-default rounded">
        <Router>
          <NavBar />
          <Switch>
            <Provider store={store}>
              <Route path="/" exact render={() => <Main />} />
              <Route path="/add-new-contact" exact render={() => <AddContact />} />
              <Route path="/edit-contact" exact render={() => <EditContact />} />
            </Provider>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

