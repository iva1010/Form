import {FormControl} from '@angular/forms';

export class MuValidators {

  static passValid(control: FormControl): {[key: string]: boolean}{
    console.log(control.value);
    return null;
  }

}
