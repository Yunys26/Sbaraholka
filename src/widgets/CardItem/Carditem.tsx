import React, {useState, useEffect} from 'react';
import {Box, CardMedia, Paper, Stack} from "@mui/material";
import {mockCards} from "../../../stubs/templates/mock_main";
import './CardItem.scss'
import image from "../../shared/assets/image1.png"
const data = mockCards.data[0]
// todo что сделать со стилями
export const CardItem = () => {
    const {
        user_id,
        user_name,
        id,
        name,
        price,
        city,
        date,
        status,
        photos,
    } = data

    console.log(photos)
    return (
        <Paper sx={{
            display: "flex",
            width: 300,
            height: 400,
            background: "#fff",
            borderRadius: "8px",
            borderBottom: "2px solid #81C55F",
            boxShadows: "0px 8px 16px rgba(38, 38, 0.16), 0px 1px 0px rgba(38, 38, 38, 0.04"
        }}>
            <Stack sx={{
                justifyContent: "space-between",
                flexDirection: "column"
            }}>
                {/*//todo перенести в SliderCard*/}
                <Box>
                <CardMedia
                    component="img"
                    height="277"
                    width = "300"
                    src={image}
                />
                    <Box className={"SlideButtonWrapper"}>
                        <Box className={"SlideButtonActive"}></Box>
                        <Box className={"SlideButton"}></Box>
                        <Box className={"SlideButton"}></Box>
                    </Box>
                </Box>

                <Box sx={{
                    justifyContent: "space-between",
                    flexDirection: "column",
                    padding:"8px 16px"
                }}>
                    <Box className={"name"}>{name}</Box>
                    <Box className={"price"}>{price} Руб</Box>
                    <Box className={"city"}>{city}</Box>
                    <Box className={"date"}>{date}</Box>
                </Box>
            </Stack>
        </Paper>
    );
}