import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const takenUsernames = ['john', 'jane', 'admin'];

export function usernameTakenValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return of(takenUsernames.includes(control.value)).pipe(
      delay(1000),
      map(isTaken => (isTaken ? { usernameTaken: true } : null))
    );
  };
}
