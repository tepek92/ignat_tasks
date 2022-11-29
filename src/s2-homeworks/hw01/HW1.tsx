import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import s from './HW1.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import Message1 from "./message/Message1";
import FriendMessage1 from "./friend-message/FriendMessage1";

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
type UserType = {
    avatar: string
    name: string
}
type MessageDataType = {
    text: string
    time: string
}
export type MessageType = {
    id: number
    user: UserType
    message: MessageDataType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg', // можно менять
        name: ' Pavel',  // можно менять
    },
    message: {
        text: 'Hello, how are you, what did you do yesterday?', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg', // можно менять
        name: 'Ignat', // можно менять
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?', // можно менять
        time: '22:05', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework №1</div>
            <hr/>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div className={s2.hw_body}>
                    <div className={s.hw1}>
                        <Message1 message={message0}/>
                        <FriendMessage1 message={friendMessage0}/>
                    </div>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message1}/>
            </div>
        </div>
    )
}

export default HW1
