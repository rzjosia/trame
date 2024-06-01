import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageNotFoundComponent} from './page-not-found.component';
import {provideRouter} from "@angular/router";
import {routes} from "../../app.routes";

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFoundComponent],
      providers: [provideRouter(routes)],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 404 message', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const title = compiled.querySelector('mat-card-title')?.textContent;
    expect(title).toContain('Page Non Trouvée');

    const message = compiled.querySelector('mat-card-content>p')?.textContent;
    expect(message).toContain("Désolé, la page que vous recherchez n'existe pas.");
  });
});
