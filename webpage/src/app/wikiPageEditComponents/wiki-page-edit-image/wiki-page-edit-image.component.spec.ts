import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WikiPageEditImageComponent } from './wiki-page-edit-image.component';

describe('WikiPageEditImageComponent', () => {
  let component: WikiPageEditImageComponent;
  let fixture: ComponentFixture<WikiPageEditImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiPageEditImageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WikiPageEditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
