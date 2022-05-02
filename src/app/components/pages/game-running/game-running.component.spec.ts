import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {GameRunningComponent} from './game-running.component';

describe('ListViewComponent', () => {
  let component: GameRunningComponent;
  let fixture: ComponentFixture<GameRunningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
