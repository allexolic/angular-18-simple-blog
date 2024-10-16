import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { mockData } from '../../data/mockData';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  picture:string = ""
  title:string = ""
  description:string = ""
  fullText:string = ""
  private id:string | null = "0"

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )
    this.setValuesToComponent(this.id )
  }

  setValuesToComponent(id:string | null){
    const response = mockData.filter(article => article.id == id)[0]

    this.title = response.title
    this.description = response.description
    this.picture = response.picture
    this.fullText = response.full_text
  }

}
