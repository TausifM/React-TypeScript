import React from 'react'
type Props = {
    name: string
    email: string
    mobile: number
    status: 'active' | 'inactive' | 'pending' // we can use only this 3 mentioned status
    children: React.ReactNode
    styles: React.CSSProperties
}
const Profile:React.FC<Props> = ({name, email, mobile, status, children, styles}) => {
  return (
    <div style={styles}>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Mobile: {mobile}</div>
        <div>Status: {status}</div>
        {children}
    </div>
  )
}

export default Profile