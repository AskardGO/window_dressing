import React from "react";
import {Invoice} from "./InvoiceType";
import AddInvoice from "../../components/InvoiceAddForm/InvoiceAddForm";
import {getInvoices} from "../../services/InvoiceServices";
import {InvoiceUserTab} from "../../components/InvoiceUserTab";

import {AddUser} from "../../components/ClientAdd";
import {SearchInvoice} from "../../components/SearchInvoice";
import {StatusFilterComponent} from "../../components/StatusFilter";
import {DatePickerComponent} from "../../components/DatePicker";

import useFilter from "../../hooks/useFilter";

import './filterItems.sass'
import styles from './InvoiceStyles.module.sass'


const Invoices = () => {

    const [invoices, setInvoices] = React.useState<Invoice[] | []>([])
    const {filters, setSearch, setDate, setStatuses} = useFilter()

    React.useEffect(() => {
        (async () => {
            const data = await getInvoices()
            if (data[0]) {
                const arr = data[0].data.data.sort((a: any, b: any) => a.invoices[0].client.displayName > b.invoices[0].client.displayName ? 1 : -1)
                setInvoices(arr)
            } else {
                alert(data[1])
            }
        })()
    }, []);

    React.useEffect(() => {
        console.log(filters)
    })

    return (
        <div className={styles.invoice} key='invoices'>
            <div
                className={styles.invoiceHeader}>
                <div className={styles.invoiceHeaderInputs}>
                    <SearchInvoice value={filters.search} setValue={setSearch}/>
                    <DatePickerComponent setDate={setDate}/>
                    <StatusFilterComponent setStatuses={setStatuses}/>
                </div>
                <div className={styles.invoiceHeaderToolBox}>
                    <AddUser/>
                    <AddInvoice/>
                </div>

            </div>
            <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-8 pt-2 px-2 mb-64">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="bg-white overflow-y-auto max-h-list sm:rounded relative">
                        <InvoiceUserTab array={invoices}/>
                    </div>
                </div>
            </div>
            {!invoices.length &&
            <span className='w-1/6 bg-white self-center text-center p-2 rounded-md'> There is no data </span>}
        </div>
    )
}


export default React.memo(Invoices)
