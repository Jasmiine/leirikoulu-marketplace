'use client'

import { Item } from '@/lib/supabase'
import Image from 'next/image'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

interface AdminItemCardProps {
  item: Item
  onItemDeleted: () => void
}

export default function AdminItemCard({ item, onItemDeleted }: AdminItemCardProps) {
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this item?')) return

    setDeleting(true)
    try {
      const { error } = await supabase
        .from('items')
        .delete()
        .eq('id', item.id)

      if (error) {
        console.error('Error deleting item:', error)
        alert('Error deleting item: ' + error.message)
      } else {
        onItemDeleted()
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An unexpected error occurred')
    } finally {
      setDeleting(false)
    }
  }

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
          onClick={handleDelete}
          disabled={deleting}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
        >
          {deleting ? 'Deleting...' : 'Delete Item'}
        </button>
      </div>
    </div>
  )
}
