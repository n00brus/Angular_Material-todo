import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTodoComponent } from './control-todo.component';

describe('ControlTodoComponent', () => {
  let component: ControlTodoComponent;
  let fixture: ComponentFixture<ControlTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
