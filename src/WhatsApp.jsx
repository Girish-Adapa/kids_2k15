import React from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';

const WhatsApp = () => {
  const phoneNumber = '9440987902'; // Replace with the desired phone number
  const message = encodeURIComponent('Hello Girish...!'); // Replace with your message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <WhatsAppOutlined style={{ fontSize: '24px', color: 'green', marginRight: '8px' }} />
      </a>
    </div>
  );
}

export default WhatsApp;
