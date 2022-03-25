import React, { useEffect, useState, useContext } from "react";
import { getStudents } from "utils/api";
import Student from "components/student";
import StudentsContext from "store/context";
import "app.scss";

function App() {
  const [expanded, setExpanded] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [searchList, setSearchList] = useState([]);
  const { students, addStudents } = useContext(StudentsContext);

  const getStudentList = async () => {
    try {
      let result = await getStudents();
      addStudents(result?.data.students);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  const handleSearch = () => {
    let list = students;
    if (searchName) {
      let nameRegex = new RegExp(`${searchName}`, "i");

      list = list?.filter((f) =>
        nameRegex.test(`${f.firstName} ${f.lastName}`)
      );
    }

    const lookTag = (obj) => {
      let val = [];
      if (obj.tags) {
        let tagRegex = new RegExp(`${searchTag}`, "i");
        val = obj.tags.filter((x) => tagRegex.test(searchTag));
      } else {
        return false;
      }
      return val.length > 0 ? true : false;
    };

    if (searchTag) {
      list = list?.filter((f) => lookTag(f));
    }
    setSearchList(list);
  };

  const handleExpanded = (id) => {
    setExpanded(id);
  };

  useEffect(() => {
    handleSearch();
  }, [searchName, searchTag]);

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
            onChange={(e) => setSearchName(e.target.value)}
            className="search"
            placeholder="Search by name"
          />
        </div>
        <div className="search-container">
          <input
            type="text"
            name="tag"
            onChange={(e) => setSearchTag(e.target.value)}
            className="search"
            placeholder="Search by tag"
          />
        </div>
        {searchName
          ? searchList.map((stud) => (
              <Student
                details={stud}
                key={stud.id}
                expanded={expanded}
                handleExpanded={handleExpanded}
              />
            ))
          : students.map((stud) => (
              <Student
                details={stud}
                key={stud.id}
                expanded={expanded}
                handleExpanded={handleExpanded}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
