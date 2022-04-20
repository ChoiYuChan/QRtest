import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./router/Home";
import Qrcode from "./router/Qrcode";

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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="code" element={<Qrcode />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>

      {/* <QRscanner /> */}
    </div>
  );
}

export default App;
