import "./App.css";
import Main from "./components/main/Main";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Details from "./components/details/Details";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" component={Main} />
        {/* <Route exact path="/contacts/:id" component={Details} /> */}
        {/* Above is the normal way to render route, below is only necessary if we need to pass in props manually such as blah = hello */}
        <Route
          exact
          path="/contacts/:id"
          render={(props) => {
            return <Details {...props} blah="hello" />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
