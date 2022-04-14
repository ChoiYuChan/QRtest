import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRTest = (props) => {
  const [data, setData] = useState("No result");

  return (
    <>
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
    </>
  );
};

export default QRTest;
