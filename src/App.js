import Cards from "./Components/Cards";
import Form from "./Components/Form";
import { GlobalProvider } from "./context/GlobalState";
import './Style.css';
import './form.css';

function App() {
  return (
    <GlobalProvider>
  <Form/>
    <Cards />
    </GlobalProvider>
  );
}

export default App;
