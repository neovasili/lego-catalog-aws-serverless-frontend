import { Injectable } from '@angular/core';
import { Set } from '../model/set';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { CognitoUtil } from './cognito.service';
import { ServerResponse } from '../model/server-response';

const httpOptions = {
    headers: new HttpHeaders( {
        'Content-Type': 'application/json',
        'x-api-key': environment.apiKey
    } )
};

@Injectable( {
    providedIn: 'root'
} )
export class SetService {

    userToken: string;
    userName: string;

    constructor(
        private http: HttpClient,
        public cognitoUtil: CognitoUtil ) {

        this.userName = this.cognitoUtil.getCurrentUser().getUsername();

        this.userToken = this.cognitoUtil.getCurrentUser().getSession(
            function( err, session ) {
                return session.getIdToken().getJwtToken();
            } );

        httpOptions.headers =
            httpOptions.headers.set( 'Authorization', this.userToken );

    }

    save( set: Set ): Observable<Set> {

        console.log( 'httpOptions: ', httpOptions );

        set.userID = this.userName;

        return this.http.post<Set>( environment.APIUrl + '/set',
            set,
            httpOptions )
            .pipe(
                catchError( this.handleError( 'saveSet', null ) )
            );
    }

    getUserSets(): Observable<ServerResponse> {

        const getSetsUrl = environment.APIUrl + '/set?userID=' + this.userName;

        return this.http.get<ServerResponse>( getSetsUrl, httpOptions )
            .pipe(
                catchError( this.handleError( 'getUserSets', null ) )
            );
    }

    getSet( setReference: string ): Observable<ServerResponse> {

        const getSetsUrl = environment.APIUrl + '/set?setReference=' + setReference;

        return this.http.get<ServerResponse>( getSetsUrl, httpOptions )
            .pipe(
                catchError( this.handleError( 'getSet', null ) )
            );
    }

	delete( setReference: string ): Observable<ServerResponse> {

		const deleteSetsUrl = environment.APIUrl + '/set?setReference=' + setReference;

		console.log( "deleteSetsUrl: ", deleteSetsUrl );

		return this.http.delete<ServerResponse>( deleteSetsUrl, httpOptions )
			.pipe(
				catchError( this.handleError( 'deleteSet', null ) )
			);
	}

    private handleError<T>( operation = 'operation', result?: T ) {
        return ( error: any ): Observable<T> => {
            console.error( error );
            console.log( `${operation} failed: ${error.message}` );
            return of( result as T );
        };
    }
}
