// Angualar Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Layout Components
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forChild(),
        BsDropdownModule.forRoot()
    ],
    declarations: [
        WrapperComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class LayoutsModule {
}
