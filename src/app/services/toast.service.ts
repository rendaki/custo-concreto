import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  show(msg: string, type: number)
  {
    switch(type)
    {
      case 1:
      {
        M.toast({html: msg, classes: 'green rounded center'});
        break;
      }
      case 2:
      {
        M.toast({html: msg, classes: 'red rounded center'});
        break;
      }

    }

  }
}
