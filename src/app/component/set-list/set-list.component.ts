import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Set } from '../../model/set';
import { SetService } from '../../service/set.service';

@Component( {
    selector: 'app-set-list',
    templateUrl: './set-list.component.html',
    styleUrls: [ './set-list.component.css' ]
} )
export class SetListComponent implements OnInit {

    sets: Set[];

    constructor( public router: Router,
                 private setService: SetService ) {
    }

    ngOnInit() {
        this.getSets();
    }

    getSets(): void {

        this.setService.getUserSets()
            .subscribe( sets => this.sets = sets.Items );
    }
}
