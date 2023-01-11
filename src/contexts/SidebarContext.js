import React, { createContext, useState } from 'react'

export  const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handeClose = () => {
    setIsOpen(false);
  }
  return (
    <SidebarContext.Provider value= {{isOpen, setIsOpen, handeClose}}>{children }</SidebarContext.Provider>
  )
}
export default  SidebarProvider
