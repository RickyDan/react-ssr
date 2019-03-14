import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Input, Upload, message, Icon } from 'antd'

const columns = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id'
}, {
  title: '商品名',
  dataIndex: 'prodname',
  key: 'prodname'
}, {
  title: '价格',
  dataIndex: 'price',
  key: 'price'
}, {
  title: '库存',
  dataIndex: 'count',
  key: 'count'
}, {
  title: '商品图片',
  dataIndex: 'prodImg',
  key: 'prodImg',
  render: (img) => <img src={img} width="30" alt="" />
}, {
  title: '创建时间',
  dataIndex: 'createdAt',
  key: 'createdAt'
}]
const Prod = (props) => {
  const { prods, fetchProd, addProd } = props
  const [visible, setVisible] = useState(false)
  const [prodname, setProdName] = useState('')
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(0)
  const [prodImg, setProdImg] = useState('')
  useEffect(() => {
    fetchProd()
  }, [])
  function createProd () {
    addProd({prodname, price, count, prodImg})
    setVisible(false)
  }

  function uploadChange (info) {
    if (info.file.status === 'done') {
      setProdImg(info.file.response.filename)
      message.success(`${info.file.name}`)
    }
  }
  return (
    <div>
      <Button icon="plus" onClick={() => setVisible(true)}>新增</Button>
      <Modal
        title="商品上架"
        visible={visible}
        onOk={createProd}
        onCancel={() => setVisible(false)}
      >
        <div>
          <span>商品名: <Input
            onChange={(e) => setProdName(e.target.value)}
            value={prodname}
            placeholder="请输入商品名" allowClear />
          </span>
          <span>价格: <Input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="请输入价格"
            allowClear /></span>
          <span>库存: <Input
            onChange={(e) => setCount(e.target.value)}
            value={count}
            placeholder="请输入库存"
            allowClear /></span>
          <span>商品图片: </span>
            <Upload name="file" action="http://localhost:8000/upload/" onChange={uploadChange}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
        </div>
      </Modal>
      <Table dataSource={prods} columns={columns} rowKey="id" bordered />
    </div>
  )
}
export default Prod
