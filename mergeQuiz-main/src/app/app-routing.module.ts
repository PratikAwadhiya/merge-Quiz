import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverpageComponent } from './component/coverpage/coverpage.component';
import { TitlepageComponent } from './component/titlepage/titlepage.component';

const routes: Routes = [
  {path:'',redirectTo:'cover',pathMatch:'full'},
  {path:'cover',component:CoverpageComponent},
  {path:'titlepage',component:TitlepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
 }
