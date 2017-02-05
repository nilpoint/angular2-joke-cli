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
import { HttpObservableComponent } from './http-observable/http-observable.component';
import { HttpJsonpComponent } from './http-jsonp/http-jsonp.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';

import { SearchService } from './search.service';
import { UserService } from './user-service';

import { AlwaysAuthGuard } from './always-auth-guard';
import { OnlyLoggedInUsersGuard } from './only-logged-in-users-guard';
import { AlwaysAuthChildrenGuard } from './always-auth-children-guard';
import { UnsearchedTermGuard } from './unsearched-term-guard';
import { DefaultPipe } from './default.pipe';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent, canDeactivate: [UnsearchedTermGuard]},
  {path: 'tryout', component: JokeListComponent},
  {path: 'blog/:id', component: BlogComponent},
  {
    path: 'artist/:artistId', 
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    canActivateChild: [AlwaysAuthChildrenGuard],
    component: ArtistComponent, 
    children: [
      {path: '', redirectTo: 'tracks', pathMatch: 'prefix'},
      {path: 'tracks', component: ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent}
    ]
  },
  {path: '**', component: HomeComponent}
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
    SearchComponent,
    HeaderComponent,
    BlogComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    DefaultPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    SearchService,
    UserService,
    AlwaysAuthGuard,
    OnlyLoggedInUsersGuard,
    AlwaysAuthChildrenGuard,
    UnsearchedTermGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
