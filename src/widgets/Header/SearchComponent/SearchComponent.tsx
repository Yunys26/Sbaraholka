import React from 'react';
import {Input, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const SearchComponent = (props) => {
    return (
        <Input
            placeholder={"поиск"}
            sx={{m: 1, width: '470px'}}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon/>
                </InputAdornment>}
        ></Input>
    );
}
