import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";
import {PageNotFoundComponent} from "./routes/page-not-found/page-not-found.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NoopAnimationsModule],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display "Page Non Trouvée"', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })
});
