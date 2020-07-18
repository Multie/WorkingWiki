import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WikiPageEditTitleComponent } from './wiki-page-edit-title.component';

describe('WikiPageEditTitleComponent', () => {
  let component: WikiPageEditTitleComponent;
  let fixture: ComponentFixture<WikiPageEditTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiPageEditTitleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WikiPageEditTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
