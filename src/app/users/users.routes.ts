import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        data: {
            meta: {
                title: 'User Search',
                override: true,
                description: 'Search by User on Twitter in real time.'
            }
        }
    },
];

export const UsersRoutes = RouterModule.forChild(routes);
