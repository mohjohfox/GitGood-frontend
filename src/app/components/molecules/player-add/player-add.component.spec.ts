import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {PlayerAddComponent} from './player-add.component';

describe('PlayerAddComponent', () => {
  let component: PlayerAddComponent;
  let fixture: ComponentFixture<PlayerAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
