import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCreateComponent } from './set-create.component';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { SetService } from '../../service/set.service';
import { HttpClientModule } from '@angular/common/http';
import { CognitoUtil } from '../../service/cognito.service';
import { UserLoginService } from '../../service/user-login.service';
import { UserRegistrationService } from '../../service/user-registration.service';

describe( 'SetCreateComponent', () => {
    let component: SetCreateComponent;
    let fixture: ComponentFixture<SetCreateComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [
            	AppComponent,
                SetCreateComponent
            ],
	        imports: [
		        FormsModule,
		        MatCardModule,
		        MatFormFieldModule,
		        MatInputModule,
		        MatSelectModule,
		        MatCheckboxModule,
		        RouterTestingModule,
		        HttpClientModule
	        ],
	        providers: [
		        UserLoginService,
		        UserRegistrationService,
		        CognitoUtil,
		        SetService
	        ]
        } )
            .compileComponents();
    } ) );
	/*
    beforeEach( () => {
        fixture = TestBed.createComponent( SetCreateComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );*/
} );
