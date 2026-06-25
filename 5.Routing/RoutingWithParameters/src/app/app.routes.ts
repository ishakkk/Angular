import { Route, Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';

export const homeRoue:Route={
    path:"",
    component:Home
}
export const routes: Routes = [
    homeRoue,
    {
        path:"contact/:sehir/:id",
        component:Contact
    },
    {
        path:"contact",
        component:Contact
    },
    {
        path:"about",
        component:About
    }
    ,
    {
        path:"home",
        component:Home
    }
];
