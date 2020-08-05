import React, { useState, useEffect } from 'react'
import { message, Tabs } from 'antd'
import { FileSearchOutlined, HeartOutlined } from '@ant-design/icons'
import { GiphyFetch } from '@giphy/js-fetch-api'
import TabSearch from './TabSearch'
import TabFavourites from './TabFavourites'
import './style.scss'
const { TabPane } = Tabs;
const gf = new GiphyFetch('G8ch5GGsouUrW7iTvg5loZ1bzgzSy7VR')
const Home = () => {
    const [loading, setLoading] = useState(false)
    const [keyword, setKeyword] = useState(null)
    const [offset, setOffset] = useState(0)
    const [gifs, setGifs] = useState([])
    const [favouriteGifs, setFavouriteGifs] = useState(() => {
        const _favouriteGifs =
            window.localStorage.getItem('favouriteGifs');
        return _favouriteGifs !== null
            ? JSON.parse(_favouriteGifs)
            : [];
    })
    const onSearch = () => {
        fetchMore(keyword, 0, [])
    }
    const fetchGifs = (keyword, offset) => gf.search(keyword, { sort: 'relevant', offset, limit: 8 })
    const fetchMore = async (keyword, offset, gifs) => {
        if (!keyword) {
            console.log('keyword is empty!')
            return
        }
        setLoading(true)
        try {
            const { data } = await fetchGifs(keyword, offset)
            setLoading(false)
            setGifs([...gifs, ...data])
            setOffset(offset + 8)
        } catch (error) {
            message.error(error.name + ': ' + error.message);
            setLoading(false)
        }
    }

    const like = gif => {
        let isFavourite = !!favouriteGifs.find(f => f.id === gif.id)
        if (isFavourite) {
            let nextFavouriteGifs = favouriteGifs.filter(f => f.id !== gif.id)
            setFavouriteGifs(nextFavouriteGifs)
        } else {
            setFavouriteGifs([...favouriteGifs, gif])
        }
    }
    useEffect(() => {
        localStorage.setItem('favouriteGifs', JSON.stringify(favouriteGifs))
    }, [favouriteGifs])

    return <Tabs defaultActiveKey="1">
        <TabPane tab={
            <span className="tab-item">
                <FileSearchOutlined style={{ marginRight: 0 }} />
                <span>Search</span>
            </span>
        } key="1">
            <TabSearch
                gifs={gifs}
                favouriteGifs={favouriteGifs}
                loading={loading}
                setKeyword={setKeyword}
                onSearch={onSearch}
                fetchMore={() => fetchMore(keyword, offset, gifs)}
                like={like} />
        </TabPane>
        <TabPane tab={
            <span className="tab-item">
                <HeartOutlined />
                <span>Favourites ({favouriteGifs.length})</span>
            </span>
        } key="2">
            <TabFavourites
                favouriteGifs={favouriteGifs}
                like={like} />
        </TabPane>
    </Tabs>
}

export default Home