import { Component ,ElementRef, Renderer, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	title = 'app';
  	authentic:boolean=false;
	constructor(private renderer: Renderer){}
	/*tmpListener:<any>;
	@ViewChild('input') ulEl: ElementRef;

	ngOnInit() {
		this.tmpListener = this.renderer.listen(this.ulEl.nativeElement, 'click', this.logElement);
	}

  	logElement({target}) {
		if(target && target.nodeName == "LI") {
		  console.log('Target id: ', target.id);
		  // Add Business Logic here
		}
	}
  
	 ngOnDestroy() {
		this.tmpListener();
	}*/
	auth(val: boolean) {
		console.log("inside 2")
		this.authentic=val;
	}
}
