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
    <div className="playground">
      <Helmet>
        <style>{":root {--background-color: #F0B03D; --foreground-color: #000000;  font-size: 14px; }"}</style>
      </Helmet>

      <h1 className={style.playgroundTitle}>Playground</h1>
      <div className="grid grid-cols-6 gap-12 order-1">
        <div className="col-span-2">
          <div className="pe-4">
            <form action="/upload" method="POST" enctype="multipart/form-data" name="anyfile">
              <h4 className="pb-2 tracking-tight">File Upload</h4>
              <div className="flex items-start justify-center w-full font-mono">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-start justify-center w-full border-2 border-gray-300 border-none rounded-md cursor-pointer bg-white">
                  <p className="text-sm font-semibold text-gray-100 p-4 tracking-tighter opacity-50">
                    Upload some file here. Max 5MB in size.
                  </p>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <button className=" block w-50 py-3 px-6 mt-4 text-white rounded-lg bg-gray-50 outline-0 sm:text-md font-semibold transition duration-300 ease-in-out bg-brown hover:scale-95">
                {" "}
                Whoosh !{" "}
              </button>
            </form>
            <form action="/upload" method="POST" enctype="multipart/form-data" name="txtfile">
              <h4 className="pb-2 pt-4 tracking-tight">Or type something down here</h4>
              <div className="flex items-start justify-center w-full font-mono">
                <input
                  type="text"
                  className="block w-full p-4 text-gray-900 rounded-lg outline-0 sm:text-sm font-semibold tracking-tighter bg-white "
                  placeholder="Type some text here ..."
                />
              </div>
              <button className="block w-50 py-3 px-6 mt-4 text-white rounded-lg bg-gray-50 outline-0 sm:text-md font-semibold transition duration-300 ease-in-out bg-brown hover:scale-95">
                {" "}
                Upload as .txt file{" "}
              </button>

              <h4 className="pb-2 pt-9 tracking-tight">File Hash</h4>
              <div className="flex items-start justify-center w-full font-mono">
                <p className="block w-full p-4 text-gray-900 rounded-lg outline-0 sm:text-sm font-semibold tracking-tight bg-white">
                  {!data ? "Unknown"
                  : data}
                </p>
              </div>
            </form>

            <h4 className="pb-2 pt-4 tracking-tight">Gas Price</h4>
            <div className="flex items-start justify-center w-full font-mono">
              <p className="block w-full p-4 text-gray-900 rounded-lg outline-0 sm:text-sm font-semibold tracking-tighter bg-white opacity-90">
                0
              </p>
            </div>
          </div>
          </div>
          <div className="col-span-4 order-2">
              <h4 className="pb-2 tracking-tight">Code execution</h4>
              <div className="flex items-start justify-center h-90 font-mono">
                <p className="block w-full overflow-y-auto h-full p-4 text-gray-900 rounded-lg outline-0 sm:text-sm font-semibold tracking-tighter bg-white" opacity-90>
                print("Hello, World!")
                </p>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
