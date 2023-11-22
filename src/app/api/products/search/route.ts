import type { NextRequest } from 'next/server'
import { z } from 'zod'
import data from '../data.json'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  /**
  // Sem NextRequest
  const url = new URL(request.url)
  console.log(request.url)
  console.log(url.search)
  console.log(url.searchParams)
  console.log(Array.from(url.searchParams)) // <--
  console.log(Object.fromEntries(url.searchParams.entries())) // <--
  return Response.json({})
  */

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  // Em um cenário real seria uma query no BD
  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLowerCase())
  })

  return Response.json(products)
}
