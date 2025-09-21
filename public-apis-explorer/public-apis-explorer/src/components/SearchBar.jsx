import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search APIs..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="p-2 border rounded w-full"
    />
  )
}
