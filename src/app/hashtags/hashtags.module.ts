import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetsModule } from '@shared/tweets/tweets.module';

import { TranslateModule } from '@ngx-translate/core';

import { HashtagsRoutes } from './hashtags.routes';
import { HashtagsComponent } from './hashtags.component';

@NgModule({
    imports: [
        CommonModule,
        HashtagsRoutes,
        TweetsModule,
        TranslateModule
    ],
    declarations: [
        HashtagsComponent
    ]
})
export class HashtagsModule { }
