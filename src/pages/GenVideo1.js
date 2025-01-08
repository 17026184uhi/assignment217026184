import GenVid1Img from "../components/hintsBtnImgs/genVid1Img";
import { db } from "../services/firebase.js";
import { doc, getDoc } from "firebase/firestore";

// function GetQStuff() {
//   const questionId = "balances"; // should probably have done through URL and routing with useParams()

//   async function getQuestions() {
//     const docRef = doc(db, "Questions", questionId);
//     const snapshot = await getDoc(docRef);
//     const questionData = snapshot.data();
//     // console.log(questionData);
//     const questionDetails = questionData[questionId];
//     const qTxt = questionDetails[questionId].questions.fullquestion.question;
//     console.log(
//       "About to lay down that funky cool question text ... @@@@@@@@@@@@@@@@@@"
//     );
//     console.log(qTxt);
//   }

//   getQuestions();
// }

function getImgPath() {
  const mediaId = "dummyMediaFiles";
  var mediaDetails = "";
  var theImgURI = "";
  async function getImages() {
    const docRef = doc(db, "HintsMedia", mediaId);
    const snapshot = await getDoc(docRef);
    const mediaData = snapshot.data();
    // console.log(mediaData.buttons.genVid1);
    mediaDetails = mediaData["buttons"];
    theImgURI = mediaDetails.genVid1;
    // console.log(
    // "The media deatils are about to be laid down fat! {}{}{}{}{}{}{}{}"
    // );
    // console.log(mediaDetails);
    // console.log("The media deatils were laid down fat!");
    // console.log("And now for theImgURI");
    // console.log(theImgURI);
    // console.log(
    // "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
    // );
    // console.log(mediaDetails.buttons);
    // const theURI = mediaDetails.buttons.genVid1;
    // console.log("The image path is:", theURI);
  }

  // console.log("The image path is ##############################");
  getImages();
  // const theURI = mediaDetails;
  console.log(theImgURI);

  return (
    <div>
      <div>
        the image path is a long way from here and it is windy (as opposed to
        windy) and slippery
        <br />
        {theImgURI}
      </div>
    </div>
  );
}

function GenVid1() {
  // console.log("This is the general video 1 page");
  // console.log("In folder: src/pages/");

  // const q = GetQStuff();
  // const i = GenVid1Img();

  // console.log(i);
  // const theThingWeWant = i.theImgURI;

  // const theThingummy = getImgPath();
  const imgPath1 = GenVid1Img();

  return (
    <div>
      <h1>This is the general video 1 page</h1>
      <h2>In folder: src/pages/</h2>
      {/* <div>Path to the image:</div> */}
      <div>{imgPath1}</div>
    </div>
  );
}

export default GenVid1;
