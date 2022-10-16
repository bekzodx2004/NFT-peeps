import React from "react";
import "./Faq.scss";
import Question from "./Question/Question";
import api from "../Api";

const Faq = () => {
  return (
    <div className="faq">
      <h5>Faq</h5>
      <h2>Frequent Questions</h2>
      {api.map((savollar) => {
        return <Question savol={savollar.p} />;
      })}
    </div>
  );
};

export default Faq;
