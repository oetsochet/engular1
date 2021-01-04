import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KomsanComponent } from './komsan/komsan.component';
import { TechnologyComponent } from './technology/technology.component';
import { SongkomComponent } from './songkom/songkom.component';
import { SportComponent } from './sport/sport.component';
import { HealdthComponent } from './healdth/healdth.component';
import { MoreComponent } from './more/more.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DetailComponent } from './detail/detail.component';
import { DetailtechnoComponent } from './detailtechno/detailtechno.component';
import { DetailsongkomComponent } from './detailsongkom/detailsongkom.component';

import { from } from 'rxjs';
import { ParentComponent } from './more/parent/parent.component';
import { ChildComponent } from './more/child/child.component';


@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    NavbarComponent,
    KomsanComponent,
    TechnologyComponent,
    SongkomComponent,
    SportComponent,
    HealdthComponent,
    MoreComponent,
    HomeComponent,
    ErrorComponent,
    DetailComponent,
    DetailtechnoComponent,
    DetailsongkomComponent,
    ParentComponent,
    ChildComponent,

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
