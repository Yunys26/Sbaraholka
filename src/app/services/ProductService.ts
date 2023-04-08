import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'api'}),
    endpoints: (build) => ({
        fetchAllProducts: build.query({
            query: () => ({
                url: 'catalogue',
            })
        })
    })

})


export const { useFetchAllProductsQuery } = productsAPI