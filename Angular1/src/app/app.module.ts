import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserProductComponent } from './user-product/user-product.component';
import { SuccessfulComponent } from './successful/successful.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { AdminCoursesComponent } from './admin-product/admin-courses/admin-courses.component';
import { AdminQuizesComponent } from './admin-product/admin-quizes/admin-quizes.component';
import { UserCoursesComponent } from './user-product/user-courses/user-courses.component';
import { UserQuizesComponent } from './user-product/user-quizes/user-quizes.component';
import { UserDashboardComponent } from './user-product/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoursesComponent } from './user-product/courses/courses.component';
import { QuizComponent } from './user-product/quiz/quiz.component';
import { QuizTopicComponent } from './admin-product/quiz-topic/quiz-topic.component';
import { YoutubeComponentComponent } from './youtube-component/youtube-component.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminProductComponent,
    UserProductComponent,
    SuccessfulComponent,
    HomeComponent,
    SignupComponent,
    AboutComponent,
    AdminCoursesComponent,
    AdminQuizesComponent,
    UserCoursesComponent,
    UserQuizesComponent,
    UserDashboardComponent,
    UserProfileComponent,
    CoursesComponent,
    QuizComponent,
    QuizTopicComponent,
    YoutubeComponentComponent,
  
    IntroComponent ,  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'admin-product', component:AdminProductComponent},
      {path:'user-product', component:UserProductComponent},
      {path:'successful', component:SuccessfulComponent},
      {path:'',redirectTo:'/home',pathMatch:'full',},
      {path:'home',component:HomeComponent},
      {path:'signup',component:SignupComponent},
      {path:'about',component:AboutComponent},
      {path:'admincourses',component:AdminCoursesComponent},
      {path:'adminquizes',component:AdminQuizesComponent},
      {path:'user-dashboard', component:UserDashboardComponent},
      {path:'user-courses', component:UserCoursesComponent},
      {path:'user-quizes', component:UserQuizesComponent},
      {path:'user-profile', component:UserProfileComponent},
       {path:'courses', component:CoursesComponent},
      {path:'quiz', component:QuizComponent},
      {path:'quiz-topic', component:QuizTopicComponent},
      {path:"youtube", component:YoutubeComponentComponent},
      {path:"intro", component:IntroComponent}

    ])
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
