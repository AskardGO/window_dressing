import React from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import typeMessageSwitcher from "./typeMessageSwitcher";

import {NotificationContext} from "./NotificationContext";

type MessageComponentType = {
    type: 'fail' | 'success',
    message: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>,
    close: () => void
    duration: number
    element: {
        current: any
    }
}

const MessageComponent = ({type, message, close, duration, element}: MessageComponentType) => {

    const [elapsedTime, setElapsedTime] = React.useState<number>(duration)

    const ctx = React.useContext(NotificationContext)

    const {icon, color} = typeMessageSwitcher(type)

    React.useEffect(() => {
        !elapsedTime && close()
        return () => {
            setTimeout(() => !(element?.current.childElementCount) && ctx.setMessages([]), 0)
        }
    }, [elapsedTime])

    const setActualRenderTime = (t: number | undefined) => {
        if(t) setElapsedTime(t)
        else close()
        return ''
    }


    return (
        <div
            className={`flex w-full items-center bg-${color}-500 border-l-4 border-${color}-700 py-2 px-3 shadow-md mb-2`}
        >
            <div className={`text-${color}-500 rounded-full bg-white mr-3`}>
                <CountdownCircleTimer
                    size={25}
                    strokeWidth={2}
                    trailStrokeWidth={2}
                    isPlaying
                    initialRemainingTime={elapsedTime}
                    duration={duration}
                    colors={
                        (type === 'fail')?
                            [['#004777', 0.33], ['#F7B801', 0.33], ['#A30000', 0.33],]:[['#2f855a', 1]]
                    }
                    renderAriaTime={(props) => setActualRenderTime(props.remainingTime)}
                >
                    {icon}
                </CountdownCircleTimer>
            </div>
            <div className="text-white max-w-xs select-none">
                {message}
            </div>
        </div>
    )
}

export default MessageComponent