import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { UserDashboardComponent } from './user-product/user-dashboard/user-dashboard.component';
import { QuizComponent } from './user-product/quiz/quiz.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  /*{
    path: 'user-dashboard,'
    Component: UserDashboardComponent
    canActivate : [NormalGuard] 
    children : 
    [
      {
          path:':qid',
          Component: QuizComponent
    }
  ]
}*/

}
