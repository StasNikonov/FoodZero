const BASE_URL = 'https://dummyjson.com'

const fetchData = async <T>(endpoint: string): Promise<T> => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('Fetch error:', error)
        throw error
    }
}

export { fetchData }
