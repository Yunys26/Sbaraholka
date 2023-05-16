import React, { useState, useEffect } from 'react';
import { CardMedia, Paper, Stack} from "@mui/material";

export interface IPhotoItem {
    id: number
    url: string
}

export enum StatusCard {
    "active",
    "inactive"
}

export interface ICardItem {
    city: string
    date :string
    id: number
    name: string
    photos: IPhotoItem []
    price: number
    status: StatusCard
}

export const CardItem = (data) =>{
    const [isLoaded, setIsLoaded] = useState(false);

    if (!data || !data.photos || !data.photos[0]?.url) {
        return null;
    }
    const { url } = data.photos[0].url;
    return (

    <Paper sx={{
        width: 300,
        height: 400
    }}>
        <Stack direction="row">
            <CardMedia
                component="img"
                height="194"
                image={url}
                alt={data.name}
            />
        </Stack>
    </Paper>
    );
}