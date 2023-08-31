import React, { useState } from "react";
import { Form, Input, Button, Select, Radio } from "antd";

export default function LinkForm() {
  const config = [
    {
      label: "姓名",
      key: "name",
      type: "input",
    },
    {
      label: "是否需要人",
      key: "isNeed",
      type: "select",
      options: [
        {
          label: "是",
          value: 1,
        },
        {
          label: "否",
          value: 0,
        },
      ],
      effectKeys: ["needName"],
    },
    {
      label: "需要人姓名",
      key: "needName",
      type: "input",
      relationKeys: "isNeed",
    },
  ];
  const effectKeys = ["needName"];
  const [formData, setFormData] = useState<object>({
    name: "",
    isNeed: "",
    needName: "",
  });
  const onValuesChange = (value: any, values: any) => {
    setFormData(values);
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <Form onValuesChange={onValuesChange} onFinish={onFinish}>
        {config.map((item, index) => {
          const isRelation = effectKeys.includes(item.key);
          const relationKey = item.relationKeys || "";
          const disabled = relationKey ? formData[relationKey] : false;
          console.log(isRelation && disabled == "0");
          return (
            <Form.Item label={item.label} key={index} name={item.key}>
              {item.type === "input" ? <Input disabled={isRelation && disabled == "0"} /> : null}
              {item.type === "select" ? (
                <Select options={item.options} disabled={isRelation && disabled == "0"} />
              ) : null}
            </Form.Item>
          );
        })}
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
