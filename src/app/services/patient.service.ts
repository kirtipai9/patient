import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByName(name) {
    return this.http.get(`${baseUrl}?name=${name}`);
  }

  findByAddress(address) {
    return this.http.get(`${baseUrl}?address=${address}`);
  }

  findByCity(city) {
    return this.http.get(`${baseUrl}?city=${city}`);

}
findByState(state) {
  return this.http.get(`${baseUrl}?state=${state}`);
}
findByPincode(pincode) {
  return this.http.get(`${baseUrl}?pincode=${pincode}`);
}
findByPhone(phone) {
  return this.http.get(`${baseUrl}?phone=${phone}`);
}
findByEmail(email) {
  return this.http.get(`${baseUrl}?email=${email}`);
}
findByLocal(local) {
    return this.http.get(`${baseUrl}?local=${local}`);
  }
  findByOpbal(opbal) {
    return this.http.get(`${baseUrl}?opbal=${opbal}`);
  }
  findByClbal(clbal) {
    return this.http.get(`${baseUrl}?clbal=${clbal}`);
  }
  findByTypeid(typeid) {
    return this.http.get(`${baseUrl}?typeid=${typeid}`);
  }
}
