export const arr = [
    {name: 'Alex', price: 23, city: 'Yerevan'},
    {name: 'Groove', price: 232, city: 'Sochi'},
    {name: 'Gary', price: 13, city: 'Moscow'},
    {name: 'Flora', price: 123, city: 'Rostov'},
    {name: 'Bob', price: 94, city: 'NY'},
]

export const Sort = (arr, type, ) => {
    if (type === 'name') {
        return arr.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
    } else if (type === 'price') {
        return arr.sort((a, b) => a.price < b.price ? -1 : 1)
    } else if (type === 'city') {
        return arr.sort((a, b) => a.city < b.city ? -1 : 1)
    }
}

