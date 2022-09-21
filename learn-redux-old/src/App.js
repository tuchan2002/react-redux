import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="p-5 bg-cyan-100 max-w-4xl mx-auto border">
        <Navbar />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
