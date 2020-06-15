import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: any;
  currentpatient = null;
  currentIndex = -1;
  name = '';

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.retrievepatients();
  }

  retrievepatients() {
    this.patientService.getAll()
      .subscribe(
        data => {
          this.patients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrievepatients();
    this.currentpatient = null;
    this.currentIndex = -1;
  }

  setActivepatient(patient, index) {
    this.currentpatient = patient;
    this.currentIndex = index;
  }

  removeAllpatients() {
    this.patientService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrievepatients();
        },
        error => {
          console.log(error);
        });
  }

  searchName() {
    this.patientService.findByName(this.name)
      .subscribe(
        data => {
          this.patients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
