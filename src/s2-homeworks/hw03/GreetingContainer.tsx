import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (
    name: string,
    setError: Dispatch<SetStateAction<string>>,
    setName: Dispatch<SetStateAction<string>>,
    addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут

    if (name === '' || name[0] === ' ') {
        setError('Ошибка! Введите имя!');
        setName(name);
    } else {
        addUserCallback(name);
        setName('');
        setError('');
    }
}

export const pureOnBlur = (name: string, setError: Dispatch<SetStateAction<string>>) => {
    // если имя пустое - показать ошибку
    if (name === '' || name[0] === ' ') {
        setError('Ошибка! Введите имя!');
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: (name: string) => void) => {
        // если нажата кнопка Enter - добавить
    const name = e.currentTarget === undefined ? '' : e.currentTarget.value;
    if (e.key === 'Enter') addUser(name);
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    // деструктуризация пропсов

    const [name, setName] = useState<string>(''); // need to fix any
    const [error, setError] = useState<string>(''); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value); // need to fix
        error && setError('');
    };

    const addUser = () => pureAddUser(name, setError, setName, addUserCallback);
    const onBlur = () => pureOnBlur(name, setError);
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => pureOnEnter(e, addUser);

    const totalUsers = users.length; // need to fix
    const lastUserName = totalUsers ? users[totalUsers - 1].name : ''; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    );
}

export default GreetingContainer
