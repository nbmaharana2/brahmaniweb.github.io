import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { RouterModule, Routers } from '@angular/router / router';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HighlightcardComponent } from './highlightcard/highlightcard.component';
import { ResourcesComponent } from './resources/resources.component';
//import { NextstepsComponent } from './nextsteps/nextsteps.component';
import { TerminalComponent } from './terminal/terminal.component';
import { LinksComponent } from './links/links.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
    { path: ``, redirectTo: '/Home',pathMatch: 'full' },
    { path: `HOME`, component: FooterComponent  },
    { path: `ABOUT`, component: ToolbarComponent },
    { path: `SERVICES`, component: HighlightcardComponent},
    { path: `RESUME`, component: ResourcesComponent},
    { path: `WORK`, component: TerminalComponent},
    { path: `CONTACT`, component:  AppComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
