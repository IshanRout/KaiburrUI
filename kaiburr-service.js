import http from "../http-common";

class KaiburrService {
  getAll() {
    return http.get("/findAll");
  }

  create(data) {
    return http.post("/add", data);
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }
  findByName(name) {
    return http.get(`/get?title=${name}`);
  }
}

export default new KaiburrService();