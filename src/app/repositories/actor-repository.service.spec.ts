import {TestBed} from '@angular/core/testing';

import {ActorRepositoryService} from './actor-repository.service';

describe('ActorRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActorRepositoryService = TestBed.get(ActorRepositoryService);
    expect(service).toBeTruthy();
  });
});
