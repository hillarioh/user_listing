import React, { useEffect, useState } from "react";
import { getStudents } from "utils/api";
import Student from "components/student";
import "app.scss";

function App() {
  const [students, setStudents] = useState([]);

  const getStudentList = async () => {
    try {
      let result = await getStudents();
      setStudents(result?.data.students);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <div className="main">
      <div className="students">
        {students.map((stud) => (
          <Student details={stud} key={stud.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
