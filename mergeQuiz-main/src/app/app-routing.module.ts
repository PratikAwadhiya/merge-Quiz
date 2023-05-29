import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverpageComponent } from './component/coverpage/coverpage.component';
import { TitlepageComponent } from './component/titlepage/titlepage.component';
import { PreviewComponent } from './component/preview/preview.component';
import { PreviewPageComponent } from './component/preview-page/preview-page.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';

const routes: Routes = [
{path:'',
  redirectTo:'home',
  pathMatch:'full'
},
  {path:'cover',
  component:CoverpageComponent
  },

  {path:'titlepage',
  component:TitlepageComponent
  },

  {path:'preview',
  component:PreviewComponent
  },

  {path:'previewpage',
  component:PreviewPageComponent
  },

  {path:'home',
  component:HomeComponent
  },

  {path:'login',
  component:LoginComponent
  },

  {path:'signup',
  component:SignupComponent
  },

  {path:'verify',
  component:VerifyemailComponent
  },
  {path:'forgot',
  component:ForgotpasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
 }
