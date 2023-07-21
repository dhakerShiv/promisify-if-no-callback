module.exports = function promisify(fn) {
    return function () {
        const lastArgument = arguments[arguments.length - 1];

        // consider last argument as callback if it is a function
        if (typeof lastArgument === 'function') return fn.apply(this, arguments);

        return new Promise((resolve, reject) => {
            const args = [
                ...arguments,
                (err, value) => {
                    if (err) {
                        return reject(err)
                    }

                    resolve(value)
                }
            ];

            fn.apply(this, args)
        })
    }
}