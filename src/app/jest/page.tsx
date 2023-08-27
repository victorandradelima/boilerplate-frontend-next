'use client'
import { useState } from 'react'

export const revalidate = 1

export default function Jest() {
  const [list, setList] = useState([] as Array<string>)

  const [inputValue, setInputValue] = useState('')
  const [inputValueLabel, setInputValueLabel] = useState('')

  const addNewListItem = () => {
    const newList = list.concat([`Novo item ${list.length + 1}`])
    setList(newList)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 id="test-id" className="text-xl">
        Exemplo com Jest e Testing Library
      </h1>
      <h2 className="text-lg">
        Componente para exemplificar o uso do Jest e Testing Librarys
      </h2>
      <div className="border-t border-gray-300 my-4 w-full"></div>
      <h4>Componente para exemplificar o uso do Jest e Testing Librarys</h4>
      <button className="bg-blue-500 text-white p-2" onClick={addNewListItem}>
        Adicionar item
      </button>
      <ul>
        {list.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      <div className="border-t border-gray-300 my-4 w-full"></div>
      <h4>Componente para testar o valor inserido por um input</h4>
      <input
        placeholder="Input para teste"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="my-2 p-2 border border-blue-300"
      />
      <button
        className="bg-blue-500 text-white p-2"
        onClick={() => setInputValueLabel(inputValue)}
      >
        Adicionar valor do input
      </button>
      Valor do input: <div>{inputValueLabel}</div>
    </main>
  )
}
