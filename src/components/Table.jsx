import { Space, Table, Tag } from 'antd';
import { Button ,Modal,Input} from 'antd';
import { useState } from 'react';


export const MyTable = (props) => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editState,setEditState]=useState({
    name:""

  })
  const showModal = (record) => {
    console.log(record);
    setEditState(record);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    props.editEmployee(editState);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const deleteData=(id)=>{
    props.deleteData(id);
   // console.log(id);

  }

  const handleChange=(event)=>{
    setEditState({...editState,[event.target.name]:event.target.value})

  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        

        <Space size="middle">
        <Button type="primary" onClick={()=>showModal(record)}>Edit</Button>

          <Button type="primary" onClick={()=>deleteData(record.id)}>Delete</Button>
  
        </Space>
      ),
    },
  ];

return (
  <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder="Name" value={editState.name} name="name" onChange={handleChange} />
      </Modal>

      <Table columns={columns} dataSource={props.data} />
  </>

)




};
//export  MyTable;