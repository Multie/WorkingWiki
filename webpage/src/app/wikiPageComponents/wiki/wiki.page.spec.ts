import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WikiPage } from './wiki.page';

describe('WikiPage', () => {
  let component: WikiPage;
  let fixture: ComponentFixture<WikiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WikiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
