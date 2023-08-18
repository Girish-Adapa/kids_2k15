import React from 'react';
import { InstagramOutlined } from '@ant-design/icons';

const Instagram = () => {
    const profileUsername = 'girish_._._._'; // Replace with your Instagram profile username

    const instagramLink = `https://www.instagram.com/${profileUsername}`;

    return (
        <div>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <InstagramOutlined style={{ fontSize: '24px', color: '#E1306C', marginRight: '8px' }} />
            </a>
        </div>
    );
}

export default Instagram;
