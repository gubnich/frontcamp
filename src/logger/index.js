export const logger = obj => {
    return new Proxy(obj, {
        get: function (target, propKey) {
            if (propKey === 'getList') return (...args) => {
                console.log('Request parameters: ', { fetch: obj.apiPoint, from: obj.request, arguments: args });
                return target[propKey].call(target, args)
            }
        }
    })
}
