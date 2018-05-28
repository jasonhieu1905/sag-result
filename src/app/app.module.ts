import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';

// Imports
import { MODULES, PROVIDERS, DIRECTIVES, PIPES } from './app.imports';

@NgModule({
    declarations: [
        AppComponent,
        DIRECTIVES,
        PIPES
    ],
    imports: [
        MODULES,
        AppRoutes
    ],
    providers: [
        PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
