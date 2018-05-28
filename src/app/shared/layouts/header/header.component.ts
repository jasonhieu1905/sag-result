import { Component, OnInit } from '@angular/core';

import { AppService, TranslatesLanguageInterface } from '../../../app.service';

export interface Page { route: string; name: string; }

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public pages: Page[] = [];

    public currentLanguage: TranslatesLanguageInterface;
    public languages: TranslatesLanguageInterface[];

    constructor(
        private appService: AppService
    ) {
        this.pages = [
            { route: 'result', name: 'Hashtag Search' },
            { route: 'users', name: 'User Search' }
        ];
    }

    public ngOnInit(): void {
        this.languages = this.appService.getLanguages();

        this.appService.currentLanguage.subscribe((currentLanguage: TranslatesLanguageInterface) => {
            this.currentLanguage = currentLanguage;
        });
    }

    public changeLanguage(language: TranslatesLanguageInterface) {
        this.appService.changeLanguage(language.code);
    }
}
