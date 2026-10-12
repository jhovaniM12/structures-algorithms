# Challenge · Árbol binario de búsqueda

Aplicación React + TypeScript + Vite que permite construir, visualizar y recorrer un árbol binario de búsqueda (BST).

## Ejecutar

```bash
npm install
npm run dev
```

También se puede validar con `npm run build` y `npm run lint`.

## Cómo funciona

- `src/structures/TreeNode.ts` define los nodos del árbol. Cada nodo guarda un valor y referencias a sus hijos izquierdo y derecho.
- `src/structures/BinarySearchTree.ts` implementa el árbol binario de búsqueda.
- Al insertar un número menor, se recorre el lado izquierdo; si es mayor, se recorre el lado derecho.
- Los números repetidos no se insertan en el árbol.
- `search` busca un número recorriendo únicamente la rama correspondiente.
- `inorder`, `preorder` y `postorder` implementan los recorridos principales del árbol.
- `src/components/TreeVisualization.tsx` convierte el árbol a un formato visual usando `react-d3-tree`.
- `src/components/InsertForm.tsx` permite insertar nuevos números.
- `src/components/SearchForm.tsx` permite consultar si un número existe.
- `src/components/TreeTraversals.tsx` muestra los resultados de cada recorrido.
- `src/data/mockNumbers.ts` contiene los valores iniciales del árbol.

## Recorridos

Para el árbol inicial:

```text
        50
       /  \
     30    70
    /  \  /  \
   20  40 60  80
```

Los recorridos son:

```text
Inorder:   20 → 30 → 40 → 50 → 60 → 70 → 80
Preorder:  50 → 30 → 20 → 40 → 70 → 60 → 80
Postorder: 20 → 40 → 30 → 60 → 80 → 70 → 50
```

El recorrido **Inorder** devuelve los valores ordenados porque se trata de un árbol binario de búsqueda.
