import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { NameValidators } from './../validators/name.validators';

@Directive({
  selector: '[nameValidator][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true}]
})
export class NameValidatorDirective implements Validator {
  validate(control: AbstractControl) {
    return NameValidators.canNotContainSpace(control);
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
