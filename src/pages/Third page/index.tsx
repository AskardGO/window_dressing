import React, {useContext} from "react";
import {NotificationContext} from "../../components/ToastrMessages/NotificationContext";
import useNotification from "../../hooks/useNotification";

const ThirdComp = () => {

    //@ts-ignore
    const ctx = useContext(NotificationContext)

    const createNotification = useNotification()

    return (
        <div className='flex justify-center items-center w-full h-full flex-col'>
            <h3> Third </h3>
            <button className='border bg-gray-500 rounded p-1'
                    onClick={() => {
                        createNotification({
                            type: 'success',
                            message: 'hello',
                            duration: 5
                        })
                    }}

            >
                Add notification
            </button>
            <button onClick={() => {
                console.log(ctx.messages)}}>
                Show Mass
            </button>
            <button onClick={() => {
                ctx.setMessages([])
                }}>
                Clear Mass
            </button>
            <iframe className='w-72 h-28 mt-10' scrolling="no" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/370147811&color=%234b0082&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"/>
        </div>

    )
}

export default ThirdComp
