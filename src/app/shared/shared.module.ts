import { ModuleWithProviders, NgModule } from '@angular/core';

import { HttpModule } from './http';
import { LayoutsModule } from './layouts/layouts.module';
import { PaginationModule } from './pagination';

@NgModule({
    exports: [
        HttpModule,
        LayoutsModule,
        PaginationModule
    ],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: SharedModule };
    }
}
