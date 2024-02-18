const apiKey = 'gb2FVzLqZtjiU6HZWKW2yWx3vXXt7yns'

export default function getGifs({ keyword = 'mapache' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=
    ${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            if (Array.isArray(data)) {
                const gifs = data.map(image => image.images.original.url)
                return gifs
            }
        })
}