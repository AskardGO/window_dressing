import * as React from 'react';
import {useEffect} from 'react';
import DH from './DH.svg'
import './template-2.css'
import dateConverter from "../../../../../components/dateConverter";


export const TemplateSecond = (props: any) => {

    const invoice = props.props;

    useEffect(() => {

    }, [props])

    return (
        invoice ?
            <div className={'template__second'}>
                <div className='template__second-top'>
                    <div className='template__second-client'>
                        <div>
                            <span className='red-font px-0.5'> {invoice.client.name} {invoice.client.lastName} </span>
                            <span> Budivelnikiv Street 8 </span>
                            <span> Zamhlai village, Chernigiv region, 15005 Ukraine </span>
                            <span> Phone: +380969538589 </span>
                            <span> VAT ID: 3301302471 </span>
                        </div>
                        <div>
                            <span className='red-font md'> BILL TO: </span>
                            <span> Jasmin IP S.a.r.l </span>
                            <span> 44 Avenue John F. Kennedy </span>
                            <span> L-1855, Luxembourg, Luxembourg </span>
                            <span> VAT ID: 3301302470 </span>
                        </div>
                    </div>
                    <div className='template__second-info'>
                        <span className='red-font template__second-title'> INVOICE </span>
                        <div className='second__info'>
                            <div className='second__info-titles'>
                                <span className='red-font'>
                                    DATE:
                                </span>
                                <span className='red-font'>
                                    INVOICE #:
                                </span>
                                <span className='red-font'>
                                    PERIOD:
                                </span>
                            </div>
                            <div className='second__info-vars'>
                                <span> {dateConverter(invoice.date, 'D.MM.YYYY')} </span>
                                <span> 004 </span>
                                <span> {dateConverter(invoice.date, 'D.MM.YYYY')} - {dateConverter(invoice.date, 'D.MM.YYYY')} </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='second__middle'>
                    <table className="second__table">
                        <tbody>
                        <tr>
                            <th> DESCRIPTION </th>
                            <th> UNIT </th>
                            <th> QUANTITY </th>
                            <th> RATE </th>
                            <th> AMOUNT </th>
                        </tr>
                        <tr>
                            <td> Software Development Services </td>
                            <td className='text-center'> HOURS </td>
                            <td className='text-right'> 12.99 </td>
                            <td>
                                <div className={'second__table-money'}>
                                    <span> € </span> <span> 29.33 </span>
                                </div>
                            </td>
                            <td className='bg-red-300'>
                                <div className={'second__table-money'}>
                                    <span> € </span> <span> 29.33 </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td> On-Call Services </td>
                            <td className='text-center'> DAYS </td>
                            <td className='text-right'> 0.00 </td>
                            <td>
                                <div className={'second__table-money'}>
                                    <span> € </span> <span> 29.33 </span>
                                </div>
                            </td>
                            <td className='bg-red-300'>
                                <div className={'second__table-money'}>
                                    <span> € </span> <span> 29.33 </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{border: 'unset'}} colSpan={3}> </td>
                            <td style={{border: 'unset', color: 'black'}}> SUBTOTAL </td>
                            <td className='bg-red-300'>
                                <div className={'second__table-money'}>
                                    <span> € </span> <span> 29.33 </span>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td style={{border: 'unset'}} colSpan={3}> </td>
                            <td style={{border: 'unset', lineHeight: 1, color: 'black'}}> <span> VAT 17% </span> <br/> <span className='text-xxs'> (if applicable) </span> </td>
                            <td className='text-right'> 0.00% </td>

                        </tr>
                        <tr>
                            <td style={{border: 'unset'}} colSpan={3}> </td>
                            <td className='red-font font-bold' style={{border: 'unset'}}> TOTAL </td>
                            <td className='bg-red-300'>
                                <div className={'second__table-money'}>
                                    <span> € </span> <span> 29.33 </span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <img src={DH} alt={'DH'}/>
            </div>
            : <span> Load </span>
    );
};
