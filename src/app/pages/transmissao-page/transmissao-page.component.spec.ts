import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissaoPageComponent } from './transmissao-page.component';

describe('TransmissaoPageComponent', () => {
  let component: TransmissaoPageComponent;
  let fixture: ComponentFixture<TransmissaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissaoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransmissaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
