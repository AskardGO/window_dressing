type symbolName = 'euro' | 'dollar' | 'pound'
type symbolList = {
    name: string
    symbol: string
}[]

const symbols:symbolList = [
    {
        name: 'euro',
        symbol: '€'
    },
    {
        name: 'dollar',
        symbol: '$'
    },
    {
        name: 'pound',
        symbol: '£'
    }
]


export function moneySymbol(name:symbolName) {
    return symbols.filter(s => s.name === name)[0].symbol
}