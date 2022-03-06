import { useState } from "react"
type AuthUser = {
    name: string,
    email: string
}
export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);


    const handleLogin = () => {
        setUser({name: "Tausif", email: "xyz@gmail.com"})
    }
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>{!user?.name ? 'Login' : user?.name }</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user?.name}</div>
        <div>User Email is {user?.email}</div>
        {user?.name ? <button onClick={handleLogin}>Login</button> :   <button onClick={handleLogout}>Logout</button>}
    </div>
    
  )
}

