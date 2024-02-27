import React from 'react';

function App() {

  const info = {
    myname: "SADIQ HAWALDAR",
    work: "TATA Consultancy services",
    no: 7892652144,
    age: 25,
    place: "Pune",
    gmail: "sadiqhawaldar00@gmail.com",
    skill: ["HTML5", "CSS", "JavaScript", "React.js", "Node.js"],
  };

  let address = "Adarsh Nagar, Near Asharam Road, Bijapur";

  const education ={
    Collage: "secab Instute bijapur",
    Department: "BCA",
    passingyear: "2020-2021",
    per:69,
  }

  const details = {

    frontend:["html5","css3","javascrit,","react.js"],
    backend:["node.js","express.js","python"],
    database :["SQL","mogo db"],
    work:["SCCM","Azure intune","nextthink"]
    
}

  

  return (

    
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: 'lightblue', padding: '20px' }}>
        <h1>{info.myname}</h1>
      </div>
      <hr />

      <h2><u>Detals</u></h2>
      <div>
        <p>Contact No: {info.no}</p>
        <p>Email: {info.gmail}</p>
        <p>Address: {address}</p>
      </div>

      <div>
        <h2><u>Education</u></h2>
        <h4>Collage : {education.Collage}</h4>
        <h4>Department : {education.Department}</h4>
        <h4>Passing year : {education.passingyear}</h4>
        <h4>Per : {education.per}</h4>

</div>

<h1><u>Skills</u></h1>

<table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', border: '5px solid #ddd',}}>

        <thead style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', border: '1px solid #ddd' }}>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th>Fornt-end</th>
                <th>Back-end</th>
                <th>DATABASE</th>
                <th>CLOUD</th>
                
            </tr>
        </thead>
        <tbody >
          
            <tr style= {{border: '5px solid #ddd',}}>
                <td>{details.frontend[0]}</td>
                <td>{details.backend[0]}</td>
                <td>{details.database[0]}</td>
                <td>{details.work[0]}</td>
            </tr>
            <tr style= {{border: '5px solid #ddd'}}>
                <td>{details.frontend[1]}</td>
                <td>{details.backend[1]}</td>
                <td>{details.database[1]}</td>
                <td>{details.work[1]}</td>
            </tr>
            <tr style= {{border: '5px solid #ddd'}}>
                <td>{details.frontend[2]}</td>
                <td>{details.backend[2]}</td>
                <td>{details.database[2]}</td>
                <td>{details.work[2]}</td>
            </tr>
        </tbody>
    </table>


<div >
  <h2><u>Exprience</u></h2>

  <h3>Dec 2021- present</h3>
  <h4>Company : {info.work}</h4>

  <ol>
    <li>React.js Front-End Development:
    Develop interactive and dynamic user interfaces using React.js.
    Implement state management with tools like Redux for efficient data flow in complex applications.
    Ensure the application follows best practices in React component structure, reusable components, and JSX syntax.</li>
    <li>Node.js Back-End Development:</li>
    <li>Design and implement server-side logic using Node.js for scalable and performant applications.</li>
    <li>Create RESTful APIs using Express.js to facilitate communication between the front-end and back-end.</li>
    <li>Node.js Back-End Development:</li>
    <li>Design and implement server-side logic using Node.js for scalable and performant applications.</li>
    <li>Create RESTful APIs using Express.js to facilitate communication between the front-end and back-end.</li>
    <li>Work with databases like MongoDB or MySQL to store and retrieve data efficiently.</li>
  </ol>

</div>


















    </div>
  );
}

export default App;
