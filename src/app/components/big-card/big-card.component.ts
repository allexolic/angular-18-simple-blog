import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{

  @Input()
  picture:string =""
  @Input()
  title:string = ""
  @Input()
  description:string = ""

  constructor(){}

  ngOnInit(): void {
  }

}
