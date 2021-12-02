import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {GameModeComponent} from './game-mode.component';

describe('ListViewComponent', () => {
  let component: GameModeComponent;
  let fixture: ComponentFixture<GameModeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
