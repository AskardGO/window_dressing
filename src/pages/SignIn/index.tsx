import React, {Context, useContext, useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/solid'
import { logIn } from "../../services/AuthServices";
import {AuthContext} from "../../components/Auth/AuthContext";

const SignIn = (props: any) => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [user, setUser] = useState(null)
    // @ts-ignore
    const ctx = useContext<Context>(AuthContext)

    // @ts-ignore
    useEffect(() => {
        if(ctx.token) {
            localStorage.setItem('token', JSON.stringify(ctx.token))
            console.log(ctx.token.data)
        }
    });


    const onLogIn = async () => {
        if(email && password) {
            const token = await logIn({email, password})
            if(token.data) {
                ctx.setToken(await logIn({email, password}))
            } else {
                alert('Auth Error, try later')
            }
        }
    }

    return (
        <>
            {ctx.token && <Redirect to={'/'}/>}
            <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    value={email}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    onChange={(e) => {setPassword(e.target.value)}}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={onLogIn}
                                type='button'
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn
