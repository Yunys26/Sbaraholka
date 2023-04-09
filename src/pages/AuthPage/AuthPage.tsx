import React from 'react';
import { Container, TextField, Box, Typography } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useGetAuthQuery } from '../../app/services/Service';
import { useNavigate } from 'react-router-dom';

export const AuthPage = () => {
    const { data } = useGetAuthQuery();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
    };

    return (
        <Container maxWidth='sm'>
            <Box
                sx={{
                    width: 400,
                    maxWidth: '100%',
                    margin: '0 auto',
                    marginTop: '10rem',
                }}
            >
                <Typography variant='h4'>Вход</Typography>
                <div>
                    <TextField
                        id='outlined-basic'
                        variant='outlined'
                        margin='dense'
                        fullWidth
                        helperText='Логин'
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id='outlined-basic'
                        variant='outlined'
                        margin='dense'
                        fullWidth
                        helperText='Пароль'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <Button variant='contained' size='large' onClick={handleClick}>
                        Войти
                    </Button>
                </div>
            </Box>
        </Container>
    );
};
