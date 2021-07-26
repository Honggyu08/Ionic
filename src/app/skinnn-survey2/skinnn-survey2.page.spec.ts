import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkinnnSurvey2Page } from './skinnn-survey2.page';

describe('SkinnnSurvey2Page', () => {
  let component: SkinnnSurvey2Page;
  let fixture: ComponentFixture<SkinnnSurvey2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinnnSurvey2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkinnnSurvey2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
