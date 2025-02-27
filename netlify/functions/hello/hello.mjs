// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
export default (request, context) => {
    try {
        return new Response("sdsdfsdf")
    } catch (error) {
        return new Response(error.toString(), {
            status: 500,
        })
    }
}
