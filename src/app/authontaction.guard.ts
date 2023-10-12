import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authontactionGuard: CanActivateFn = (_route, _state) => {
  let _Router = inject(Router);
  if(localStorage.getItem('token')!== null){
    return true;
  }else{
    _Router.navigate(['/login']);

    return false;
  }
};
