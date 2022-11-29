import React from 'react'
import s from './Message1.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message1 = (props: MessagePropsType) => {
    const {id, user, message} = props.message;
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>


            <div className={s.avatarAndTime}>
                <img alt='avatar' id={'hw1-avatar-' + props.message.id} src={user.avatar}/>
                <div id={'hw1-time-' + props.message.id} className={s.time}>
                    {message.time}
                </div>
            </div>

            <div className={s.text}>
                <div className={s.bubble}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {user.name}
                    </div>
                    <div id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {message.text}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message1
