import React from 'react'
import { Button, Row, Col, Input, Spin } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import GifComponent from './GifComponent'
const { Search } = Input
const TabSearch = ({ setKeyword, onSearch, fetchMore, gifs, favouriteGifs, like, loading }) => {
    const renderGrid = () => {
        let result = []
        const length = gifs.length
        let count = 0
        let rowChilds = []
        for (let index = 0; index < length; index++) {
            const gif = gifs[index]
            const isActive = favouriteGifs && favouriteGifs.find(f => f.id === gif.id)
            rowChilds.push(
                <GifComponent key={index}
                    gif={gif}
                    isActive={!!isActive}
                    like={like} />)
            count++
            if (count === 4) {
                const row = <Row gutter={[8, 8]} justify='center' key={index}>
                    {rowChilds}
                </Row>
                result.push(row)
                count = 0
                rowChilds = []
            }
        }
        if (count > 0 && rowChilds.length !== 0) {
            const row = <Row gutter={[8, 8]} justify='center' key={length + 1}>
                {rowChilds}
            </Row>
            result.push(row)
            count = 0
            rowChilds = []
        }
        return result
    }
    return <>
        <Row style={{ marginBottom: 64 }}>
            <Col span={24}>
                <Search
                    placeholder="Start searching for images ..."
                    enterButton="Search"
                    size="large"
                    onChange={e => setKeyword(e.target.value)}
                    onSearch={onSearch}
                    onPressEnter={onSearch}
                />
            </Col>
        </Row>
        {renderGrid()}
        {loading && <Spin size="large" />}
        <Row style={{ marginTop: 64 }} justify="center">
            <Button type="primary"
                icon={<DownOutlined />}
                size='large'
                onClick={fetchMore}>
                <>Fetch more 123</>
            </Button>
        </Row>
    </>
}

export default TabSearch