import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { UserLoginService } from '../../service/user-login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../../app.component';
import { CognitoUtil } from '../../service/cognito.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe( 'LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [
            	AppComponent,
	            LoginComponent
            ],
            imports: [
                BrowserAnimationsModule,
                FormsModule,
                MatCardModule,
                MatFormFieldModule,
                MatInputModule,
                MatButtonModule,
                MatIconModule,
                MatSnackBarModule,
                RouterTestingModule
            ],
            providers: [
                UserLoginService,
                CognitoUtil
            ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( LoginComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
