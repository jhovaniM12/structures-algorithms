import { useMemo, useState, type FormEvent } from 'react'
import { initialProducts } from './data/products'
import { MaxHeap } from './structures/MaxHeap'
import { ProductTrie } from './structures/ProductTrie'
import type { Product } from './types/Product'
import './App.css'

function getTopProducts(products: Product[], prefix: string, limit: number) {
  const trie = new ProductTrie()
  products.forEach((product) => trie.insert(product))

  const matches = trie.search(prefix)
  const heap = new MaxHeap()
  matches.forEach((product) => heap.add(product))

  return Array.from({ length: Math.min(limit, matches.length) }, () => heap.take())
}

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [query, setQuery] = useState('air')
  const [limit, setLimit] = useState(3)
  const [name, setName] = useState('')
  const [popularity, setPopularity] = useState('')
  const [message, setMessage] = useState('')

  const results = useMemo(
    () => getTopProducts(products, query, limit),
    [products, query, limit],
  )

  function addProduct(event: FormEvent) {
    event.preventDefault()
    const cleanName = name.trim()
    const score = Number(popularity)

    if (!cleanName || !Number.isFinite(score) || score < 0) {
      setMessage('Escribe un producto y una popularidad válida.')
      return
    }

    setProducts((current) => [
      ...current.filter((product) => product.name.toLowerCase() !== cleanName.toLowerCase()),
      { name: cleanName, popularity: score },
    ])
    setName('')
    setPopularity('')
    setMessage(`“${cleanName}” guardado en el Trie.`)
  }

  return (
    <main>
      <header>
        <div className="eyebrow">CHALLENGE 11 · STRUCTURES & ALGORITHMS</div>
        <h1>Smart Search <span>+</span> Top Results</h1>
        <p>Busca productos por prefijo y encuentra los más populares.</p>
      </header>

      <section className="search-card">
        <label htmlFor="search">Buscar por prefijo</label>
        <div className="search-row">
          <input id="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ej: air" autoFocus />
          <select value={limit} onChange={(event) => setLimit(Number(event.target.value))} aria-label="Cantidad de resultados">
            {[1, 2, 3, 5].map((value) => <option key={value} value={value}>Top {value}</option>)}
          </select>
        </div>
        <small>Trie search · {products.length} productos guardados</small>
      </section>

      <section className="content-grid">
        <div className="results panel">
          <div className="panel-heading"><div><span className="label">RESULTADOS</span><h2>Top matches</h2></div><span className="count">{results.length}</span></div>
          {results.length ? <ol>{results.map((product, index) => <li key={product.name}><span className="rank">0{index + 1}</span><span className="product-name">{product.name}</span><strong>{product.popularity}<small> popularity</small></strong></li>)}</ol> : <div className="empty">No encontramos productos con ese prefijo.</div>}
        </div>

        <div className="panel add-panel">
          <span className="label">NUEVO PRODUCTO</span><h2>Guardar en el Trie</h2>
          <form onSubmit={addProduct}><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Nombre del producto" /><input type="number" min="0" value={popularity} onChange={(event) => setPopularity(event.target.value)} placeholder="Popularidad (0–100)" /><button type="submit">Insert product</button></form>
          {message && <small className="message">{message}</small>}
        </div>
      </section>

      <section className="panel all-products"><h2>Productos guardados</h2><ul>{products.map((product) => <li key={product.name}><span className="product-name">{product.name}</span><strong>{product.popularity}</strong></li>)}</ul></section>
      <footer><span>TRIE</span> prefixes → <span>MAX-HEAP</span> popularity ranking</footer>
    </main>
  )
}

export default App
