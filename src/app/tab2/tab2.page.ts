import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private altura: number;
  private resultado: number;

  calcularF(){
    this.resultado = (this.altura +100) * 0.85;
  }

  exibeResultado(): string{
    return (this.resultado).toString() + " kg";
  }

}