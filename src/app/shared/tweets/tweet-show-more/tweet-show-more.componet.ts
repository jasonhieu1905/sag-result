import { HashtagsService } from './../../../hashtags/hashtags.service';
import { Component, Input, HostBinding } from '@angular/core';


@Component({
    selector: 'tweet-show-more',
    templateUrl: './tweet-show-more.component.html'
})
export class TweetShowMore {
    @Input() index: number;
    @Input() requestAvail: boolean;
    @HostBinding('class') classList = 'full-height';

    public tweetsCustom = [];

    constructor(private hashtagService: HashtagsService) { }

    ngOnInit() {

    }

    ngOnChanges() {
        if (this.requestAvail) {
            let tweets = JSON.parse(localStorage.getItem('tweets'));
            let length = tweets.length / 8;

            let totalTweets = length;
            for (let i = 0; i < totalTweets; i++) {
                this.tweetsCustom.push(
                    {
                        name: tweets[i].title,
                        availability: new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).getTime(),
                        isLoaded: false
                    }
                );
            }
            for (let j = 0; j < totalTweets; j += 5) {
                let randomTimeout = Math.floor((Math.random() * 8) + 1) * 1000;
                setTimeout(() => {
                    for (let i = 0; i < 5; i++) {
                        this.tweetsCustom[j + i].isLoaded = true;
                    }
                }, randomTimeout);
            }
        }
    }
}