 import React, { useEffect, useState } from "react";
 import { Space, Table, Tag } from "antd";
import { Image } from "antd";
 import axios from "axios";
 const columns = [
   {
     title: "Id",
     dataIndex: "id",
     key: "id",
     render: (text) => <a>{text}</a>,
   },
   {
     title: "Title",
     dataIndex: "title",
     key: "title",
   },
   {
     title: "Category",
     dataIndex: "category",
     key: "category",
   },
   {
     title: "Images",
     dataIndex: "files",
     key: "files",
     render: (files) => {  
       return files.split(",").map((ele) => (
         <img height={"50px"} width={"50px"} src={ele} />
       ));
     },
   },

   {
     title: "Action",
     key: "action",
     render: (_, record) => (
       <Space size="middle">
         <a>Invite {record.name}</a>
         <a>Delete</a>
       </Space>
     ),
   },
 ];

 const Listing = () => {
   const [data, setData] = useState([]);
 
   useEffect(() => {
    axios.get("http://rustycoder.live:8000/listing").then((result)=>{
 console.log(result.data.data);

 setData(result.data.data);
    });
     /*fetch("http://rustycoder.live:8000/listing")
       .then((response) => response.json())
       .then((result) => {
         console.log(result.data);
           
         setData(result.data );
    
       });*/
   }, []);
    

   return (
     
        
       <Table columns={columns} dataSource={data} />
   
   );
 };

 export default Listing;