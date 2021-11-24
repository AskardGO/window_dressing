export type Invoice = {
    total: number,
    createdAt: string,
    updatedAt: string,
    invoiceNumber: string,
    _id: string,
    client: {
        displayName: string,
        id: string
    },
    displayName: string,
    currency: string,
    dueDate: string,
    totalInvoices: number,
    invoices: {
        _id: string,
        statuses: {
            status: string,
            createdAt: string
        }[],
        template: {
            type: string
            position: {
                x: number
                y: number
                width: number
                height: number
            },
            data: {
                type: string,
                value: string,
            }[]
        }[]
    }[]
}[]


