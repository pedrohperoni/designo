import { BrowserRouter, Route } from "react-router-dom"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
       <Route path="/" exact component={Home} />
       <Route path="/contact" exact component={Contact} />
    </BrowserRouter>
  );
}

export default App;
