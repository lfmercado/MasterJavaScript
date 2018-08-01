import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes =[
    {path: '', component: AboutComponent },
    {path: 'about-me', component: AboutComponent },
    {path: 'projects', component: ProjectsComponent },
    {path: 'create', component: CreateComponent },
    {path: 'contact', component: ContactComponent },
    {path: '**', component: ErrorComponent }//Ruta 404
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);