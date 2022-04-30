import "./App.css";
import FilterSearch from "./components/Filter/FilterSearch";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="app">
      <FilterSearch />
      {/* <br /> */}
      <Todos />
    </div>
  );
}

export default App;
