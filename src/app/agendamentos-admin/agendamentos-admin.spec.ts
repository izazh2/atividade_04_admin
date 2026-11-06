import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosAdmin } from './agendamentos-admin';

describe('AgendamentosAdmin', () => {
  let component: AgendamentosAdmin;
  let fixture: ComponentFixture<AgendamentosAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentosAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendamentosAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
