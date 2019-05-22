import {Component, OnInit} from '@angular/core';
import {ActorRepositoryService} from '../repositories/actor-repository.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  actors: Actor[] = null;

  constructor(private actorRepositoryService: ActorRepositoryService) { }

  ngOnInit() {
    this.actorRepositoryService.list(0, 100).subscribe(result => {
      this.actors = result.items;
    });
  }

}
