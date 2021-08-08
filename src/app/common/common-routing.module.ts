import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobsOverviewComponent } from './jobs-overview/jobs-overview.component';

const routes: Routes = [
  {path: "header" , component : HeaderComponent },
  {path: "footer" , component : FooterComponent },
  {path: "jobs" , component : JobsOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
