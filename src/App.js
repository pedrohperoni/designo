import { BrowserRouter, Route } from "react-router-dom"
import { Contact } from "./pages/Contact"
import { Locations } from "./pages/Locations"
import { Home } from "./pages/Home"
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
       <Route path="/" exact component={Home} />
       <Route path="/contact" exact component={Contact} />
       <Route path="/locations" exact component={Locations} />
       <Route path="/about" exact component={About} />
    </BrowserRouter>
  );
}

export default App;
