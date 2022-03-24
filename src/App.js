import React, { useEffect, useState } from "react";
import { getStudents } from "utils/api";
import Student from "components/student";

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
    <div className="App">
      {students.map((stud) => (
        <Student details={stud} key={stud.id} />
      ))}
    </div>
  );
}

export default App;
