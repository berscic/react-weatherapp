import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        <a href="https://github.com/berscic/react-weatherapp">
          Open source code
        </a>{" "}
        availble on GitHub
      </p>
    </div>
  );
}
