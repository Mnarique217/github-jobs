import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(uri: string): any {

    if ( uri !=null ) {
        return  uri;
    } 
    return '../../../assets/no available.png';
  }

}
