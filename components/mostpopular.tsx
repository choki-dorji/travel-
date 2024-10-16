import React from 'react'
import CardComponent from './Card/Card'

export default function MostPopular() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
  <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-center text-base/7 font-semibold text-indigo-600"></h2>
    <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
        Most popular places
    </p>
    <CardComponent />
  
  </div>
</div>
  )
}
