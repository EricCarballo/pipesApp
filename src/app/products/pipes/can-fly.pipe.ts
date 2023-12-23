import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFlyCase'
})

export class canFlyCasePipe implements PipeTransform {

  transform(value: boolean ): 'Si' | 'No' {
    return value ? 'Si': 'No'
  }

}
