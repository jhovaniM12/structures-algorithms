# Challenge 11 · Smart Search y Top Results

Aplicación React + TypeScript + Vite que permite buscar productos por prefijo y obtener los productos más populares.

## Ejecutar

```bash
npm install
npm run dev
```

También se puede validar con `npm run build` y `npm run lint`.

## Cómo funciona

- `src/structures/ProductTrie.ts` define el Trie utilizado para guardar los productos y realizar búsquedas por prefijo.
- `src/structures/MaxHeap.ts` define un Max-Heap. El producto con mayor popularidad siempre queda disponible en la raíz.
- `src/data/products.ts` contiene los productos iniciales, cada uno con nombre y popularidad.
- `src/types/Product.ts` define el tipo `Product` utilizado por las estructuras y la interfaz.
- `App` construye el Trie, busca los productos que coinciden con el prefijo y los agrega a un Max-Heap para obtener el Top K.
- La interfaz permite insertar productos, buscar en tiempo real y seleccionar si se quieren ver los primeros 1, 2, 3 o 5 resultados.

## Ejemplo

Al buscar el prefijo `air` con Top 2, el resultado es:

```text
air force   95
air max     90
```

Los productos también se muestran en la sección `Productos guardados`.
