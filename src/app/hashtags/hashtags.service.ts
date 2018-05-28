import { Injectable } from '@angular/core';
import { HttpService } from '@shared/http';

@Injectable()
export class HashtagsService {

    constructor(private http: HttpService) {
    }

    getTweets(query: string) {
        let url = 'posts';

        if (query) {
            url += '?' + query;
        }
        return this.http.get(url);
    }
}
