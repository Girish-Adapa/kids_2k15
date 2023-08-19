/* FormPage.js */
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import WhatsApp from './WhatsApp';
import Instagram from './Instagram';
import './FormPage.css';

// import pic1 from './images/IMG_20230127_211815.jpg'
// import pic2 from './images/IMG_20230127_212733.jpg'
// import pic3 from './images/IMG_20230323_150830.jpg'
// import pic4 from './images/IMG_20230323_150837.jpg'
// import pic5 from './images/IMG_20230323_182035.jpg'
// import pic6 from './images/DSC_0758.jpg'
// import pic7 from './images/DSC_0903.jpg'
// import pic8 from './images/IMG_0313.jpg'
// import pic9 from './images/IMG_0339.jpg'

const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  // const imageSources = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9]; // Add more images as needed


  const phoneNumber = '9440987902';
  const bold = (text) => `*${text}*`;
  const messageText = encodeURIComponent(`Hello Girish...!\n \n \n This is ${bold(name)}\n Email : ${email}\n Ph Num : ${bold(number)}`);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${messageText}`;

  const onFinish = (values) => {
    if (!name || !email || !number) {
      message.error('Please fill out all fields');
    } else if (number.length !== 10) {
      message.error('Please enter 10-digit number')
    } else {
      window.open(whatsappLink, '_blank')
    }
  };

  return (
    <>
      <div className="center-container">
        <div className="form-container">
          <h2 className="form-title">SSC 2K15 REUNION</h2>
          <Form
            name="data-collection-form"
            onFinish={onFinish}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item
              label="Full Name"
              name="name"
            >
              <Input
                type="text"
                placeholder='Enter your Full Name'
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input
                placeholder='Enter your Email'
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </Form.Item>

            <Form.Item
              label="Contact Number"
              name="number"
              rules={[
                {
                  pattern: /^[0-9]*$/,
                  message: 'Please enter a valid number',
                },
              ]}
            >
              <Input
                placeholder='Enter your WhatsApp Number'
                onChange={(e) => setNumber(e.target.value)}
                className="input-field"
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button className="submit-button" type='primary' htmlType='submit'>
                <WhatsAppOutlined /> Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="footer-container">
        <div className='row'>
          <WhatsApp className="footer-icon" />
          <Instagram className="footer-icon" />
        </div>
      </div>
    </>
  );
};

export default FormPage;
