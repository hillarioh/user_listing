import React, { useEffect, useState } from "react";
import { getStudents } from "utils/api";
import Student from "components/student";
import "app.scss";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  const getStudentList = async () => {
    try {
      let result = await getStudents();
      setStudents(result?.data.students);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  const handleSearch = () => {
    let myRegex = new RegExp(`${search}`, "i");

    const list = students?.filter((f) =>
      myRegex.test(`${f.firstName} ${f.lastName}`)
    );
    setSearchList(list);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <div className="main">
      <div className="students">
        <div className="search-container">
          <input
            type="text"
            name="fullname"
            onChange={(e) => setSearch(e.target.value)}
            className="search"
            placeholder="Search by name"
          />
        </div>
        {search
          ? searchList.map((stud) => <Student details={stud} key={stud.id} />)
          : students.map((stud) => <Student details={stud} key={stud.id} />)}
      </div>
    </div>
  );
}

export default App;
