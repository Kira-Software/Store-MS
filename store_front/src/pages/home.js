import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loaduser } from "../Redux/Action/auth";
import { getRecord, approveRecord } from "../Redux/Action/record";

const Home = () => {

  const dispatch = useDispatch();
  const record = useSelector((state) => state.record.record);
  const [tabledata, setTabledata] = useState([]);

  const handleApprove = (id) => {
    console.log("approve button is clicked");
    console.log("the id is ", id);
    dispatch(approveRecord(id));
  };
  const columns = [
    {
      title: "Item_Name",
      dataIndex: "itemName",
      key: "item_Name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Total_Sale",
      dataIndex: "totalSale",
      key: "total_Sale",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>
            <Tag color="geekblue" onClick={() => handleApprove(record._id)}>
              Approve
            </Tag>{" "}
          </a>
          
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getRecord());
    // dispatch(loaduser());
  }, []);
  console.log("table data is ", tabledata);
  return (
    <div>
      <div
        style={{
          height: "100px",
          width: "100%",
          backgroundColor: "#417b27",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "30px",
            marginLeft: "20%",
            paddingTop: "20px",
          }}
        >
          Store Management System
        </h1>
      </div>

      <Table columns={columns} dataSource={record} />
    </div>
  );
};

export default Home;
