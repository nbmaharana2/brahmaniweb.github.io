import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule, Routers } from '@angular/router/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HighlightcardComponent } from './highlightcard/highlightcard.component';
import { ResourcesComponent } from './resources/resources.component';
//import { NextstepsComponent } from './nextsteps/nextsteps.component';
import { TerminalComponent } from './terminal/terminal.component';
import { LinksComponent } from './links/links.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HighlightcardComponent,
    ResourcesComponent,
   // NextstepsComponent,
    TerminalComponent,
    LinksComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
