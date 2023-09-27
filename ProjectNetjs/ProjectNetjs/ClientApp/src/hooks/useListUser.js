import { useEffect, useState } from "react"

export function useListUser() {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")


    useEffect(() => {
        setLoading(true)
        setError("")
        fetch("api/users/List")
            .then(res => res.json())
            .then(users => {
                setUsers(users)
            })
            .catch(e => setError(e))
            .finally(
                setLoading(false)
            )

    }, [])
    return {
        users,
        loading,
        error
    }
}

