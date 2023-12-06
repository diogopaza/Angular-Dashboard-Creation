import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon/icon.service'

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {
  
  constructor(public iconService: IconService) { }

  ngOnInit(): void {
  }

}
