import { createAction, props  } from "@ngrx/store";

// Definición del tipo de filtro válido
export type filtrosValidos = "todos" | "completados" | "pendientes";

// Acción para establecer el filtro
export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: filtrosValidos }>()
);
