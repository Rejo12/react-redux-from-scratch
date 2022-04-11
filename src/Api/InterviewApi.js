import axios from "axios";

export const fetchInterviewDataApi = () => {
	return axios.get("https://jsonplaceholder.typicode.com/users");
};
