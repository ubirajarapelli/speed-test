import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataHistoryComponent } from './data-history/data-history.component';
import { TestSpeedComponent } from './test-speed/test-speed.component';

const routes: Routes = [
  { path: 'teste-sua-velocidade', component: TestSpeedComponent  },
  { path: 'historico-medicao', component: DataHistoryComponent },
  { path: '', redirectTo: '/teste-sua-velocidade', pathMatch: 'full' },
  // { path: '**', component: Error404Component },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
