import { TestBed } from '@angular/core/testing';

import { ServidorSimulatorService } from './servidor-simulator.service';

describe('ServidorSimulatorService', () => {
  let service: ServidorSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServidorSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
