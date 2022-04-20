import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "70px",
      }}
    >
      <Link to="/">QR Scanner</Link>
      <Link to="/code">QR Code</Link>
    </nav>
  );
};

export default Navigation;
