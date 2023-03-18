import { Space, Table, Tag } from 'antd';
import { Button } from 'antd';


export const MyTable = (props) => {

  const deleteData=(id)=>{
    props.deleteData(id);
   // console.log(id);

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
          <a>Invite {record.name}</a>
          <Button type="primary" onClick={()=>deleteData(record.id)}>Delete</Button>
  
        </Space>
      ),
    },
  ];

return (
<Table columns={columns} dataSource={props.data} />
)




};
//export  MyTable;