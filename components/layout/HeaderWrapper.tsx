import { getAllCategories } from '@/lib/api/client'
import { Header } from './Header'

export async function HeaderWrapper() {
  let categories = []

  try {
    categories = await getAllCategories()
  } catch (error) {
    // If API fails, render header without categories
    console.error('Failed to fetch categories for header:', error)
  }

  return <Header categories={categories} />
}
