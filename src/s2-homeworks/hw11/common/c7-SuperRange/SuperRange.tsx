import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                margin: '0 20px',
                color: '#00CC22',
                height: 4,
                width: 150,
                '& .MuiSlider-thumb': {
                    backgroundColor: 'white',
                    border: '2px solid'
                },
                '& .MuiSlider-rail': {
                    backgroundColor: 'black',
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
