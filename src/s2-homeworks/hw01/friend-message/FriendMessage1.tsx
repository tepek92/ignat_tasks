import React from 'react'
import s from './FriendMessage1.module.css'
import {MessagePropsType} from "../message/Message";

// создать тип вместо any и отобразить приходящие данные
const FriendMessage1 = (props: MessagePropsType) => {
    const {id, user, message} = {...props.message};
    return (
        <div id={'hw1-friend-message-' + id} className={s.friendMessage}>

            <div className={s.friendText}>
                <div className={s.bubble}>
                    <div id={'hw1-name-' + props.message.id} className={s.friendName}>
                        {user.name}
                    </div>
                    <div id={'hw1-text-' + props.message.id} className={s.friendMessageText}>
                        {message.text}
                    </div>
                </div>
            </div>

            <div className={s.avatarAndTime}>
                <img alt='avatar' id={'hw1-friend-avatar-' + id} src={user.avatar}/>
                <div id={'hw1-friend-time-' + id} className={s.friendTime}>
                    {message.time}
                </div>
            </div>

        </div>
    )
}

export default FriendMessage1
