import { Component, OnInit } from '@angular/core';
import { Kaur9094 } from '../kaur9094';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
