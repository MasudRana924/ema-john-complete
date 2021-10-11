import { useContext } from "react"
import { AuthContext } from "../ApiContext/AuthProvider"

const useAuth=()=>{
   return useContext(AuthContext)
}
export default useAuth