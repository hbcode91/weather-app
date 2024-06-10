import { TestBed } from '@angular/core/testing';

import { PlaceResolver } from './place.resolver';

describe('PlaceResolver', () => {
  let resolver: PlaceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PlaceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
