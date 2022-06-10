import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoodComponent } from './components/mood/mood.component';
import { FavsComponent } from './components/favs/favs.component';
import { SquadComponent } from './components/squad/squad.component';

import { StepsModule } from 'primeng/steps';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { CalculatingComponent } from './components/calculating/calculating.component';
import { ResultsComponent } from './components/results/results.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MoodComponent,
    FavsComponent,
    SquadComponent,
    CalculatingComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StepsModule,
    RatingModule,
    CheckboxModule,
    MessageModule,
    MessagesModule,
    CardModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    SliderModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
