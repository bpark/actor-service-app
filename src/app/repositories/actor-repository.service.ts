import {Injectable} from '@angular/core';
import {AbstractRepository} from '../model/abstract-repository';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorRepositoryService extends AbstractRepository<Actor> {

  private static readonly apiPath = 'actors';

  constructor(protected http: HttpClient) {
    super(http, ActorRepositoryService.apiPath);
  }
}

