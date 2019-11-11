import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private peso: number;
  private altura: number;
  private imc: number;

  constructor() {}

  calcularIMC(){
    this.imc = this.peso / (this.altura * this.altura);
  }

  exibeIMC(): string{
    return (this.imc).toString() + " do seu imc" ;
  }

}
