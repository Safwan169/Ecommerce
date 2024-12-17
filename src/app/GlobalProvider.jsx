import {ContextProvider} from '@/app/GlobalDataShere/ContextProvider'

const GlobalProvider = ({children}) => {
  return  <ContextProvider>{children}</ContextProvider>
  
}

export default GlobalProvider
