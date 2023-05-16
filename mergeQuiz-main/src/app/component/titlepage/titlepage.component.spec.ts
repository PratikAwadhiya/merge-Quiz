import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlepageComponent } from './titlepage.component';

describe('TitlepageComponent', () => {
  let component: TitlepageComponent;
  let fixture: ComponentFixture<TitlepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
