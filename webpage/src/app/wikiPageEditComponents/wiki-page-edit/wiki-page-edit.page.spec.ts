import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WikiPageEditPage } from './wiki-page-edit.page';

describe('WikiPageEditPage', () => {
  let component: WikiPageEditPage;
  let fixture: ComponentFixture<WikiPageEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiPageEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WikiPageEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
