// userForm.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  numbers: number[] = [];
  response : any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

ngOnInit() {
    this.http.get<number[]>('http://localhost:8080/getNumberingIds')
      .subscribe(
        data => {
          this.numbers = data;
          console.log(this.numbers);
      });
    this.userForm = this.formBuilder.group({
      name: ['Patrick', Validators.required],
      firstName: ['Patrick', Validators.required],
      birthDate: ['1900-01-01', Validators.required],
      numberingId: ['', Validators.required]
    });
}

  submitForm() {
    if (this.userForm.valid) {
      const numberingId = this.userForm.value.numberingId;
      const userData = {...this.userForm.value, numberingId: undefined};
      this.http.post(`http://localhost:8080/generate?numberingId=${numberingId}`, userData, {responseType:'text'})
      .subscribe(
        response => {
          this.response = response;
          console.log(this.response);
        },
        error => console.error(error)
      );
    }
}
}
