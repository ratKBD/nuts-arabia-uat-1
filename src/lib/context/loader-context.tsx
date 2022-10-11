import React, { useContext, useState } from "react"

interface LoaderProps {
  children: React.ReactNode
}

interface LoaderContext {
  loader: any
  setLoader: any
  sectionLoader: any
  setSectionLoader: any
  sectionLoaderTwo: any
  setSectionLoaderTwo: any
}

const LoaderContext = React.createContext<LoaderContext | null>(null)

export const LoaderProvider = ({ children }: LoaderProps) => {
  const [loader, setLoader] = useState(false)
  const [sectionLoader, setSectionLoader] = useState(false)
  const [sectionLoaderTwo, setSectionLoaderTwo] = useState(false)
  console.log("loader", loader)
  // React.useEffect(() => {
  //   setLoader(!loader)
  // }, [loader])

  return (
    <LoaderContext.Provider
      value={{
        loader,
        setLoader,
        sectionLoader,
        setSectionLoader,
        sectionLoaderTwo,
        setSectionLoaderTwo,
      }}
    >
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => {
  const context = useContext(LoaderContext)

  if (context === null) {
    throw new Error("useLoader must be used within a LoaderProvider")
  }
  return context
}
