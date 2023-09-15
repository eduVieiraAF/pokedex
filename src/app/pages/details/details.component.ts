import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemon
  }

  get pokemon() {
    const id = this.activeRouter.snapshot.params['id']

    return console.log(id)
  }
}
