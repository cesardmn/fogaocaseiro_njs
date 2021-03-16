import { createContext, useContext, useState } from 'react'

export const TypeContext = createContext({})

export const TypeProvider = (props) => {
  const [totalType, setTotalType] = useState(0)
  const [totalValueType, setTotalValueType] = useState(0)
  const [totalCountType, setTotalCountType] = useState(0)

  return (
    <TypeContext.Provider
      value={{
        totalType,
        setTotalType,
        totalValueType,
        setTotalValueType,
        totalCountType,
        setTotalCountType,
      }}
    >
      {props.children}
    </TypeContext.Provider>
  )
}

export const useType = () => useContext(TypeContext)
