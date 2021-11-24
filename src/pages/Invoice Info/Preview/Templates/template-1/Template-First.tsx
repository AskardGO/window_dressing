import React, {useEffect} from 'react';
import dateConverter from "../../../../../components/dateConverter";
import './template-1.css'
import {Invoice} from "../../../../Invoices/InvoiceType";

export const TemplateFirst = (props: any) => {

    const invoice:any = props.props;

    useEffect(() => {
    }, [])

    return (
        invoice?<>
            {/* need to change structure */}
            <div className='invoice__paper-top'>
                <span> Private Entrepreneur </span>
                <div className='paper-top__address'>
                    <div className='address-info'>
                        <span> Mr. Mykola Savenko </span>
                        <span> Bohdanivs'ka 7V </span>
                        <span> 03049 Kyiv </span>
                        <span> Ukraine </span>
                        <span> myk.sav@gmail.com </span>
                        <span> +380953475345 </span>
                    </div>
                    <div className='payer-id'>
                        <span className='payer-id__elem'>
                            Unified Tax Payer ID:
                        </span>
                        <span> 423532532625 </span>
                    </div>
                    <span className='stick'/>
                </div>
            </div>
            <span className='invoice__paper-id'>
                Invoice {invoice.invoiceNumber}
            </span>
            <div className='relative'>
                <div className='invoice-to__info'>
                    <div className='main__info'>
                        <span className='absolute font-semibold'>
                            Bill To    Zeta Alpha Vector B.V.
                        </span>
                        <div className='grid absolute top-10 left-10'>
                            <span>
                                Mr. Crowley
                            </span>
                            <span>
                                Science Park 608 - Unit K16
                            </span>
                            <span>
                                1098 XH Amsterdam
                            </span>
                            <span>
                                The Nether-lands
                            </span>
                            <span>
                                veryvazhnayapochta@zeta-alpha.com
                            </span>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex text-right flex-col pl-2'>
                            <span className='font-semibold'>
                                Invoice Number
                            </span>
                            <span className='font-semibold'>
                                Date
                            </span>
                            <span className='font-semibold'>
                                Payment Terms
                            </span>
                        </div>
                        <div className='flex text-left flex-col pl-2'>
                            <span>
                                {invoice.invoiceNumber}
                            </span>
                            <span>
                                {dateConverter(invoice.date, 'L')}
                            </span>
                            <span>
                                {dateConverter(invoice.date, 'L')}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='invoice__paper-table'>

                <table className='table__info'>
                    <tr className='table__info-title'>
                        <td>Description</td>
                        <td>HRS/QTY</td>
                        <td>Rate</td>
                        <td>Amount</td>
                    </tr>
                    <tr className='table__info-vars'>
                        <td> {invoice.displayName} </td>
                        <td>70</td>
                        <td>€ 50</td>
                        <td>€ 75</td>
                    </tr>
                </table>
                <div className='invoice__paper-total'>
                    <span className='total__title'> Total </span>
                    <span className='total_var'> {invoice.total} {invoice.currency} </span>
                </div>

            </div>
            <div className='invoice__paper-details'>
                <span className='paper__details details-title'> Payment details: </span>
                <div className="details">
                    <span className='details-title'> Beneficiary: </span>
                    <span className='details-var'> client name </span>
                </div>
                <div className="details">
                    <span className='details-title'> IBAN / Account: </span>
                    <span className='details-var'> 57235432823252 </span>
                </div>
                <div className="details">
                    <span className='details-title'> Beneficiary's bank: </span>
                    <span className='details-var'> JSC CB "PRIVATBANK" </span>
                </div>
                <div className="details">
                    <span className='details-title'> Swift (BIC): </span>
                    <span className='details-var'> PBANUA2X </span>
                </div>
            </div>
        </>: <span> Load </span>
    );
};
