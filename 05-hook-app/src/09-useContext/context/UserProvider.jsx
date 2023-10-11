import { useState } from "react"
import { UserContext } from "./UserContext"

// children son las rutas
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}