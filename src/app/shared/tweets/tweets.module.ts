import { TweetShowMore } from './tweet-show-more/tweet-show-more.componet';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PaginationModule } from '@shared/pagination';

import { TweetsComponent } from './tweets.component';

// Pipes
import { ShortenStringPipe } from '../../pipes/shorten.pipe';
import { NumberFormatPipe } from '../../pipes/number.pipe';
import { MomentPipe } from '../../pipes/moment.pipe';

@NgModule({
    declarations: [
        TweetsComponent,
        ShortenStringPipe,
        NumberFormatPipe,
        MomentPipe,
        TweetShowMore
    ],
    exports: [TweetsComponent],
    imports: [
        TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PaginationModule
    ]

})
export class TweetsModule { }
