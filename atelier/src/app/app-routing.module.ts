import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateCArComponent } from './update-car/update-car.component';

const routes: Routes = [
  // url avec la componenent
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addcar', component: CarComponent },
  { path: 'lisofcars', component: CarsComponent },
  { path: 'updatecar', component: UpdateCArComponent },
  { path: 'deletecar', component: DeleteCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
