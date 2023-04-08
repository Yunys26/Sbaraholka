import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8099'}),
    endpoints: (build) => ({
        fetchAllProducts: build.query({
            query: () => ({
                url: '/api',
            })
        })
    })

})


export const { useFetchAllProductsQuery } = productsAPI