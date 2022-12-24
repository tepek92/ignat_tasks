import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'
import axios, {AxiosResponse} from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import {useSearchParams} from 'react-router-dom'
import SuperSort from './common/c10-SuperSort/SuperSort'
import {Loader} from "../hw10/Loader";

/*
* 1 - дописать SuperPagination
* 2 - дописать SuperSort
* 3 - проверить pureChange тестами
* 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW15 в HW5/pages/JuniorPlus
* */

type TechType = {
    id: number
    tech: string
    developer: string
}
type GetParamsType = { page: string, count: string, sort: string };

const getTechs = (params: GetParamsType) => {
    return axios
        .get<{ techs: TechType[], totalCount: number }>(
            `https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test3`,
            {params}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW15 = () => {
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(4)
    const [idLoading, setLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(100)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<TechType[]>([])

    const sendQuery = (params: GetParamsType) => {
        setLoading(true)
        getTechs(params)
            .then((res: AxiosResponse<{ techs: TechType[], totalCount: number }> | void) => {
                // делает студент
                // сохранить пришедшие данные
                if (res) {
                    setTechs(res.data.techs)
                    setTotalCount(res.data.totalCount)
                    setLoading(false)
                }
            })
    }

    const onChangePagination = (newPage: number, newCount: number) => {
        // делает студент
        setPage(newPage)
        setCount(newCount)

        sendQuery({page: newPage + '', count: newCount + '', sort});
        setSearchParams([['page', newPage + ''], ['count', newCount + '']])
    }

    const onChangeSort = (newSort: string) => {
        // делает студент
        setSort(newSort)
        setPage(1) // при сортировке сбрасывать на 1 страницу

        sendQuery({page: 1 + '', count: count + '', sort: newSort})
        setSearchParams([['page', 1 + ''], ['count', count + '']])
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery({page: params.page, count: params.count, sort})
        setPage(+params.page || 1)
        setCount(+params.count || 4)
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t.id} className={s.row}>
            <div id={'hw15-tech-' + t.id} className={s.tech}>
                {t.tech}
            </div>

            <div id={'hw15-developer-' + t.id} className={s.developer}>
                {t.developer}
            </div>
        </div>
    ))

    return (
        <div id={'hw15'}>
            <div className={s2.hwTitle}>Homework №15</div>
            <hr/>
            <div className={s2.hw + ' ' + s.container}>
                {idLoading &&
                    <div id={'hw15-loading'} className={s.loading}>
                        <Loader/>
                    </div>}

                <SuperPagination
                    page={page}
                    itemsCountForPage={count}
                    totalCount={totalCount}
                    onChange={onChangePagination}
                />

                <div className={s.rowHeader}>
                    <div className={s.techHeader}>
                        Tech
                        <SuperSort sort={sort} value={'tech'} onChange={onChangeSort}/>
                    </div>

                    <div className={s.developerHeader}>
                        Developer
                        <SuperSort sort={sort} value={'developer'} onChange={onChangeSort}/>
                    </div>
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

export default HW15
