import "./App.css";
import FilterSearch from "./components/Filter/FilterSearch";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <FilterSearch />
      <Todos />
    </div>
  );
}

export default App;
