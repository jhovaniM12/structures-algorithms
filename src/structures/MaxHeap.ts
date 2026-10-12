import type { Product } from '../types/Product'

export class MaxHeap {
  private items: Product[] = []

  private moveUp(index: number) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2)
      if (this.items[parent].popularity >= this.items[index].popularity) break
      ;[this.items[parent], this.items[index]] = [this.items[index], this.items[parent]]
      index = parent
    }
  }

  private moveDown(index: number) {
    while (true) {
      let largest = index
      const left = index * 2 + 1
      const right = left + 1

      if (left < this.items.length && this.items[left].popularity > this.items[largest].popularity) largest = left
      if (right < this.items.length && this.items[right].popularity > this.items[largest].popularity) largest = right
      if (largest === index) break

      ;[this.items[index], this.items[largest]] = [this.items[largest], this.items[index]]
      index = largest
    }
  }

  add(product: Product) {
    this.items.push(product)
    this.moveUp(this.items.length - 1)
  }

  take() {
    const first = this.items[0]
    const last = this.items.pop()
    if (this.items.length && last) {
      this.items[0] = last
      this.moveDown(0)
    }
    return first
  }
}
