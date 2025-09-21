import React, { useState } from 'react'
import apis from './data/apis.json'
import ApiCard from './components/ApiCard'
import SearchBar from './components/SearchBar'

export default function App() {
  const [search, setSearch] = useState('')

  const filtered = apis.filter(api => 
    api.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🌐 Public APIs Explorer</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filtered.map(api => <ApiCard key={api.name} api={api} />)}
      </div>
    </div>
  )
}
