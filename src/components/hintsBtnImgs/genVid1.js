import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase.js";
import { doc, getDoc } from "firebase/firestore";

function GenVid1Img() {
  console.log("Has reached genVid1.js, line 6, once again");
  const [imageUri, setImageUri] = useState("");
  const mediaId = "dummyMediaFiles";

  console.log(mediaId);
  async function getMedia() {
    console.log("Has reached genVid1.js, line 1");
    const docRef = doc(db, "HintsMedia", mediaId);
    const snapshot = await getDoc(docRef);
    const mediaData = snapshot.data();
    const mediaDetails = mediaData["buttons"];
    console.log("Has reached genVid1.js, line 16");
    console.log(mediaData);
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

export default GenVid1Img;
