import { Pipe, PipeTransform } from "@angular/core";
import { Color } from "../interfaces/hero.interface";


@Pipe({
  name: 'colorCasePipe'
})

export class colorCasePipe implements PipeTransform {

  transform(value: Color): string {
    switch (value) {
      case Color.red:
        return 'Rojo';
      case Color.black:
        return 'Negro';
      case Color.blue:
        return 'Azúl';
      case Color.green:
        return 'Verde';
      default:
        return value;
    }
  }


}
