import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRivalComponent } from './team-rival.component';

describe('TeamRivalComponent', () => {
  let component: TeamRivalComponent;
  let fixture: ComponentFixture<TeamRivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamRivalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
