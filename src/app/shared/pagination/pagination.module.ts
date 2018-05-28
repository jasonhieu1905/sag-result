import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PaginationComponent } from './pagination.component';

@NgModule({
    declarations: [PaginationComponent],
    exports: [PaginationComponent],
    imports: [TranslateModule, CommonModule]
})
export class PaginationModule { }
