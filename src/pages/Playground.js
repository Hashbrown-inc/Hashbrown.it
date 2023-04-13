import { Helmet } from "react-helmet";
import React from "react";


const Playground = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Helmet>
        <title>Playground</title>
        <style>{`body { padding: 0;}`}</style>
      </Helmet>
      <iframe src="https://tulver.com/hb/" style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default Playground;
