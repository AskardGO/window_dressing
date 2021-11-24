import { useState } from 'react'

export default function Switcher({setMode}:any) {
    return (
        <div className="switcher">
            <label className="switch">
                <input type="checkbox" onChange={(e) => {
                    setMode(e.target.checked)
                }}/>
                <span className="slider"/>
            </label>
        </div>
    )
}
