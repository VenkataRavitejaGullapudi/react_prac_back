import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function AccordionApp() {
    const [questions, setQuestions] = useState(data);
    // Unnecessary
    if (!questions)
        setQuestions(questions)
    return <main>
        <div className="container">
            <h3>Questions and Answers about Login</h3>
            <section className="info">
                {questions.map((question) => {
                    return <SingleQuestion key={question.id} {...question} />
                })}
            </section>
        </div>
    </main>;

}

export default AccordionApp;