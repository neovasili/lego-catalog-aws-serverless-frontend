import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { PrivateCommonComponent } from '../component/private-common/private-common.component';
import { SetListComponent } from '../component/set-list/set-list.component';
import { SetCreateComponent } from '../component/set-create/set-create.component';
import { SetDetailComponent } from '../component/set-detail/set-detail.component';
import { NewPasswordComponent } from '../component/new-password/new-password.component';
import { LogoutComponent } from '../component/logout/logout.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: PrivateCommonComponent,
        children: [
            { path: 'set-list', component: SetListComponent },
            { path: 'set-create', component: SetCreateComponent },
            { path: 'set-detail/:setReference', component: SetDetailComponent },
            { path: 'new-password', component: NewPasswordComponent },
            { path: 'logout', component: LogoutComponent }
        ]
    },
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ],
    declarations: []
} )
export class AppRoutingModule {
}
