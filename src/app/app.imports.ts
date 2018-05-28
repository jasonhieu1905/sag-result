

// Modules
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MetaModule } from '@ngx-meta/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// Services
import { AppService } from './app.service';
// Shared Modules
import { SharedModule } from '@shared/shared.module';
// Providers

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export const MODULES = [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    SharedModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    MetaModule.forRoot()
];

export const PROVIDERS = [
    AppService,
    TransferState
];

export const PIPES = [
];

export const COMPONENTS = [
];

export const DIRECTIVES = [
];
