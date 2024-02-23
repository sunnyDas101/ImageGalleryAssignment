import React from "react";
import ImageGallery from "./components/imageGallery/ImageGallery";
import "./App.css";

const App = () => {
  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <h1 className="heading text-center mt-3">Select Person</h1>
      <div className="line"></div>
      <div className=" padding">
        <div className="row mx-0">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default App;
