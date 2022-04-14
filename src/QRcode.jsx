import React from "react";
import { ReactDOM } from "react";
import QRCode from "react-qr-code";

const QR = () => {
  return (
    <div style={{ background: "white", padding: "1rem" }}>
      <QRCode value="Hello, world!" />
    </div>
  );
};

export default QR;
