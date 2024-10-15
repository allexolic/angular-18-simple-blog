import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{

  @Input()
  picture:string = ""
  @Input()
  title:string = ""

  constructor(){}

  ngOnInit(): void {
  }

}
