import { NotFoundComponent } from './not-found/not-found.component';
import { SpacetagramComponent } from './spacetagram/spacetagram.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "spacetagram", component: SpacetagramComponent },
  { path: "", redirectTo: '/spacetagram', pathMatch: "full" },
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
