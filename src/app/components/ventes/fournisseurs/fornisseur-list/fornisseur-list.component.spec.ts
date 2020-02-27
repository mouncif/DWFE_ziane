import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornisseurListComponent } from './fornisseur-list.component';

describe('FornisseurListComponent', () => {
  let component: FornisseurListComponent;
  let fixture: ComponentFixture<FornisseurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornisseurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornisseurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
