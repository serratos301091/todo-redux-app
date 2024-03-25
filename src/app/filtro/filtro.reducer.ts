import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

// Reducer para el filtro
export const filtroReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFiltro, (state , { filtro }) => filtro)
);