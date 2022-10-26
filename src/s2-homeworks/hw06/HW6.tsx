import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import { restoreState, saveState } from './localStorage/localStorage'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW6.module.css'

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {

    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('hw6-editable-span-value', value)
    }
    const restore = () => {
        // делают студенты
        const newValue = restoreState<string>('hw6-editable-span-value', value);
        if (newValue !== null) setValue(newValue);

    }

    return (
        <div id={'hw6'} >
            <div className={s2.hwTitle}>Homework №6</div>
            <hr />

            {/*демонстрация возможностей компоненты:*/}
            <div className={s2.hw + ' ' + s.hw6}>
                <div className={s.editableSpanContainer}>
                    <SuperEditableSpan
                        id={'hw6-spanable-input'}
                        value={value}
                        onChangeText={setValue}
                        spanProps={{
                            id: 'hw6-editable-span',
                            defaultText: 'Edit text...',
                        }}
                    />
                </div>

                <div className={s.buttonsContainer}>
                    <span>
                    <SuperButton id={'hw6-save'} onClick={save}>
                        Save to is
                    </SuperButton>
                    </span>
                    <SuperButton
                        id={'hw6-restore'}
                        onClick={restore}
                        xType={'secondary'}
                    >
                        Get from is
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}

export default HW6
