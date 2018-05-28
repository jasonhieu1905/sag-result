import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { TweetsModule } from '@shared/tweets/tweets.module';

import { UsersRoutes } from './users.routes';
import { UsersComponent } from './users.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        UsersRoutes,
        TweetsModule
    ],
    declarations: [
        UsersComponent
    ]
})
export class UsersModule { }
