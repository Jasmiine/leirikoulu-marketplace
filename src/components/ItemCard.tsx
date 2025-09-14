'use client'

import { Item } from '@/lib/supabase'
import Image from 'next/image'

interface ItemCardProps {
  item: Item
  onContactSeller: (item: Item) => void
}

export default function ItemCard({ item, onContactSeller }: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="relative h-48 w-full">
        <Image
          src={item.image_url}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {item.description}
        </p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xl font-bold text-indigo-600">
            €{item.price.toFixed(2)}
          </span>
        </div>
        <button
          onClick={() => onContactSeller(item)}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Contact Seller
        </button>
      </div>
    </div>
  )
}
