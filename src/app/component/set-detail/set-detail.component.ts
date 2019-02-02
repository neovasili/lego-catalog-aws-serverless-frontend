import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Set } from '../../model/set';
import { SetService } from '../../service/set.service';

@Component( {
	selector: 'app-set-detail',
	templateUrl: './set-detail.component.html',
	styleUrls: [ './set-detail.component.css' ]
} )
export class SetDetailComponent implements OnInit {

	setReference: string;
	selectedSet: Set = new Set();
	sub: any;

	constructor( public router: Router,
				private route: ActivatedRoute,
				private setService: SetService ) {

		this.sub = this.route.params.subscribe( params => {
			this.setReference = params[ 'setReference' ];
			this.setService.getSet( this.setReference )
				.subscribe( set => {
					this.selectedSet.setName = set.Item.setName.S;
					this.selectedSet.setReference = set.Item.setReference.S;
					this.selectedSet.setFamily = set.Item.setFamily.S;
					this.selectedSet.setQuantity = set.Item.setQuantity.N;
					this.selectedSet.setAge = set.Item.setAge.S;
					this.selectedSet.setParts = set.Item.setParts.N;
					this.selectedSet.setBuild = set.Item.setBuild.BOOL;
					this.selectedSet.setDefaultImage = set.Item.setDefaultImage.S;
				} );
		} );
	}

	ngOnInit() {
	}

	deleteSet() {

		if ( window.confirm( 'Are sure you want to delete this item ?' ) ) {

	    	this.setService.delete( this.setReference );
			this.router.navigate( [ '/set-list' ] );
		}
	}

}
