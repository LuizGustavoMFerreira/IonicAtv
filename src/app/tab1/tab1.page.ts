import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private altura: number;
  private resultado: number;

  calcularM(){
    this.resultado = (this.altura +100) * 0.9;
  }

  exibeResultado(): number{
    return this.resultado;
  }

}