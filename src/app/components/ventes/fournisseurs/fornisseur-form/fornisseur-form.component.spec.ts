import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornisseurFormComponent } from './fornisseur-form.component';

describe('FornisseurFormComponent', () => {
  let component: FornisseurFormComponent;
  let fixture: ComponentFixture<FornisseurFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornisseurFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornisseurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
