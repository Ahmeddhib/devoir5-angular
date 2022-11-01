import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from './bus/bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
const routes: Routes = [
{path: "bus", component : BusComponent},
{path: "add-bus", component : AddBusComponent},
{path: "", redirectTo: "bus", pathMatch:"full"},
{path: "updateBus/:id", component: UpdateBusComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
