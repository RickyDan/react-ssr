import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Input, Upload, message, Icon, Select } from 'antd'
import '../assets/styles/prod.less'

const Option = Select.Option
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
  render: (img) => <span className="prod-img"><img src={img} alt="" /></span>
}, {
  title: '类别',
  dataIndex: 'category',
  key: 'category'
}, {
  title: '厂家',
  dataIndex: 'supplier',
  key: 'supplier'
}, {
  title: '创建时间',
  dataIndex: 'createdAt',
  key: 'createdAt'
}]

const Prod = (props) => {
  const { prods, fetchProd, addProd } = props
  const [query, setQuery] = useState({
    page: 1,
    pageSize: 10,
    supplier: '',
    category: ''
  })
  const [params, setParams] = useState({
    visible: false,
    prodImg: '',
  })
  useEffect(() => {
    fetchProd(query)
  }, [query])
  function createProd () {
    addProd({...params})
    setParams({...params, visible: false})
  }

  function uploadChange (info) {
    if (info.file.status === 'done') {
      setParams({...params, prodImg: info.file.response.filename})
      message.success(`${info.file.name}`)
    }
  }

  return (
    <div>
      <Button icon="plus" onClick={() => setParams({...params, visible: true})}>新增</Button>
      <Select
        allowClear={true}
        onChange={(value) => setQuery({ ...query, category: value })}
        style={{ width: 120 }}>
        <Option value="Mobile">手机</Option>
        <Option value="Notebook">笔记本</Option>
        <Option value="Pad">平板</Option>
      </Select>
      <Modal
        title="商品上架"
        visible={params.visible}
        onOk={createProd}
        onCancel={() => setParams({...params, visible: false})}
      >
        <div>
          <span>商品名: <Input
            onChange={(e) => setParams({...params, prodname: e.target.value})}
            value={params.prodname}
            placeholder="请输入商品名" allowClear />
          </span>
          <span>价格: <Input
            onChange={(e) => setParams({...params, price: e.target.value})}
            value={params.price}
            placeholder="请输入价格"
            allowClear /></span>
          <span>库存: <Input
            onChange={(e) => setParams({...params, count: e.target.value})}
            value={params.count}
            placeholder="请输入库存"
            allowClear /></span>
          <span>厂商: 
            <Select onChange={(value) => setParams({...params, supplier: value})} style={{ width: 120 }}>
              <Option value="HuaWei">华为</Option>
              <Option value="Xiaomi">小米</Option>
              <Option value="iPhone">苹果</Option>
            </Select>
          </span>
          <span>类别:
            <Select onChange={(value) => setParams({...params, category: value})} style={{ width: 120 }}>
              <Option value="Mobile">手机</Option>
              <Option value="Notebook">笔记本</Option>
              <Option value="Pad">平板</Option>
            </Select>
          </span>
          <span>商品图片: </span>
            <Upload name="file" action="http://localhost:8000/upload/" onChange={uploadChange}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
        </div>
      </Modal>
      <Table
        dataSource={prods}
        columns={columns}
        rowKey="id"
        bordered
        pagination={{
          total: prods.length,
          current: params.current,
          showSizeChange: true,
          pageSize: params.pageSize,
          onChange: (page) => setQuery({...query, page: page})
        }}
        />
    </div>
  )
}
export default Prod
