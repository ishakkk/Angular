import { Route, Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Layouts } from './layouts/layouts';
import { Login } from './login/login';

export const homeRoue: Route = {
    path: "",
    component: Home
}
export const routes: Routes = [
    {
        path:"login",
        component:Login
    },
    {
        path: "",
        component: Layouts,
        children: [
            homeRoue,
            {
                path: "contact/:sehir/:id",
                component: Contact
            },
            {
                path: "contact",
                component: Contact
            },
            {
                path: "about",
                component: About
            }
            ,
            {
                path: "home",
                component: Home
            }
        ]
    }

];
