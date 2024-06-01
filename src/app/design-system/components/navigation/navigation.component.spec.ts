import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {NavigationComponent} from './navigation.component';
import {provideRouter} from "@angular/router";
import {routes} from "../../../app.routes";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatDrawer, MatDrawerToggleResult, MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {BreakpointObserver} from "@angular/cdk/layout";
import {of} from "rxjs";
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let mockMatDrawer: SpyObj<MatDrawer>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
      ],
      providers: [
        provideRouter(routes),
        {
          provide: BreakpointObserver,
          useValue: {
            observe: () => of({matches: true})
          }
        }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockMatDrawer = createSpyObj("MatDrawer", ["close"]);
    component.drawer = mockMatDrawer;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should close drawer on handset devices', async () => {
    mockMatDrawer.close.and.returnValue(await Promise.resolve() as unknown as Promise<MatDrawerToggleResult>);
    component.isHandset = true;
    await component.closeDrawer();
    expect(mockMatDrawer.close).toHaveBeenCalled();
  });

  it('should close drawer on non-handset devices', async () => {
    mockMatDrawer.close.and.returnValue(await Promise.resolve() as unknown as Promise<MatDrawerToggleResult>);
    component.isHandset = false;
    await component.closeDrawer();
    expect(mockMatDrawer.close).toHaveBeenCalled();
  });
});
