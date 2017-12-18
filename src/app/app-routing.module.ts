import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MastersComponent } from './masters/masters.component';


const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
		path:'about/:id',
        component:AboutComponent
    },
	{
		path:'masters',
        component:MastersComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
