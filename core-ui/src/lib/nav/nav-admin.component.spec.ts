import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavAdminComponent } from './nav-admin.component';
import { ActivatedRoute } from '@angular/router';

describe('NavAdminComponent', () => {
  let component: NavAdminComponent;
  let fixture: ComponentFixture<NavAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavAdminComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // Add any necessary properties or methods here
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
