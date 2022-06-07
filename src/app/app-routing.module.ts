import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavsComponent } from './components/favs/favs.component';
import { MoodComponent } from './components/mood/mood.component';
import { SquadComponent } from './components/squad/squad.component';

const routes: Routes = [ 
  { path: 'favs', component: FavsComponent }, 
  { path: 'squad', component: SquadComponent }, 
  { path: 'mood', component: MoodComponent }, 
  { path: '**', redirectTo: 'favs' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
