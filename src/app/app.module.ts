import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    HttpPromiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
