import React from "react";
import QRCode from "react-qr-code";

const QR = () => {
  return (
    <div style={{ background: "white", padding: "1rem" }}>
      <QRCode value="https://www.naver.com/" />
    </div>
  );
};

export default QR;
