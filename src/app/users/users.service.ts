import { Injectable } from '@angular/core';
import { HttpService } from '@shared/http';

@Injectable()
export class UsersService {

    constructor(private http: HttpService) {
    }

    getTweets(query: string) {
        let url = 'albums';

        if (query) {
            url += '?' + query;
        }
        return this.http.get(url);
    }
}
