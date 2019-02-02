import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCommonComponent } from './private-common.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PrivateHeaderMenuComponent } from '../private-header-menu/private-header-menu.component';
import { MatCardModule, MatIconModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { UserLoginService } from '../../service/user-login.service';
import { CognitoUtil } from '../../service/cognito.service';

describe( 'PrivateCommonComponent', () => {
    let component: PrivateCommonComponent;
    let fixture: ComponentFixture<PrivateCommonComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [
                PrivateCommonComponent,
                PrivateHeaderMenuComponent
            ],
            imports: [
                RouterTestingModule,
                MatCardModule,
                MatIconModule,
                MatToolbarModule,
                MatSnackBarModule
            ],
            providers: [
                UserLoginService,
                CognitoUtil
            ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( PrivateCommonComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
