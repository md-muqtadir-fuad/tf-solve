import React from 'react';
import parse from 'html-react-parser';

// A small helper component to render questions, handling both array and string formats.
const QuestionContent = ({ content }) => {
    if (Array.isArray(content)) {
        return (
            <ol type="a">
                {content.map((ques, index) => (
                    <li key={index}>{ques}</li>
                ))}
            </ol>
        );
    }
    // If it's a string (potentially with HTML), parse it.
    return <div>{parse(content)}</div>;
};

const QA = ({ item }) => {
    // Split questions into two sections. This is more flexible than hardcoding.
    const sectionA_pairs = item.qa_pairs.slice(0, 4);
    const sectionB_pairs = item.qa_pairs.slice(4, 8);

    return (
        <>
            <div className="ques-header">
                <div className='course_id'>Course ID: {item.id}</div>
                <div className='dept_name'>Dept Name: {item.dept_name}</div>
                <div className='course_name'> Course Name: {item.course_name}</div>
                <div className='credits'>Credit Hour: {item.credits}</div>
                <div className='term'>Term: {item.term}</div>
                <div className="credit"><i>Credit: {item.credit}</i></div>
            </div>

            <div className="section-a">
                <h2 className="section-a-header">Section A</h2>
                {sectionA_pairs.map((pair, index) => (
                    <div key={`secA-${index}`} className={`qa-pair-${index + 1}`}>
                        <h3 className="ques_no">Question No. {index + 1}</h3>
                        <QuestionContent content={pair.question} />
                        {pair.answer && <div className="ans-no"><b>Answer/Solution: </b>{parse(pair.answer)}</div>}
                    </div>
                ))}
            </div>

            <hr></hr>

            <div className="section-b">
                <h2 className="section-b-header">Section B</h2>
                {sectionB_pairs.map((pair, index) => (
                    <div key={`secB-${index}`} className={`qa-pair-${index + 5}`}>
                        <h3 className="ques_no">Question No. {index + 5}</h3>
                        <QuestionContent content={pair.question} />
                        {pair.answer && <div className="ans-no"><b>Answer/Solution: </b>{parse(pair.answer)}</div>}
                    </div>
                ))}
            </div>

            <hr></hr>
        </>
    );
};

export default QA;