import axios from "axios";

class Api {
  constructor() {
    this.baseUrl = "https://jsonplaceholder.typicode.com";
    this.token = "not-required";
    this.apiInterface = axios.create({
      baseURL: this.baseUrl,
      token: this.token,
    });
    this.apiInterface.interceptors.request.use((req) => {
      req.token = "updated-token";
      console.log({ req });
      return req;
    });
    this.apiInterface.interceptors.response.use((response) => {
      console.log({ response });
      if (response.status !== 200) {
        throw new Error(`error status thrown, status:${response.status}`);
      }
      return response;
    });
  }

  getPosts() {
    return this.apiInterface.get("/posts");
  }

  savePosts(reqBody) {
    return this.apiInterface.post("/posts", { reqBody });
  }

  updatePost(reqBody) {
    return this.apiInterface.put("/posts/1", { reqBody });
  }

  deletePost() {
    return this.apiInterface.delete("/posts/1");
  }
}

export default Api;
