import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  outputs:['onHide'],
  animations:[
    trigger('goals',[
        transition('*=>*',[
           // query(':enter',style({opacity:0},{optional:true})),
            query(':enter',stagger('300ms',[
                animate('.6s ease-in',keyframes([
                    style({opacity:0,transform:'translateY(-75%)',offset:0}),
                    style({opacity:0.5,transform:'translateY(35px)',offset:0.3}),
                    style({opacity:1,transform:'translateY(0)',offset:1})
                    ]))
                ]),{optional:true}) ,
             query(':leave',stagger('300ms',[
                animate('.6s ease-in',keyframes([
                    style({opacity:1,transform:'translateX(0)',offset:0}),
                    style({opacity:0.5,transform:'translateX(35px)',offset:0.3}),
                    style({opacity:0,transform:'translateX(-75%)',offset:1})
                    ]))
                ]),{optional:true})  
        
            ])
        ])
    
    ]
})
export class HomeComponent implements OnInit {
itemCount:number;
btnText:string='login';
authentic:boolean;	
userName:string;
password:string;

authenticUser={
	userName:"manish",
	password:"123"
}    

  constructor() { }

  ngOnInit() {
      
  }
	
	@Output() 
	 onHide:EventEmitter<boolean> = new EventEmitter<boolean>();
    
    auth($event){
   		
		if(this.userName === this.authenticUser.userName && 
		   this.password === this.authenticUser.password)
			{
				console.log("is valid")
				 this.onHide.emit(true);
			}
		else
			{ console.log("is not valid")
				 this.onHide.emit(false);
			}
    	}
}
