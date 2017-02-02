import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { ReactiveModelFormComponent } from './reactive-model-form/reactive-model-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { HttpPromiseComponent } from './http-promise/http-promise.component';
import { SearchService } from './search.service';
import { HttpObservableComponent } from './http-observable/http-observable.component';
import { HttpJsonpComponent } from './http-jsonp/http-jsonp.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    ModelFormComponent,
    ReactiveModelFormComponent,
    TemplateFormComponent,
    HttpApiComponent,
    HttpPromiseComponent,
    HttpObservableComponent,
    HttpJsonpComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
