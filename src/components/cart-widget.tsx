'use client'

import { useCart } from '@/contexts/cart-contexts'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()

  // const quantityOfItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">Carrinho ({items.length})</span>
    </div>
  )
}
