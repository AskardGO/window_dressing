import React, {useContext, useEffect, useState} from "react";
import {NotificationContext} from "../components/ToastrMessages/NotificationContext";

type NotificationPropsType = {
    type: 'success' | 'fail',
    message: string | React.ReactElement
    duration: number
}

const useNotification = () => {

    const [values, create] = useState<NotificationPropsType | null>(null)
    const ctx = useContext(NotificationContext)

    useEffect(() => {
        (ctx && values) && ctx.setMessages(
            (prev: any) => {
                const {type, message, duration} = values
                return [...prev, {
                    type: type,
                    message: message,
                    duration: duration,
                    index: Math.random()
                }]
            }
        )
    }, [values])

    return create
}

export default useNotification