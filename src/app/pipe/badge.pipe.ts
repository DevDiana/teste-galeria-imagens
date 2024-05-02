import { Pipe, PipeTransform } from '@angular/core';
import { GaleriaEnum } from '../modelo/galeria.enum';

@Pipe({
  name: 'badge',
  standalone: true,
})

export class BadgePipe implements PipeTransform {

  transform(value: string): any {

    return GaleriaEnum[+value]
  }

}
