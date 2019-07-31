import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataHistoryComponent } from './data-history/data-history.component';
import { TestSpeedComponent } from './test-speed/test-speed.component';

const routes: Routes = [
  { path: 'test-speed', component: TestSpeedComponent  },
  { path: 'data-history', component: DataHistoryComponent },
  { path: '', redirectTo: '/test-speed', pathMatch: 'full' },
  // { path: '**', component: Error404Component },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
