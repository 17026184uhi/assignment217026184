import genVid1Img from "./hintsBtnImgs/genVid1";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db } from "../services/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import MyButton from "./hintsBtnImgs/MyButtonWithLinkTag.js";
import GenVid1 from "../pages/GenVideo1.js";
import QuestionPage from "../pages/QuestionPage.js";
import TestPage from "../pages/testPage.js";

function handleVideo1Click() {
  console.log("We are now in the handleVideo1Click function");
  return (
    <div>
      <image src="https://firebasestorage.googleapis.com/v0/b/assignment217026184-e764a.firebasestorage.app/o/genVid1.png?alt=media&token=a4b80fa0-3cf9-44e1-85af-04b99cb60861" />
      ;
    </div>
  );
  console.log("we have attempted to output the image without fancy code");
}

function GetImage() {
  const [imageUri, setImageUri] = useState("");
  const mediaId = "dummyMediaFiles";

  // console.log("Media ID:", mediaId);
  async function getMedia() {
    // console.log("Has reached genVid1.js, line 28");
    const docRef = doc(db, "HintsMedia", mediaId);
    const snapshot = await getDoc(docRef);
    const mediaData = snapshot.data();
    const mediaDetails = mediaData["buttons"];
    // console.log(mediaData);
    setImageUri(mediaData.genVid1);
    console.log(imageUri);
  }

  useEffect(() => {
    getMedia();
  });

  return (
    <div>
      <image
        className="mb-4 rounded img-fluid"
        src={imageUri}
        alt="Some temp alt text"
        height={500}
        width={500}
      />
      <p>{mediaId}</p>
    </div>
  );
}

function HintsSection() {
  // console.log("This is the hints section");
  return (
    <div className="col-sm">
      <h3 className="text-center">Hints</h3>
      <div className="p-3 mb-2 bg-light">
        <div className="row">
          <div className="col-6 text-center">
            <p>General</p>
            <div className="mb-5 d-grid gap-2">
              {/* <Router> */}
              <MyButton txt="-" to="" />
              <MyButton txt="test page" to="testpage" />
              <MyButton txt="General Video 1" to="genvid1" />
              <Routes>
                <Route path="./*" element={<QuestionPage />} />
                <Route path="../pages/testPage" element={<TestPage />} />
                <Route path="../genvid1" element={<GenVid1 />} />
              </Routes>
              {/* </Router> */}
              <button
                type="button"
                className="btn btn-primary mb-1 p-2"
                onClick={GetImage}
              ></button>
              <button type="button" className="btn btn-primary mb-1 p-2">
                Primary
              </button>
            </div>
            <div className="mb-5 d-grid gap-2">
              <button type="button" className="btn btn-primary mb-1 p-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary mb-1 p-2">
                Primary
              </button>
            </div>
            <div className="mb-5 d-grid gap-2">
              <button type="button" className="btn btn-primary mb-1 p-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary mb-1 p-2">
                Primary
              </button>
            </div>
          </div>
          <div className="col-6 text-center">
            <p>Problem Specific</p>
            <div className="mb-5 d-grid gap-2">
              <button type="button" className="btn btn-success mb-1 p-2">
                Success
              </button>
              <button type="button" className="btn btn-success mb-1 p-2">
                Success
              </button>
            </div>
            <div className="mb-5 d-grid gap-2">
              <button type="button" className="btn btn-success mb-1 p-2">
                Success
              </button>
              <button type="button" className="btn btn-success mb-1 p-2">
                Success
              </button>
            </div>
            <div className="mb-5 d-grid gap-2">
              <button type="button" className="btn btn-success mb-1 p-2">
                Success
              </button>
              <button type="button" className="btn btn-success mb-1 p-2">
                Success
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HintsSection;
