import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterlistComponent } from './registerlist/registerlist.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'submit/:value', component: RegisterlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
