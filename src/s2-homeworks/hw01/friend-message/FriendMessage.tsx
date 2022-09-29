import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    const {id, user, message} = {...props.message};
    return (
        <div id={'hw1-friend-message-' + id} className={s.friendMessage}>

            <div className={s.friendImageAndText}>
                <div className={s.friendText}>
                    <div id={'hw1-friend-name-' + id} className={s.friendName}>
                        {user.name}
                    </div>
                    <div id={'hw1-friend-text-' + id} className={s.friendMessageText}>
                        {message.text}
                    </div>
                </div>
                <img alt='avatar' id={'hw1-friend-avatar-' + id} src={user.avatar}/>
            </div>
            <div id={'hw1-friend-time-' + id} className={s.friendTime}>
                {message.time}
            </div>
        </div>
    )
}

export default FriendMessage
