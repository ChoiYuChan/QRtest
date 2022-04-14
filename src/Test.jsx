import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRTest = (props) => {
  const [data, setData] = useState("No result");
  const [qrData, setQRdata] = useState();

  return (
    <div style={{ background: "orange", padding: "1rem" }}>
      <h3>QR Reader</h3>
      <QrReader
        constraints={{ facingMode: "environment" }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            setQRdata(result);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        containerStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        videoContainerStyle={{
          width: "300px",
          height: "300px",
          background: "white",
          paddingTop: 0,
        }}
      />
      {data.includes("https//") ? <a href={data}>{data}</a> : <p>{data}</p>}
      {/* {qrData && qrData} */}
    </div>
  );
};

export default QRTest;
