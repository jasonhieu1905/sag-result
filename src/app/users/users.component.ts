import { Component, HostBinding } from '@angular/core';

import { UsersService } from './users.service';

@Component({
    selector: 'app-users',
    providers: [
        UsersService
    ],
    templateUrl: './users.component.html'
})
export class UsersComponent {

    @HostBinding('class') classList = 'full-height';

    constructor(
        public usersService: UsersService
    ) {
    }
}
