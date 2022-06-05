import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavsComponent } from './components/favs/favs.component';
import { MoodComponent } from './components/mood/mood.component';
import { SquadComponent } from './components/squad/squad.component';

const routes: Routes = [ 
  { path: 'Favs', component: FavsComponent }, 
  { path: 'Squad', component: SquadComponent }, 
  { path: 'Mood', component: MoodComponent }, 
  { path: '**', redirectTo: 'Favs' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
