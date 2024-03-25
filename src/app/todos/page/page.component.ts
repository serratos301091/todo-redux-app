import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  completado: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }


  todoAll() {
    this.completado = !this.completado;
    this.store.dispatch( toggleAll({ completado: this.completado }))
  }

}
