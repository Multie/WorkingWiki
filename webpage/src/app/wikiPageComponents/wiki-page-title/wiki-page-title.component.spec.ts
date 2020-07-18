import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WikiPageTitleComponent } from './wiki-page-title.component';

describe('WikiPageTitleComponent', () => {
  let component: WikiPageTitleComponent;
  let fixture: ComponentFixture<WikiPageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiPageTitleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WikiPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
