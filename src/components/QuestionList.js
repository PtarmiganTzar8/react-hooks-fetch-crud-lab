import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onQDelete, onUpdate }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => 
        <QuestionItem key={question.id} question={question} onQDelete={onQDelete} onUpdate={onUpdate}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
