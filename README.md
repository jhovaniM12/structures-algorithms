# Challenge · Cola de personas

Aplicación React + TypeScript + Vite que simula una cola de personas en un banco. Cada persona registra su nombre, el monto que desea retirar y su fecha de llegada.

La cola sigue el principio **FIFO** (*First In, First Out*): la primera persona en llegar es la primera en ser atendida.

## Ejecutar

```bash
npm install
npm run dev
```

También se puede validar con `npm run build` y `npm run lint`.

## Cómo funciona

- `src/structures/Queue.ts` define la estructura de datos genérica `Queue<T>`.
- `enqueue` agrega una persona al final de la cola.
- `dequeue` retira y devuelve la primera persona de la cola.
- `peek` consulta quién está al frente sin retirarlo.
- `size` devuelve la cantidad de personas en espera.
- `isEmpty` verifica si la cola está vacía.
- `getItems` devuelve una copia de los elementos para mostrarlos en la interfaz.
- `src/models/Person.ts` define los datos de cada persona.
- `src/App.tsx` contiene el formulario y la visualización de la cola.

## Datos de una persona

Cada persona tiene la siguiente información:

```text
id
name
withdrawalAmount
arrivalDate
```

Al enviar el formulario se crea una persona con un identificador único y la fecha actual, y luego se agrega al final de la cola.

## Ejemplo

Si llegan tres personas en este orden:

```text
Ana
Carlos
María
```

La persona al frente es `Ana`. Cuando se atienda y se ejecute `dequeue`, la siguiente persona será `Carlos`.
