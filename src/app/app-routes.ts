import { Routes } from "@angular/router"
import {HomeComponent} from '../app/components/home/home.component';
import {ProfileComponent} from '../app/components/profile/profile.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: "profile", component: ProfileComponent }
  ]