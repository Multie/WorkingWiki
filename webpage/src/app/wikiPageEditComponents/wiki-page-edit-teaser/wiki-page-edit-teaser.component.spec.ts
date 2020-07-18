import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WikiPageEditTeaserComponent } from './wiki-page-edit-teaser.component';

describe('WikiPageEditTeaserComponent', () => {
  let component: WikiPageEditTeaserComponent;
  let fixture: ComponentFixture<WikiPageEditTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiPageEditTeaserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WikiPageEditTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
