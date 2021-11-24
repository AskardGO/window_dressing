// @flow
import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../components/Auth/AuthContext";


export const User = () => {

    const currentUser = useContext<any>(AuthContext).currentUser
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        console.log(currentUser)
    }, []);


    return (
        <>
            {currentUser ?
                <div className='flex justify-center mt-6'>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-6">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form action="#" method="POST">
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className={`grid grid-cols-6 gap-6 ${isEditable && 'text-gray-400'}` }>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first_name"
                                                           className="block text-sm font-medium text-gray-700">
                                                        First name
                                                    </label>
                                                    <input
                                                        readOnly={isEditable}
                                                        value={currentUser.name}
                                                        type="text"
                                                        name="first_name"
                                                        id="first_name"
                                                        autoComplete="given-name"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last_name"
                                                           className="block text-sm font-medium text-gray-700">
                                                        Last name
                                                    </label>
                                                    <input
                                                        readOnly={isEditable}
                                                        value={currentUser.lastName}
                                                        type="text"
                                                        name="last_name"
                                                        id="last_name"
                                                        autoComplete="family-name"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-4">
                                                    <label htmlFor="email_address"
                                                           className="block text-sm font-medium text-gray-700">
                                                        Email address
                                                    </label>
                                                    <input
                                                        readOnly={isEditable}
                                                        value={'qwerty@mail.ua'}
                                                        type="text"
                                                        name="email_address"
                                                        id="email_address"
                                                        autoComplete="email"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="country"
                                                           className="block text-sm font-medium text-gray-700">
                                                        Country / Region
                                                    </label>
                                                    <select
                                                        disabled={isEditable}
                                                        value={currentUser.country}
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country"
                                                        className={"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm " + (!isEditable?'appearance-none':'appearance-unset')}
                                                    >
                                                        <option> United States </option>
                                                        <option> Canada </option>
                                                        <option> Mexico </option>
                                                        <option> Ukraine </option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6">
                                                    <label htmlFor="street_address"
                                                           className="block text-sm font-medium text-gray-700">
                                                        Street address
                                                    </label>
                                                    <input
                                                        readOnly={isEditable}
                                                        value={'ul. Pushkina, d. Kolotushkina'}
                                                        type="text"
                                                        name="street_address"
                                                        id="street_address"
                                                        autoComplete="street-address"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label htmlFor="city"
                                                           className="block text-sm font-medium text-gray-700">
                                                        City
                                                    </label>
                                                    <input
                                                        readOnly={isEditable}
                                                        value={currentUser.city}
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="state"
                                                           className="block text-sm font-medium text-gray-700">
                                                        State / Province
                                                    </label>
                                                    <input
                                                        readOnly={isEditable}
                                                        type="text"
                                                        name="state"
                                                        id="state"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="postal_code"
                                                           className="block text-sm font-medium text-gray-700">
                                                        ZIP / Postal
                                                    </label>
                                                    <input
                                                        readOnly={isEditable}
                                                        type="text"
                                                        name="postal_code"
                                                        id="postal_code"
                                                        autoComplete="postal-code"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                onClick={
                                                    () => {
                                                        if(isEditable) {
                                                            console.log('save user data')
                                                            setIsEditable(false)
                                                        } else {
                                                            setIsEditable(true)
                                                        }
                                                    }
                                                }
                                                type="button"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                {isEditable?'Save':'Edit'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                :
                <div> Load </div>
            }
        </>
    )
}
