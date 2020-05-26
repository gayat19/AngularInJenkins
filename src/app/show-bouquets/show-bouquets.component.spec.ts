import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBouquetsComponent } from './show-bouquets.component';

describe('ShowBouquetsComponent', () => {
  let component: ShowBouquetsComponent;
  let fixture: ComponentFixture<ShowBouquetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBouquetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBouquetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
