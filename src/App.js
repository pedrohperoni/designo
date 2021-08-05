import { BrowserRouter, Route } from "react-router-dom"
import { Contact } from "./pages/Contact"
import { Locations } from "./pages/Locations"
import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
       <Route path="/" exact component={Home} />
       <Route path="/contact" exact component={Contact} />
       <Route path="/locations" exact component={Locations} />
    </BrowserRouter>
  );
}

export default App;
