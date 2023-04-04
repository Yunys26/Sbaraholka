import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://angelinacp.github.io'}),
    endpoints: (build) => ({
        fetchAllProducts: build.query({
            query: () => ({
                url: 'mock.json',
            })
        })
    })

})


export const { useFetchAllProductsQuery } = productsAPI