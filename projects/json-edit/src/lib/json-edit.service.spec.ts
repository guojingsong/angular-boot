import { TestBed } from '@angular/core/testing';

import { JsonEditService } from './json-edit.service';

describe('JsonEditService', () => {
  let service: JsonEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
