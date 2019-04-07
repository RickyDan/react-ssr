import React from 'react'
import {
  Chart,
  Geom,
  Coord,
  Label
} from 'bizcharts'
import DataSet from '@antv/data-set'

const { DataView } = DataSet
const data = [
  {
    item: "宝安区",
    count: 30,
    key: 1
  },
  {
    item: "南山区",
    count: 10,
    key: 2,
  },
  {
    item: "福田区",
    count: 10,
    key: 3
  },
  {
    item: "罗湖区",
    count: 15,
    key: 4
  },
  {
    item: "龙华区",
    count: 20,
    key: 5
  }, {
    item: "龙岗区",
    count: 15,
    key: 6
  }
]
const dv = new DataView()
dv.source(data).transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
})
const cols = {
  percent: {
    formatter: val => {
      val = val * 100 + "%";
      return val
    }
  }
}

const LabelLine = () => {
  return (
    <div>
      <Chart
        height={350}
        data={dv}
        scale={cols}
        padding={[80, 100, 80, 80]}
      >
        <Coord type="theta" radius={0.75} />
        <Geom
          type="intervalStack"
          position="percent"
          color="item"
          tooltip={[
            "item*percent",
            (item, percent) => {
              percent = percent * 100 + "%";
              return {
                name: item,
                value: percent
              };
            }
          ]}
          style={{
            lineWidth: 1,
            stroke: "#fff"
          }}
        >
          <Label
            content="percent"
            formatter={(val, item) => {
              return item.point.item + ": " + val;
            }}
          />
        </Geom>
      </Chart>
    </div>
  )
}
export default LabelLine
