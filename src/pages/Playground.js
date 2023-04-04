import style from "./Playground.module.css";
import { Helmet } from "react-helmet";
import { upload } from "@testing-library/user-event/dist/upload";

const Playground = () => {
  return (
    <div className="playground">
      <Helmet>
        <style>{":root {--background-color: #F4BC65; --foreground-color: #333333;  font-size: 16px;}"}</style>
      </Helmet>

      <h1 className={style.title}>Playground</h1>
      <r-grid columns="6" columns-s="2">
        <r-cell span="2" span-s="2">
          <form action="/upload" method="POST" enctype="multipart/form-data">
            <h4 className="pb-2 tracking-tight">File Upload</h4>
            <div className="flex items-start justify-center w-full font-mono">
              <label
                for="dropzone-file"
                className="flex flex-col items-start justify-center w-full border-2 border-gray-300 border-none rounded-md cursor-pointer opacity-90 bg-white">
                <p className="text-sm font-semibold text-gray-100 p-4 tracking-tighter opacity-50">
                  Upload some file here. Max 5MB in size.
                </p>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <h4 className="pb-2 pt-4 tracking-tight">Or type something down here</h4>
            <div className="flex items-start justify-center w-full font-mono">
              <input
                type="text"
                className="block w-full p-4 text-gray-900 rounded-lg outline-0 sm:text-sm font-semibold tracking-tighter bg-white opacity-90"
                placeholder="Type some text here ..."
              />
            </div>
            <button className="block w-50 py-3 px-6 mt-4 text-white rounded-lg bg-gray-50 outline-0 sm:text-md font-semibold  bg-brown">
              {" "}
              Upload as .txt file{" "}
            </button>

            <h4 className="pb-2 pt-4 tracking-tight">Hashed Value</h4>
            <div className="flex items-start justify-center w-full font-mono">
              <p className="block w-full p-4 text-gray-900 rounded-lg outline-0 sm:text-sm font-semibold tracking-tighter bg-white opacity-90">
                0x1234567890
              </p>
            </div>
          </form>

          <h4 className="pb-2 pt-4 tracking-tight">Code Execution block</h4>
          <div className="flex items-start justify-center w-full font-mono">
            <p className="block w-full p-4 text-gray-900 rounded-lg outline-0 sm:text-sm font-semibold tracking-tighter bg-white opacity-90">
              0x1234567890
            </p>
          </div>
        </r-cell>
      </r-grid>
    </div>
  );
};

export default Playground;
