import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Menu, Popover, Transition} from '@headlessui/react';
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    ShieldCheckIcon,
    XIcon,
} from '@heroicons/react/outline';
import {Link, NavLink} from "react-router-dom";
import {AuthContext} from "../Auth/AuthContext";
import {logOut} from "../../services/AuthServices";
import jwt_decode from "jwt-decode";
import {getUser} from "../../services/UserServices";
import {UserType} from "../../pages/User/UserType";

import styles from './Header.module.sass'
import {Affix} from "antd";

type FullUser = { data: UserType }


function Header() {
    // @ts-ignore
    const ctx = useContext<any>(AuthContext)
    const [user, setUser] = useState<UserType | null>(null)
    const [fullUser, setFullUser] = useState<FullUser | null>(null)

    useEffect(() => {
        (() => {
            const token = localStorage.getItem('token') as string
            if (token) {
                ctx.setToken(JSON.parse(token))
                setUser(jwt_decode(token))
            }
        })()
    }, [])

    useEffect(() => {
        if(user) {
            (async () => {
                const user_data = await getUser(user._id)
                if(user_data[0] !== null) {
                    setFullUser(user_data[0].data.data)
                } else {
                    alert(user_data[1])
                }
            })()
        }
    },[user])

    const classNames = (...classes: any) => {
        return classes.filter(Boolean).join(' ')
    }

    const solutions = [
        {
            name: 'Hop-hey',
            description: 'Every time we are may to create something perfect',
            href: '#',
            icon: ChartBarIcon,
        },
        {
            name: 'Else button',
            description: 'And something else',
            href: '#',
            icon: CursorClickIcon,
        },
    ]
    const resources = [
        {
            name: 'Guides',
            description: 'How you are may use this app',
            href: '#',
            icon: BookmarkAltIcon,
        },
        {
            name: 'Events',
            description: 'Happy Birthday',
            href: '#',
            icon: CalendarIcon,
        },
        {
            name: 'Security',
            description: 'We can secure you money and data',
            href: '#',
            icon: ShieldCheckIcon
        },
    ]

    return (
        <Affix offsetTop={0.1} style={{position: 'relative'}}>
            <Popover className={styles.container}>
                {({open}) => (
                    <>
                        <div className='flex items-center w-full'>
                            <div
                                className="flex w-full items-center md:justify-start ">
                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                                <Popover.Group as="nav" className="flex hidden md:flex space-x-10 items-center">
                                    <NavLink exact activeClassName="selected" to="/">
                                        <span className="sr-only">Home</span>
                                        <img
                                            className="h-5 w-auto sm:h-5"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt=""
                                        />
                                    </NavLink>
                                    <NavLink exact activeClassName="text-blue-500" to='/'
                                             className="text-base font-medium text-gray-500">
                                        Invoices
                                    </NavLink>
                                    <NavLink activeClassName="text-blue-500" to='/third'
                                             className="text-base font-medium text-gray-500">
                                        Third
                                    </NavLink>
                                </Popover.Group>
                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                    {ctx.token ?
                                        <>
                                            <Menu as="div" className="relative inline-block text-left">
                                                {({ open }) => (
                                                    <>
                                                        <div>
                                                            <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-gray-100 focus:ring-indigo-500">
                                                                <span className="sr-only">Open user menu</span>
                                                                <img
                                                                    className="h-8 w-8 rounded-full"
                                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                    alt=""
                                                                />
                                                            </Menu.Button>
                                                        </div>

                                                        <Transition
                                                            show={open}
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items
                                                                static
                                                                className="origin-top-right absolute z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                            >
                                                                <div className="py-1">
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <a
                                                                                href="/user"
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                    'flex row items-center px-4 py-2 text-sm'
                                                                                )}
                                                                            >
                                                                                {user && <span className='font-bold'> {user?.firstName + ' ' + user?.lastName} </span>}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                                </svg>
                                                                            </a>
                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <a
                                                                                href="#"
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                    'block px-4 py-2 text-sm'
                                                                                )}
                                                                            >
                                                                                Support
                                                                            </a>
                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <a
                                                                                href="#"
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                    'block px-4 py-2 text-sm'
                                                                                )}
                                                                            >
                                                                                License
                                                                            </a>
                                                                        )}
                                                                    </Menu.Item>
                                                                    <form method="POST" action="#">
                                                                        <Menu.Item>
                                                                            {({ active }) => (
                                                                                <button
                                                                                    onClick={() => {
                                                                                        logOut()
                                                                                        ctx.setToken(undefined)
                                                                                    }}
                                                                                    type='button'
                                                                                    className={classNames(
                                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                        'block w-full text-left px-4 py-2 text-sm'
                                                                                    )}
                                                                                >
                                                                                    Sign out
                                                                                </button>
                                                                            )}
                                                                        </Menu.Item>
                                                                    </form>
                                                                </div>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Menu>
                                        </>
                                        :
                                        <div className='mr-5'>
                                            <NavLink activeClassName="selected"
                                                     to={{pathname: "/signin"}}
                                                     className="whitespace-nowrap text-xs font-medium text-gray-500 hover:text-gray-900">
                                                Sign in
                                            </NavLink>
                                            <Link
                                                to="#"
                                                className="ml-8 whitespace-nowrap text-xs font-medium text-gray-500 hover:text-gray-900"
                                            >
                                                Sign up
                                            </Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                static
                                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div
                                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                    <div className="pt-5 pb-6 px-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button
                                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true"/>
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6 absolute z-40">
                                            <nav className="grid gap-y-8">
                                                {solutions.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                    >
                                                        <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                   aria-hidden="true"/>
                                                        <span
                                                            className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="py-6 px-5 space-y-6">
                                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                Pricing
                                            </a>

                                            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                Docs
                                            </a>
                                            {resources.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                        <div>
                                            {ctx.token ?
                                                <button
                                                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                </button> :
                                                <>
                                                    <a
                                                        href="#"
                                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                    >
                                                        Sign up
                                                    </a>
                                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                        Existing customer?{' '}
                                                        <NavLink activeClassName="selected"
                                                                 to={{pathname: '/signin'}}
                                                                 className="ext-indigo-600 hover:text-indigo-500">
                                                            Sign in
                                                        </NavLink>
                                                    </p>
                                                </>

                                            }
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </Affix>
    )
}

export default React.memo(Header);
