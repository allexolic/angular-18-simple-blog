import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{

  @Input()
  picture:string = ""
  @Input()
  title:string = ""
  @Input()
  id:string = "0"

  constructor(){}

  ngOnInit(): void {
  }

}
