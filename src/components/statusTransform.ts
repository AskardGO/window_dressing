export default function statusTransform (status: string) {
    // @ts-ignore
    const symb:Array = status.match(/[A-Z]/g)
    let str = status
    if(symb.length > 1) {
        str = str.substr(0, str.indexOf(symb[1])) + " " + str.substr(str.indexOf(symb[1]))
    }
    return str.toLowerCase()
}