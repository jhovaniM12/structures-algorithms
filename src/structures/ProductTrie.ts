import type { Product } from '../types/Product'

class TrieNode {
  children = new Map<string, TrieNode>()
  products: Product[] = []
}

export class ProductTrie {
  private root = new TrieNode()

  insert(product: Product) {
    let node = this.root

    for (const letter of product.name.toLowerCase()) {
      if (!node.children.has(letter)) node.children.set(letter, new TrieNode())
      node = node.children.get(letter)!
      node.products = node.products.filter((item) => item.name !== product.name)
      node.products.push(product)
    }
  }

  search(prefix: string) {
    let node = this.root

    for (const letter of prefix.toLowerCase()) {
      node = node.children.get(letter)!
      if (!node) return []
    }

    return node.products
  }
}
