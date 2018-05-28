import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { AppService } from '../../app.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

@Injectable()
export class HttpService {

    private doesNotHandleLoading: boolean;

    constructor(
        public http: HttpClient,
        public appService: AppService
    ) { }

    public get(resource: string, doesNotHandleLoading = false) {
        this.doesNotHandleLoading = doesNotHandleLoading;
        this.isLoading = true;

        const url = environment.apiUrl + resource;
        const options = this.getHeaderOptions();

        return this.resp(this.http.get(url, options));
    }

    set isLoading(status: boolean) {
        const isLoading = this.doesNotHandleLoading ? false : status;
        this.appService.setStatus(isLoading);
    }

    private getHeaderOptions() {
        const headerOptions = {
            'Accept': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Max-Age': 3600
        };
        const headers = new HttpHeaders((<any>Object).assign(headerOptions));

        return { headers: headers };
    }

    private resp(response: any, handleError = false) {
        if (!handleError) {
            return response.finally(() => this.isLoading = false);
        }

        return response
            .catch((error: any) => {
                console.log(error);
            })
            .finally(() => this.isLoading = false);
    }
}
