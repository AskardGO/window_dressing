// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {InvoiceItems} from "../InvoiceItem/InvoiceItems";
import {getUser} from "../../services/UserServices";
import {AddTemplateButton} from "../AddTemplate/button";
import {ClientEditButton} from "../ClientEdit/button";

import styles from './UserTab.module.sass'

export const UserTabComponent = ({array, isTabOpen, _id}: any) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dateSortMode, setDateSortMode] = useState<boolean>(true);

    const dateSortIcon =
        [
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"/>
            </svg>,
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"/>
            </svg>
        ]

    useEffect(() => {
        setIsOpen(isTabOpen)
    }, [isTabOpen])

    return (
        <div className={styles.container}>
            <div className={styles.containerContent} onClick={() => {setIsOpen(!isOpen)}}>
                <div className='flex items-center px-3 text-center' >
                                <span className='text-sm font-medium text-gray-900'>
                                    {array.invoices[0].client.displayName}
                                    <span className='text-gray-400 text-xs px-1'>
                                    {array.totalInvoices}
                                    </span>
                                </span>
                    {isOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    }
                </div>
                <div className={styles.containerContentButtons}>
                    <AddTemplateButton client={{}}/>
                    <ClientEditButton client={{}}/>
                </div>
            </div>
            {
                isOpen && <div>
                    <table className="min-w-full divide-y divide-gray-200 fixed sticky top-0 z-10">
                        <colgroup>
                            <col className='w-2/6'/>
                            <col className='w-1/6'/>
                            <col className='w-1/6'/>
                            <col className='w-1/6'/>
                            <col className='w-1/6'/>
                            <col className='w-1/6'/>
                        </colgroup>
                        <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-1 text-left text-xs font-medium text-gray-500 tracking-wider w-4/12"
                            >
                                Invoice
                            </th>
                            <th
                                scope="col"
                                className="px-1 py-1 text-left text-xs font-medium text-gray-500 tracking-wider w-2/12"
                            >
                                Client
                            </th>
                            <th
                                onClick={() => setDateSortMode(!dateSortMode)}
                                scope="col"
                                className="flex items-center px-1 py-1 text-left text-xs font-medium text-gray-500 tracking-wider hover:text-indigo-700 transition w-8/12"
                            >
                                Date
                                <span className='pl-2'> {dateSortIcon[dateSortMode?0:1]} </span>
                            </th>
                            <th
                                scope="col"
                                className="px-1 py-1 text-left text-xs font-medium text-gray-500 tracking-wider w-2/12"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="px-1 py-1 text-left text-xs font-medium text-gray-500 tracking-wider w-2/12"
                            >
                                Total
                            </th>
                            <th scope="col" className="relative px-1 py-1">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {array.invoices.length && <InvoiceItems array={array.invoices}
                                                          dateSortMode={dateSortMode}
                        />
                        }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}
