import { HashtagsComponent } from './hashtags.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HashtagsComponent,
        data: {
            meta: {
                title: 'Hashtag Search',
                override: true,
                description: 'Search by Hashtag on Twitter in real time.'
            }
        }
    },
];

export const HashtagsRoutes = RouterModule.forChild(routes);
