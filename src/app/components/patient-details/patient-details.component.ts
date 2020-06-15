import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  currentpatient = null;
  message = '';

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getpatient(this.route.snapshot.paramMap.get('id'));
  }

  getpatient(id) {
    this.patientService.get(id)
      .subscribe(
        data => {
          this.currentpatient = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      name: this.currentpatient.name,
      address: this.currentpatient.address,
      city: this.currentpatient.city,
      state: this.currentpatient.state,
      pincode: this.currentpatient.pincode,
      phone: this.currentpatient.phone,
      email: this.currentpatient.email,
      local: this.currentpatient.local,
      opbal: this.currentpatient.opbal,
      clbal: this.currentpatient.clbal,
      typeid: this.currentpatient.typeid
    };

    this.patientService.update(this.currentpatient.id, data)
      .subscribe(
        response => {
          this.currentpatient.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updatepatient() {
    this.patientService.update(this.currentpatient.id, this.currentpatient)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The patient was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletepatient() {
    this.patientService.delete(this.currentpatient.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/patients']);
        },
        error => {
          console.log(error);
        });
  }
}

