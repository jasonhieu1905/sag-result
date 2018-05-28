import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'result', pathMatch: 'full' },
    {
        path: '', component: WrapperComponent, canActivateChild: [MetaGuard], children: [
            { path: 'result', loadChildren: './hashtags/hashtags.module#HashtagsModule' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' }
        ]
    }
];
/*
 * initialNavigation: enabled -> for one load page, without reload
 */
export const AppRoutes = RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' });
