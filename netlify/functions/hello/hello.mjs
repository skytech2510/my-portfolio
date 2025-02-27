export default (request, context) => {
    try {
        const url = new URL(request.url)
        const subject = url.searchParams.get('name') || 'World'

        return new Response(`Hello ${subject}`)
    } catch (error) {
        return new Response(error.toString(), {
            status: 500,
        })
    }
}