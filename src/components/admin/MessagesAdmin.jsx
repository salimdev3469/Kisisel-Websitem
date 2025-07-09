import React, { useEffect, useState } from 'react';
import API from '../../services/api';
import { Box, Typography } from '@mui/material';

export default function MessagesAdmin() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = () => {
        API.get('/messages')
            .then(res => setMessages(res.data))
            .catch(err => console.error(err));
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>Mesajlar</Typography>

            {messages.map(m => (
                <Box key={m._id} sx={{ border: '1px solid #ccc', p: 2, mb: 2 }}>
                    <Typography variant="h6">{m.name}</Typography>
                    <Typography>{m.email}</Typography>
                    <Typography>{m.message}</Typography>
                    <Typography color="text.secondary">{new Date(m.createdAt).toLocaleString()}</Typography>
                </Box>
            ))}
        </Box>
    );
}
