import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { DeteksiComponent } from './deteksi/deteksi.component';
import { KontrolComponent } from './kontrol/kontrol.component';

const appRoutes: Routes = [
  { path: 'beranda', component: BerandaComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'deteksi', component: DeteksiComponent },
  { path: 'kontrol', component: KontrolComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

export const routingComponents = [BerandaComponent, MonitoringComponent, DeteksiComponent, KontrolComponent]
