import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenStringPipe implements PipeTransform {
    /*
     * Shortens the string to a given length.
     **/
    transform(value, maxWidth = 50, suffix = '...') {
        if (value && value.length > maxWidth) {
            value = value.substring(0, maxWidth) + suffix;
        }
        return value;
    }
}
