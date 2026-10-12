# Challenge · Pila de libros

Aplicación React + TypeScript + Vite que implementa una pila (`Stack`) para registrar y retirar libros siguiendo el principio **LIFO**: el último libro agregado es el primero en salir.

## Ejecutar

```bash
npm install
npm run dev
```

También se puede validar con `npm run build` y `npm run lint`.

## Cómo funciona

- `src/structures/Stack.ts` define la estructura de datos genérica `Stack<T>`.
- `push` agrega un elemento al tope de la pila.
- `pop` retira y devuelve el elemento que está en el tope.
- `peek` consulta el elemento superior sin retirarlo.
- `isEmpty` verifica si la pila no tiene elementos.
- `size` devuelve la cantidad de elementos almacenados.
- `toArray` devuelve una copia de los elementos para mostrarlos en la interfaz.
- `src/types/Book.ts` define la información de cada libro: nombre, ISBN, autor y editorial.
- `src/data/mockBooks.ts` contiene los libros iniciales de la aplicación.
- `src/components/BookForm.tsx` valida y registra nuevos libros.
- `src/components/BookStack.tsx` muestra los libros desde el tope y permite retirar el elemento superior.
- `src/App.tsx` conecta la estructura `Stack` con los componentes de React.

## Operaciones principales

```text
Agregar libro  → push()
Ver el tope   → peek()
Retirar libro → pop()
```

Los libros se muestran desde el tope hacia la base. Al retirar un libro, siempre se elimina el último libro registrado.

## Ejemplo

Si la pila contiene:

```text
Cien años de soledad
El principito
Clean Code
```

El tope es `Clean Code`. Al retirarlo, el siguiente libro disponible será `El principito`.
