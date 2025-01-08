import React, { useEffect, useState } from "react";
import { db } from "../services/firebase.js";
import { doc, getDoc } from "firebase/firestore";

function AnswerSection() {
  // console.log("This is the answer section");
  const [title, setTitle] = useState("");
  const [answer0Text, setAnswer0Text] = useState("");
  const [answer1Text, setAnswer1Text] = useState("");
  const [answer2Text, setAnswer2Text] = useState("");
  const [answer3Text, setAnswer3Text] = useState("");
  const [checkText, setCheckText] = useState("");
  const questionId = "balances"; // should probably have done through URL and routing with useParams()

  async function getQuestions() {
    const docRef = doc(db, "Questions", questionId);
    const snapshot = await getDoc(docRef);
    const questionData = snapshot.data();
    // console.log(questionData);
    const questionDetails = questionData[questionId];

    setTitle(
      questionDetails[questionId].questions.fullquestion.answersSectionTitle
    );
    setAnswer0Text(
      questionDetails[questionId].questions.fullquestion.answers[0]
    );
    setAnswer1Text(
      questionDetails[questionId].questions.fullquestion.answers[1]
    );
    setAnswer2Text(
      questionDetails[questionId].questions.fullquestion.answers[2]
    );
    setAnswer3Text(
      questionDetails[questionId].questions.fullquestion.answers[3]
    );
    setCheckText(questionDetails[questionId].questions.fullquestion.answers[4]);
  }

  useEffect(() => {
    getQuestions();
  });

  return (
    <div className="col-12">
      <h3 className="text-center">{title}</h3>
      <div className="p-3 mb-2 bg-light">
        <div className="row">
          <div className="col-sm d-grid gap-2">
            <button type="button" className="btn btn-secondary mb-2 p-4">
              {answer0Text}
            </button>
            <button type="button" className="btn btn-secondary mb-2 p-4">
              {answer1Text}
            </button>
          </div>
          <div className="col-sm d-grid gap-2">
            <button type="button" className="btn btn-secondary mb-2 p-4">
              {answer2Text}
            </button>
            <button type="button" className="btn btn-secondary mb-2 p-4">
              {answer3Text}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm text-center">
            <button type="button" className="btn btn-primary p-4">
              {checkText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerSection;
