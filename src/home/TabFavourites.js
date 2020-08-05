import React from 'react'
import { Row } from 'antd'
import GifComponent from './GifComponent'
const TabFavourites = ({ favouriteGifs, like }) => {
    const renderGrid = () => {
        let result = []
        const length = favouriteGifs.length
        let count = 0
        let rowChilds = []
        for (let index = 0; index < length; index++) {
            const gif = favouriteGifs[index]
            rowChilds.push(
                <GifComponent key={index}
                    gif={gif}
                    isActive
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
        {renderGrid()}
    </>
}

export default TabFavourites