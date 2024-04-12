import { Component } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router'
import {data} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
    photoCover: string = ""
    contentTitle: string = ""
    contenteDescription: string = ""
    private id:string|null= "0"

    constructor(
      private route:ActivatedRoute
    ){ }

    ngOnInit(): void{
      this.route.paramMap.subscribe( value =>
        this.id = (value.get("id"))
      )

      this.setValuesToComponent(this.id)
    }

    setValuesToComponent(id:string | null){
      const result = data.filter(article => article.id == id)[0]
      
      this.photoCover = result.photoCover
      this.contentTitle = result.title
      this.contenteDescription = result.description
    }

    

}
