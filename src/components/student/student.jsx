import React from "react";

function Student({ details }) {
  const calculateAverage = () => {
    const { grades } = details;
    const getSum = (a, b) => parseInt(a) + parseInt(b);
    const sum = grades.reduce(getSum);
    return sum / grades.length;
  };

  return (
    <div>
      <img src={details.pic} alt="" />
      <p>
        {details.firstName} {details.lastName}
      </p>
      <p>Email: {details.email}</p>
      <p>Company: {details.company}</p>
      <p>Skill: {details.skill}</p>
      <p>Average: {calculateAverage()}</p>
    </div>
  );
}

export default Student;
