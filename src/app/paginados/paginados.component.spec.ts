import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadosComponent } from './paginados.component';

describe('PaginadosComponent', () => {
  let component: PaginadosComponent;
  let fixture: ComponentFixture<PaginadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
