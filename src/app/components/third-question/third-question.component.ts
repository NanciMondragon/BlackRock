import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss']
})
export class ThirdQuestionComponent implements OnInit {
  
  result = [] as any;
  points1 = 0 as any;

  options = new Set([
    'Alerta',
    'Miedo',
    'Oportunidad',
 ]);

  stateOptions: any[];

  paymentOptions: any[];

  justifyOptions: any[];

  value1: string = "off";

  value2!: number;

  value3 = new Set([
    'Alerta',
    'Miedo',
    'Oportunidad',
 ]);

  constructor() {
    this.stateOptions = [{label: 'Ok', value: 'ok'}];

  this.paymentOptions = [
      {name: 'Option 1', value: 1},
      {name: 'Option 2', value: 2},
      {name: 'Option 3', value: 3}
  ];

  this.justifyOptions = [
      {icon: 'pi pi-align-left', justify: 'Left'},
      {icon: 'pi pi-align-right', justify: 'Right'},
      {icon: 'pi pi-align-center', justify: 'Center'},
   /*    {icon: 'pi pi-align-justify', justify: 'Justify'} */
  ];
   }


  ngOnInit(): void {
  }

}

