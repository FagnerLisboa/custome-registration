import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registrationType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectRegistration(type: string) {
    this.registrationType = type;
  }

}
