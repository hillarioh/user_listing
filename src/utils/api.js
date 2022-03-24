import axios from "axios";

const url = "https://api.hatchways.io/assessment/students";

const getStudents = async () => await axios.get(url);

export { getStudents };
