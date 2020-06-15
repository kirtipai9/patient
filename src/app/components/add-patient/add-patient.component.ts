import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient = {
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    email: '',
    local: '',
    opbal: '',
    clbal: '',
    typeid: '',
    published: false
  };
  submitted = false;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  savePatient() {
    const data = {
      name: this.patient.name,
      address: this.patient.address,
      city: this.patient.city,
      state: this.patient.state,
      pincode: this.patient.pincode,
      phone: this.patient.phone,
      email: this.patient.email,
      local: this.patient.local,
      opbal: this.patient.opbal,
      clbal: this.patient.clbal,
      typeid: this.patient.typeid

    };

    this.patientService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPatient() {
    this.submitted = false;
    this.patient = {
      name: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
      email: '',
      local: '',
      opbal: '',
      clbal: '',
      typeid: '',
      published: false

    };
  }
}
