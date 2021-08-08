import { NgModule } from '@angular/core';

import { CommonRoutingModule } from './common-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { JobsOverviewComponent } from './jobs-overview/jobs-overview.component';

@NgModule({
  imports: [
    CommonRoutingModule,
    AuthModule
  ],
  declarations: [HeaderComponent, FooterComponent, JobsOverviewComponent],
  exports: [HeaderComponent, FooterComponent,JobsOverviewComponent]
})
export class CommonModule { }
