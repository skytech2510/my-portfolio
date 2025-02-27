exports.handler = async (event, context) => {
    return {
        statusCode: 500,
        body: JSON.stringify({
            msg: 'Hello World!',
        }),
    };
};