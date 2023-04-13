import style from "./Playground.module.css";
import { Helmet } from "react-helmet";
import React from "react";

const Playground = () => {

  // Initialize state to hold response from server
  const [data, setData] = React.useState(null);

  // Make request when component mounts
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.hash));
  }, []);


  return (
    <iframe src="https://tulver.com/hb" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
        Your browser doesn't support iframes
    </iframe>
    
  );
};

export default Playground;
