import {
    Component,
    //OnChanges,  OnInit,  DoCheck,  AfterContentInit,  AfterContentChecked,  AfterViewInit,  AfterViewChecked,  OnDestroy,
  } from '@angular/core';
  
  @Component({
    selector: 'app-ciclo',
    templateUrl: './ciclo.component.html',
    styleUrls: ['./ciclo.component.css']
  })
  export class CicloComponente
  // Observe que habilite el implements o no igual funciona
  // sin embargo si habilito pero no existen los métodos se cae
    //implements  OnChanges,  OnInit,  DoCheck,  AfterContentInit,  AfterContentChecked,  AfterViewInit,  AfterViewChecked,  OnDestroy 
    {
      // Creamos una variable , que se utilizará en el HTML
      data = 10;
      constructor() {
  
        console.log('Crear (New) - Valor Data 00 : ',this.data);
        // Tilde al revez   alt + 96
        // Observe que al utilizar tilde al revez, 
        // se coloca dentro del texto la variable 
        // utilizando signo ($)pesos mas las llavez {}
        console.log(`Crear (New) - Valor Data 11 :  ${this.data}`);
      }
      ngOnChanges() {
        console.log(`ngOnChanges - data is ${this.data}`);
      }
      ngOnInit() {
        console.log(`ngOnInit  - data is ${this.data}`);
      }
      ngDoCheck() {
        console.log('ngDoCheck');
      }
      ngAfterContentInit() {
        console.log('ngAfterContentInit');
      }
      ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
      }
      ngAfterViewInit() {
        console.log('ngAfterViewInit');
      }
      ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
      }
      ngOnDestroy() {
        console.log('ngOnDestroy');
      }
      // Método que ejecuta el Boton del Html
      addNumber(): void {
        this.data += 10;
      }
      // Método que ejecuta el Boton del Html
      deleteNumber(): void {
        this.data -= 10;
      }
  }