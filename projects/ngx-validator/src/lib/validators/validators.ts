import { Validators as AngularValidators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { isObject } from './helper';


export class Validators {
  static min(min: number, message: string): ValidatorFn {
    const validationKey = 'min';
    const validatorFn = AngularValidators.min(min);

    return (control: AbstractControl): ValidationErrors | null => {
      const validationResult = validatorFn(control);

      if (validationResult && validationResult[validationKey]) {
        if (!isObject(validationResult[validationKey])) {
          validationResult[validationKey] = {};
        }

        validationResult[validationKey] = {
          ...validationResult[validationKey],
          message
        };
      }

      return validationResult;
    }

  }

  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```typescript
   * const control = new FormControl('', Validators.required('This field is required'));
   *
   * console.log(control.errors); // {required: {message: 'This field is required'}}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   *
   */

  static required(message: string): ValidatorFn {
    const validationKey = 'required';

    return (control: AbstractControl): ValidationErrors | null => {
      const validationResult = AngularValidators.required(control);

      if (validationResult && validationResult[validationKey]) {
        if (!isObject(validationResult[validationKey])) {
          validationResult[validationKey] = {};
        }

        validationResult[validationKey] = {
          ...validationResult[validationKey],
          message
        };
      }

      return validationResult;
    }
  }

  /**
   * @description
   * Validator that requires the control's value be true. This validator is commonly
   * used for required checkboxes.
   *
   * @usageNotes
   *
   * ### Validate that the field value is true
   *
   * ```typescript
   * const control = new FormControl('some value', Validators.requiredTrue('This field is required'));
   *
   * console.log(control.errors); // {required: {message: 'This field is required'}}
   * ```
   *
   * @returns An error map that contains the `required` property
   * set to `true` if the validation check fails, otherwise `null`.
   *
   *
   */

  static requiredTrue(message: string): ValidatorFn {
    const validationKey = 'required';

    return (control: AbstractControl): ValidationErrors | null => {
      const validationResult = AngularValidators.requiredTrue(control);

      if (validationResult && validationResult[validationKey]) {
        if (!isObject(validationResult[validationKey])) {
          validationResult[validationKey] = {};
        }

        validationResult[validationKey] = {
          ...validationResult[validationKey],
          message
        };
      }

      return validationResult;
    }
  }

}
