import "./App.css";
import QR from "./QRcode";
import QRTest from "./Test";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <QRTest />
      <QR />
    </div>
  );
}

export default App;
