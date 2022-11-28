import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                margin: '0 22px 0 0',
                color: '#00CC22',
                height: 4,
                width: 150,
                '& .MuiSlider-thumb': {
                    // 0 variant
                    height: 18,
                    width: 18,
                    backgroundColor: 'white',
                    border: '1px solid #00CC22'

                    // 1 variant
                    // height: 10,
                    // width: 10,
                    // backgroundColor: '#00CC22',
                    // boxShadow: '0 0 0 5px #fff, 0 0 0 7px #00CC22',

                    // 2 variant
                    // height: 18,
                    // width: 18,
                    // border: "solid 5px white",
                    // outline: "solid 2px #00CC22",

            },
                // 3 variant
                '& .MuiSlider-thumb:after': { width: '6px', height: '6px', top: '50%', left: '50%', backgroundColor: '#00CC22'},
                '& .MuiSlider-rail': {
                    backgroundColor: 'black',
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange