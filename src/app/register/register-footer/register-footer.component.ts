import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-footer',
  templateUrl: './register-footer.component.html',
  styleUrls: ['./register-footer.component.scss']
})
export class RegisterFooterComponent implements OnInit {

  @Output() goBackEvent = new EventEmitter<void>();
  @Input() cadastro: FormGroup;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('register-footer cadastrarForm: ', this.cadastro);
  }

  goBack() {
    this.goBackEvent.emit(); //Passar o evento do componente filho para o componente pai

    // this.router.navigate(['/home']); //chamar diretamente no componente filho.
    //Ambas as formas funcionam
  }
}
