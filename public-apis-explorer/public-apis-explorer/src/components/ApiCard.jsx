import React from 'react'

export default function ApiCard({ api }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold">{api.name}</h2>
      <p className="text-sm text-gray-600">{api.description}</p>
      <a href={api.link} target="_blank" rel="noreferrer" className="text-blue-600 underline mt-2 block">
        Visit API
      </a>
    </div>
  )
}
