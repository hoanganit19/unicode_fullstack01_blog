import Main from "./Layouts/Main/Main";
import { BrowserRouter } from "react-router-dom";
import StateProvider from "./Services/Context/StateProvider";

function App() {
  return (
    <BrowserRouter>
      <StateProvider>
        <Main />
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
