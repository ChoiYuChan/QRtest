import React, { useState } from "react";
import QrReader from "react-qr-scanner";

const QRscanner = () => {
  const [result, setResult] = useState("no result");
  const handleScan = (data) => {
    setResult(data);
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div style={{ background: "#efefef", margin: "1rem 0" }}>
      <h4>QR scanner</h4>
      <QrReader
        style={{ width: "300px", height: "300px" }}
        facingMode="front"
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </div>
  );
};

export default QRscanner;
