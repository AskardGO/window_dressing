// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Invoice} from "../../pages/Invoices/InvoiceType";
import dateConverter from "../dateConverter";
import {Link} from "react-router-dom";
import statusTransform from "../statusTransform";
import {getInvoice} from "../../services/InvoiceServices";
import {moneySymbol} from "../symbols";

type Props = {
    array: any,
    dateSortMode: boolean,
};
export const InvoiceItems = ({array, dateSortMode}: Props):JSX.Element => {

    const [currentArray, setCurrentArray] = useState<any>(null)
    const [mode] = React.useState(dateSortMode)

    useEffect(() => dateSort())

    const dateSort = ():any => {
        const result = array.sort((a: any, b: any) => b?.date - a?.date)
        mode && result.reverse()
        setCurrentArray(result)
    }

    const antStatusTransform = (inv: any) =>
        "ant-btn-" + statusTransform(
            inv.statuses[inv.statuses.length - 1].status)
            .replace(" ", "_")


    return (
        <>
        {
            // @ts-ignore
            currentArray && currentArray.map((invoice) => (
            <tr className='invoice__element sm:rounded-lg w-full' key={invoice._id + ' element'} style={{position: 'relative'}}>
                <td className="px-6 py-2 whitespace-nowrap">
                    <div className="flex">
                        <div>
                            <div
                                className="text-xs font-medium text-gray-900">{invoice.displayName}</div>
                            <div className="text-xs text-gray-500"># {invoice.invoiceNumber}</div>
                        </div>
                    </div>
                </td>
                <td className="px-1 py-2 whitespace-nowrap">
                    <div className="text-xs text-gray-900">{invoice.client.displayName}</div>
                </td>
                <td className="px-1 py-2 whitespace-nowrap text-xs">
                    {dateConverter(invoice.updatedAt, 'D MMM YYYY')}
                </td>
                <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500 status">
                                            <span
                                                className={'px-2 inline-flex text-xs leading-5 rounded-full ' + antStatusTransform(invoice)}>
                                                {statusTransform(invoice.statuses[invoice.statuses.length - 1].status)}
                                            </span>
                </td>
                <td className="px-1 py-2 whitespace-nowrap">
                    <span className="text-xs text-gray-900">{invoice.total} {moneySymbol(invoice.currency)}</span>
                </td>
                <td className="px-1 py-2 whitespace-nowrap text-right text-xs font-medium">
                    <Link key={invoice._id} className='invoice__link'
                          to={{
                              pathname: '/invoices/' + invoice._id,
                              state: invoice._id
                          }}
                    />
                </td>
            </tr>
        ))
        }
        </>
    );
};
