import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRTest = (props) => {
  const [data, setData] = useState("No result");

  return (
    <div style={{ width: "300px", height: "300px", background: "#e8f4d3" }}>
      <h3>QR Reader</h3>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "200px", height: "100px" }}
      />
      <p>{data}</p>
    </div>
  );
};

export default QRTest;
