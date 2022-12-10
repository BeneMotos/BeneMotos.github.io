import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() item: string = '';
  @Input() image: string = '';
  @Input() url: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
