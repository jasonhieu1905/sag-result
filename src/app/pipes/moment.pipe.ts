import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'moment'
})
export class MomentPipe implements PipeTransform {
    /*
     * Convert the date to an format.
     **/
    transform(value, args = 'll') {
        args = args || '';
        return args === 'ago' ? moment(value).fromNow() : moment(value).format(args);
    }
}
