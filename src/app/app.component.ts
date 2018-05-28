import { Component } from '@angular/core';

import { setTheme } from 'ngx-bootstrap/utils';

import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent {
    isLoadding = false;
    constructor(
        private appService: AppService
    ) {
        setTheme('bs4');
        this.appService.useLanguage(localStorage.getItem('language'));
    }
}
