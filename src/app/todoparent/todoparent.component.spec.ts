import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoparentComponent } from './todoparent.component';

describe('TodoparentComponent', () => {
  let component: TodoparentComponent;
  let fixture: ComponentFixture<TodoparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
