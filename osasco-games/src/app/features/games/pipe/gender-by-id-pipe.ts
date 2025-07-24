import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../../../typings/genders';

@Pipe({
  name: 'genderById',
  standalone: false
})
export class GenderByIdPipe implements PipeTransform {

  transform(genderId: string, genders: Gender[]): unknown {
    console.log({ genderId, genders})

   

   const found = genders.find(item => item.id === genderId)
   return found?.name ?? 'Não especificado'
  }
}
