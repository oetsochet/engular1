import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { DetailsongkomComponent } from './detailsongkom/detailsongkom.component';
import { DetailtechnoComponent } from './detailtechno/detailtechno.component';
import { ErrorComponent } from './error/error.component';
import { HealdthComponent } from './healdth/healdth.component';
import { HomeComponent } from './home/home.component';
import { KomsanComponent } from './komsan/komsan.component';
import { MoreComponent } from './more/more.component';
import { SongkomComponent } from './songkom/songkom.component';
import { SportComponent } from './sport/sport.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'komsan',component:KomsanComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'songkom',component:SongkomComponent},
  {path:'sport',component:SportComponent},
  {path:'healdth',component:HealdthComponent},
  {path:'more',component:MoreComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'detailtechno/:idtechno',component:DetailtechnoComponent},
  {path:'detailsongkom/:idsongkom',component:DetailsongkomComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
