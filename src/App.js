import logo from './logo.svg';
import './App.css';
import QA from './components/QA'
import React from 'react';
import parse from 'html-react-parser'; 
import q1i1 from './assets/qa_img/22-23_ipe_ipe451_q1-i1.png';

const qa_set = [
  {
    id: "IPE 451",
    dept_name: "Industrial and Production Engineering",
    course_name: "Supply Chain Management",
    credits: "3",//credit hour
    term: "4-1",
    credit: "Fahmid Abdullah (IPE 20)",
    ques_no_1: ["Managers must take two key decision when designing a distribution network. What are those two key decisions? With respect to these two key decisions, in case of Bangladesh Drug (medicine) distribution, what will be your decisions? Justify your answer.", "Grocery chains Webvan, Peapod, and Albertsons have used this distribution network in their business. Probably, the same distribution network will be useful for a grocery company in Dhaka city. What distribution network is this? Explain its operation with right diagram."],
    ans_no_1: `
          <p>For drug (medicine) distribution in Bangladesh, the primary choice should be "Retail Storage with Customer Pickup"
            (pharmacies as stocking points). Medicines are time-sensitive and often urgent; customers want immediate access.
            Pickup at licensed pharmacies also enables prescription verification, pharmacist counseling and quick substitution
            if a brand is unavailable. Keeping stock locally shortens response time, reduces quality risks (cold-chain items
            like insulin and vaccines) and simplifies returns.
            Although it raises inventory and facility cost, the higher cost is justified
            by the criticality of availability and the high turns of fast-moving drugs in
            dense urban areas.</p>
        <img src="${q1i1}" width="50%" style="display: block; margin: auto;" alt="Distribution Network Diagram">
        <p>
            For non-urgent medicines (e.g., long-term therapy refills) where customers may order online and can wait for 2–3
            days, a complementary channel is “Distributor Storage with Carrier Delivery”. Centralizing more inventory at
            distributor warehouses lowers total inventory and ensures higher variety than retail storage.
        </p>
        <p>
            From the B2B perspective, replenishing pharmacies/hospitals (customers) works well with “Distributor Storage with
            Last-Mile Delivery”. Wholesaler fleets can run scheduled milk runs to stores in bulk, cutting per-unit transport
            cost, keeping shelf availability high efficiently.
        </p>
        <p>
            In short, I'd choose customer pickup from pharmacies and flow through intermediaries (distributors/wholesalers) as
            the core network for patient-facing demand, while adding online delivery as an option and last-mile wholesaler
            delivery for store replenishment when considering the whole distribution system. <i>[Section 4.3, Page 80-91]</i>
        </p>
      `,
    ques_no_2: `
    <p class="text-gray-700 leading-relaxed text-base">
                    A 20° spur pinion with 20 teeth and a module of 2.5 mm transmits 150 W to a 36-tooth gear. The pinion speed is 100 rpm, and the gears are grade 1, 18 mm face width, through hardened steel at 200 Brinell, ungrounded manufactured to a No. 6 quality standard with open gearing quality installation. Analyze the gear and estimate the AGMA bending and contact stresses and the corresponding factors of safety for a pinion life of 10<sup>8</sup> cycles and a reliability factor of 0.95.
                </p>
            
                <p class="text-gray-700 leading-relaxed text-base">
                    Design a straight-bevel gear mesh for shaft centerlines that intersect perpendicularly. The ungrounded straight-bevel pinion has 22 teeth, a module of 4 mm, and a transmission accuracy number of 5. The pinion and the gear are made of through-hardened steel, both having a core and case hardness of 180 Brinell. The pinion drives the 24-tooth bevel gear. The pinion speed is 1800 rev/min, the face width is 25 mm, and the normal pressure angle is 20°. Both gears have an outboard mounting. Find the power rating based on AGMA pitting resistance if the life goal is 10<sup>9</sup> revolutions of the pinion at 0.999 reliability.
                </p>
    `,
    ans_no_2: "",
    ques_no_3: "",
    ans_no_3: "",
    ques_no_4: "",
    ans_no_4: "",
    ques_no_5: "",
    ans_no_5: "",
    ques_no_6: "",
    ans_no_6: "",
    ques_no_7: "",
    ans_no_7: "",
    ques_no_8: "",
    ans_no_8: ""
  }
];

function App() {
  return (
    <div className="App">
      {
        qa_set.map((data) => (
          <>
            <QA
              id={data.id}
              dept_name={data.dept_name}
              course_name={data.course_name}
              credits={data.credits}
              term={data.term}
              credit={data.credit}
              ques_no_1={data.ques_no_1}
              ques_no_2={parse(data.ques_no_2)}
              ques_no_3={data.ques_no_3}
              ques_no_4={data.ques_no_4}
              ques_no_5={data.ques_no_5}
              ques_no_6={data.ques_no_6}
              ques_no_7={data.ques_no_7}
              ques_no_8={data.ques_no_8}
              ans_no_1={parse(data.ans_no_1)}
              ans_no_2={parse(data.ans_no_2)}
              ans_no_3={parse(data.ans_no_3)}
              ans_no_4={parse(data.ans_no_4)}
              ans_no_5={parse(data.ans_no_5)}
              ans_no_6={parse(data.ans_no_6)}
              ans_no_7={parse(data.ans_no_7)}
              ans_no_8={parse(data.ans_no_8)}
            />
          </>
        ))}
    </div>
  );
}

export default App;
