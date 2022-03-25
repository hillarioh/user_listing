import React, { useState, useContext } from "react";
import "./student.scss";
import StudentsContext from "store/context";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

function Student({ details, expanded, handleExpanded }) {
  const [is_expanded, setIs_Expanded] = useState(false);
  const [tag, setTag] = useState("");
  const { addTag } = useContext(StudentsContext);
  const calculateAverage = () => {
    const { grades } = details;
    const getSum = (a, b) => parseInt(a) + parseInt(b);
    const sum = grades.reduce(getSum);
    return sum / grades.length;
  };

  const handleClick = (e) => {
    setIs_Expanded(!is_expanded);
    handleExpanded(details.id);
  };

  const handleSubmit = () => {
    addTag(details.id, tag);
    setTag("");
  };

  return (
    <div className="student">
      <div className="profile">
        <div className="profile-pic">
          <img src={details.pic} alt="" />
        </div>
      </div>
      <div className="student-body">
        <div>
          <h3>
            {details.firstName} {details.lastName}
          </h3>
          <p>Email: {details.email}</p>
          <p>Company: {details.company}</p>
          <p>Skill: {details.skill}</p>
          <p>Average: {calculateAverage()}%</p>
          <ul>
            {is_expanded &&
              expanded === details.id &&
              details.grades.map((grade, i) => (
                <li key={i}>
                  <span>Test {i + 1}:</span>
                  <span>{grade}%</span>
                </li>
              ))}
          </ul>
          <div className="tag-container">
            <div>
              {details.tags &&
                details.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
            </div>
            <div>
              <input
                type="text"
                name="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="Add a tag"
              />
              {tag && <button onClick={handleSubmit}>submit</button>}
            </div>
          </div>
        </div>
        <div className="expand">
          <span className="icon">
            {is_expanded && expanded === details.id ? (
              <HorizontalRuleIcon onClick={handleClick} />
            ) : (
              <AddIcon onClick={handleClick} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Student;
