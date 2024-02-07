import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserFormComponent } from './userForm.component';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'},),
  responseType: 'text' as 'json'
};

@Component({
  selector: 'app-numbering-config',
  templateUrl: './numberingConfig.component.html',
  styleUrls: ['./numberingConfig.component.css']
})

export class NumberingConfigComponent {
  @ViewChild(UserFormComponent) componentB: UserFormComponent;
  elements = [
    { type: 'name', length : 9, order: 1, prefix: '', suffix: ''},
    { type: 'firstName', length : 9, order: 1, prefix: '', suffix: ''},
    { type: 'birthDate', length : 9, order: 1, prefix: '', suffix: ''},
    { type: 'counter', length : 9, order: 1, prefix: '', suffix: ''}
  ];
  response : any;
  counter = 10;

  constructor(private http: HttpClient) { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.elements, event.previousIndex, event.currentIndex);
  }

  submit() {
    console.log({"numberingCriterias" : this.elements, "counter" : this.counter});
    this.http.post('http://localhost:8080/configure?counter=' + this.counter, this.elements, httpOptions)
    .subscribe(
      response => {
        this.response = response;
        this.componentB.ngOnInit();
        console.log(this.response);
      },
      error => console.error(error)
    );
  }
}