import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../environments/environment';

export interface TranslatesLanguageInterface {
    code: string;
    name: string;
}

const LANGUAGES: TranslatesLanguageInterface[] = [
    { code: 'de', name: 'German' },
    { code: 'en', name: 'English' }
];
const LANGUAGES_LIST: string[] = ['en', 'de'];

@Injectable()
export class AppService {
    isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    currentLanguage = new BehaviorSubject(LANGUAGES[0]);

    constructor(
        private translateService: TranslateService
    ) {
        this.translateService.addLangs(LANGUAGES_LIST);
        this.translateService.setDefaultLang(environment.defaultLanguage);
    }

    setStatus(value: boolean) {
        this.isLoading.next(value);
    }

    set setCurrentLanguage(language: TranslatesLanguageInterface) {
        this.currentLanguage.next(language);
    }

    public changeLanguage(languageCode: string): void {
        localStorage.setItem('language', languageCode);
        this.useLanguage(languageCode);
    }

    public useLanguage(languageCode: string): void {
        languageCode = languageCode || environment.defaultLanguage;
        this.translateService.use(languageCode);
        this.setCurrentLanguage = this.getLanguages().filter(language => language.code === languageCode)[0];
    }

    public getLanguages(): TranslatesLanguageInterface[] {
        return LANGUAGES;
    }
}
