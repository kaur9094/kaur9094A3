import { Component, OnInit } from '@angular/core';
import { Kaur9094 } from '../kaur9094';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	currStudent: Kaur9094 = {
	sid: 991591201,
	sname: 'Parvinder Kaur',
	slogin: 'kaur9094',
	scampus: 'Davis',
	sAssignmentTitle:'kaur9094A3'
	};	
  
  constructor() { }

  ngOnInit(): void {
  }

}
