import "./App.css";
import QR from "./QRcode";
import QRscanner from "./QRscanner";
import QRreader from "./QRreader";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100%",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {/* <QRreader /> */}
      <QRscanner />
      <QR />
    </div>
  );
}

export default App;
