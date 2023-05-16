import React from "react";
import {useFetchAllProductsQuery} from "../../app/services/ProductService";
import {CardItem, ICardItem} from "../../widgets/CardItem/Carditem";
import {Box, Paper, Stack} from "@mui/material";

export const MainPage = () => {

    // @ts-ignore
    const {data}: ICardItem =  useFetchAllProductsQuery()
    console.log(data)
    return (
        <>
            <Stack direction="row">
                <Paper elevation={3}>
                    {/*Профиль {data?.user_id}*/}
                    {/* {data?.user_name}*/}
                </Paper>

            </Stack>

            <h1>Main</h1>
            <Stack>
                {data?.map((item, index) => {
                    return (
                        <CardItem key={index} {...item}/>
                    )
                })}
            </Stack>

        </>
    )
}