import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    public thisYear: number;

    constructor(
    ) {
    }

    public ngOnInit(): void {
        const currentTime = new Date();
        this.thisYear = currentTime.getFullYear();
    }
}
