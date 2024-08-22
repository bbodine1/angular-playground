import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMainComponent } from './nav-main.component';
import { ActivatedRoute } from '@angular/router';

describe('NavMainComponent', () => {
  let component: NavMainComponent;
  let fixture: ComponentFixture<NavMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMainComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // Add any necessary properties or methods here
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
