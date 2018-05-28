import { Pipe, PipeTransform, Injector } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({ name: 'number' })
export class NumberFormatPipe implements PipeTransform {

    numberFormat: any;

    constructor(
        private injector: Injector
    ) {
        this.numberFormat = new Intl.NumberFormat(environment.localeFormat);
    }

    /*
     * Convert the number to locale format.
     **/
    transform(value: number): string {
        if (!value) {
            return '-';
        }
        return this.numberFormat.format(value);
    }
}
