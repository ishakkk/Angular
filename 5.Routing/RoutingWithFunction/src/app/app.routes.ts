import { Route, Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';

export const homeRoute:Route={
    path:"",
    component:Home
}

export const routes: Routes = [
homeRoute,

{
    path:"home",
    component:Home
},
{
    path:"contact",
    component:Contact
},
{
    path:"about",
    component:About
}

];
