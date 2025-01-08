import QuestionSection from "../components/QuestionSection";
import HintsSection from "../components/HintsSection";
import AnswerSection from "../components/AnswerSection";

function QuestionPage() {
  // console.log("This is the question page, it has at least been imported.");
  const questionSection = QuestionSection();
  const hintsSection = HintsSection();
  const answerSection = AnswerSection();
  return (
    <div className="container">
      <h1 className="text-center">Question Page</h1>
      <div className="row">
        {questionSection}
        {hintsSection}
      </div>
      <div className="row">{answerSection}</div>
    </div>
  );
}

export default QuestionPage;
