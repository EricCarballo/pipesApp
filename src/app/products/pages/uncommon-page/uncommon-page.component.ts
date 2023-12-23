import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Eric';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    this.name = 'Joselyne';
    this.gender = 'female';
  }

  // i18nPlural
  public clientes: string[] = ['Eric', 'Joselyne', 'José Ángel', 'Natanael Cano', 'Peso Pluma', 'Roberto', 'Hurnolfo'];
  public clientesMap = {
    '=0': 'no tenemos clientes',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes',
  }

  deleteClient(){
    this.clientes.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Eric',
    age: '22',
    address: 'Navojoa, Sonora'
  }


  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
  );

  // las promesas no se pueden cancelar en diferencia al observable
  public promiseValue: Promise<string> = new Promise( (resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('prueba');
    }, 3500);
  });

}
