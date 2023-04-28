import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaunoComponent } from './paginauno.component';

describe('PaginaunoComponent', () => {
  let component: PaginaunoComponent;
  let fixture: ComponentFixture<PaginaunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
