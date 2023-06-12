import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [qList, setQList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setQList(data));
  }, []);

  function handleNewQuestion(newQuestion) {
    setQList([...qList, newQuestion])
  }

  function handleQuestionDelete(badQuestion) {
    const upDatedList = qList.filter((question) => question.id !== badQuestion.id);
    setQList(upDatedList)
  }

  function handleUpdateItem(updatedAnswer) {
    const upDatedList = qList.map((question) => {
      if (question.id === updatedAnswer.id) {
        return updatedAnswer;
      } else {
        return question
      }
    })
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onNewQuestion={handleNewQuestion} /> : <QuestionList questions={qList} onQDelete={handleQuestionDelete} onUpdate={handleUpdateItem}/>}
    </main>
  );
}

export default App;
