import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {GameActiveComponent} from './game-active.component';

describe('ListViewComponent', () => {
  let component: GameActiveComponent;
  let fixture: ComponentFixture<GameActiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
