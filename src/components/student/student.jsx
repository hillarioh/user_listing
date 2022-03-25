import React from "react";
import "./student.scss";

function Student({ details }) {
  const calculateAverage = () => {
    const { grades } = details;
    const getSum = (a, b) => parseInt(a) + parseInt(b);
    const sum = grades.reduce(getSum);
    return sum / grades.length;
  };

  return (
    <div className="student">
      <div className="profile">
        <div className="profile-pic">
          <img src={details.pic} alt="" />
        </div>
      </div>
      <div>
        <h3>
          {details.firstName} {details.lastName}
        </h3>
        <p>Email: {details.email}</p>
        <p>Company: {details.company}</p>
        <p>Skill: {details.skill}</p>
        <p>Average: {calculateAverage()}%</p>
      </div>
    </div>
  );
}

export default Student;
