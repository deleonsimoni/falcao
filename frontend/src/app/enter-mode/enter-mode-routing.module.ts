import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterModePage } from './enter-mode.page';

const routes: Routes = [
  {
    path: '',
    component: EnterModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterModePageRoutingModule {}
