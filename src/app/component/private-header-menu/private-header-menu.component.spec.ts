import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHeaderMenuComponent } from './private-header-menu.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';

describe( 'PrivateHeaderMenuComponent', () => {
    let component: PrivateHeaderMenuComponent;
    let fixture: ComponentFixture<PrivateHeaderMenuComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ PrivateHeaderMenuComponent ],
            imports: [
                MatIconModule,
                MatToolbarModule
            ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( PrivateHeaderMenuComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
