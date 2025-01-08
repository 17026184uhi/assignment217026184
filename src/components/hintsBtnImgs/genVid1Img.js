import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase.js";
import { doc, getDoc } from "firebase/firestore";

function GenVid1Img() {
  const [imageUri, setImageUri] = useState("");
  const mediaId = "dummyMediaFiles";
  const reqdImg = "genVid1";

  console.log(mediaId);
  async function getMedia() {
    const docRef = doc(db, "HintsMedia", mediaId);
    const snapshot = await getDoc(docRef);
    const mediaData = snapshot.data();
    const mediaDetails = mediaData["buttons"];
    setImageUri(mediaDetails[reqdImg]);
  }

  useEffect(() => {
    getMedia();
  });

  return (
    <div>
      <img
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
