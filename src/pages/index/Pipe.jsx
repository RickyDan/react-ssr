import {
  Chart,
  Tooltip,
  Axis,
  Legend,
  Coord,
  Pie
} from 'viser-react'
import * as React from 'react'
const DataSet = require('@antv/data-set')

const sourceData = [
  {
    item: '已建档',
    count: 57
  }, {
    item: '未建档',
    count: 43
  }
]

const scale = [
  {
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }
]

const dv = new DataSet
  .View()
  .source(sourceData)
dv.transform({type: 'percent', field: 'count', dimension: 'item', as: 'percent'})
const data = dv.rows

const BasePie = () => {
  return (
    <Chart height={300} data={data} scale={scale}>
      <Tooltip showTitla={false} />
      <Axis />
      <Legend dataKey="item" />
      <Coord type="theta" radius={0.75} innerRadius={0.6} />
      <Pie
        position="percent"
        color="item"
        style={{
          stroke: '#fff',
          lineWidth: 1,
          textAlign: 'center',
        }}
        label={[
          'percent', {
            formatter: (val, item) => {
              return item.point.item + ': ' + val
            }
          }
        ]}/>
    </Chart>
  )
}
export default BasePie
