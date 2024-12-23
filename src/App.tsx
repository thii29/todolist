//import Home from "./page/Home";
import LineChart from "./page/LineChart";

function App() {
  return (
    // <div className="min-h-screen bg-custom-gray-600">
    //   <Home/>
    // </div>
    <div style={{ backgroundColor: "#0f1319", minHeight: "100vh", color: "#fff" }}>
      <h1>Moon or Doom Chart Demo</h1>
      <LineChart />
    </div>
  );
}

export default App;
