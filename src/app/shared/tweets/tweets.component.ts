import { Component, Input, OnChanges, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';

import { AppService } from '../../app.service';
import { TweetInterface } from './tweets.interface';

import 'rxjs/add/operator/distinctUntilChanged';
@Component({
    selector: 'app-tweets',
    templateUrl: './tweets.component.html'
})
export class TweetsComponent {
    @HostBinding('class') classList = 'full-height';

    readonly TWEETS_PER_PAGE = 10;

    public isLoadding = false;

    public params = [];
    public formFields = [
        { name: 'page', defaultValue: 1 },
        { name: 'query', defaultValue: '' }
    ];

    public form: FormGroup;

    public tweets: TweetInterface[] = [];

    public totalTweets: number;

    @Input() route: string;
    @Input() title: string;
    @Input() placeholder: string;
    @Input() callService: any;

    public showMoreBatch = [];

    currentPage: number;
    set page(page: number | string) {
        this.currentPage = +page;
    }

    public constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private appService: AppService
    ) {
        this.appService.isLoading.subscribe((status: boolean) => {
            this.isLoadding = status;
        });
    }

    ngOnInit() {
        this.getTweets('');
    }

    public pageTrackBy(index: number, tweet: TweetInterface, maxDisplay = 2) {
        // tweet.hashtagsDisplay = tweet.hashtags.slice(0, maxDisplay).join(', ');
        // return tweet.hashtagsDisplay;
    }

    private initForm() {

        const forms = {};

        for (const field of this.formFields) {
            forms[field.name] = { value: this.params[field.name] ? this.params[field.name] : field.defaultValue, disabled: false };
        }

        this.form = this.formBuilder.group(forms);

        this.form.valueChanges.subscribe(data => {
            const form = this.form.value;
            const params = [];

            for (const key in form) {

                if (!form.hasOwnProperty(key) || !form[key]) {
                    continue;
                }

                params[key] = form[key];
            }

            this.params = [];

            this.router.navigate(['/' + this.route, params], { relativeTo: this.activatedRoute });
        });
    }

    private generateParams(params: any) {
        const queries = [];
        for (const param in params) {
            if (!params.hasOwnProperty(param)) {
                continue;
            }

            const value = params[param];

            this.params[param] = value.toString().split(',');
            queries.push(param + '=' + value);
        }

        return queries.join('&');
    }

    private getTweets(queries: string) {
        if (typeof this.callService.getTweets !== 'function') {
            return;
        }
        this.callService.getTweets(queries)
            .finally(() => {
                this.initForm();
            })
            .subscribe(resp => {
                localStorage.setItem('tweets', JSON.stringify(resp));
                let length = resp.length / 4;

                this.totalTweets = length;
                for (let i = 0; i < this.totalTweets; i++) {
                    this.tweets.push(
                        {
                            name: resp[i].title,
                            availability: new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).getTime(),
                            isLoaded: false
                        }
                    );
                }
                for (let j = 0; j < this.totalTweets; j += 5) {
                    let randomTimeout = Math.floor((Math.random() * 8) + 1) * 1000;
                    setTimeout(() => {
                        for (let i = 0; i < 5; i++) {
                            this.tweets[j + i].isLoaded = true;
                        }
                    }, randomTimeout);
                }

            });

    }

    showMore(target, index) {
        target.parentNode.parentNode.remove();
        this.showMoreBatch[index] = true;
        document.getElementById('showmore'+index).style.display = 'block';
    }

    public paginate(page: Number): void {
        this.form.controls['page'].setValue(page);
    }
}
