import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
    endpoints: (build) => ({
        fetchAllProducts: build.query<void, void>({
            query: () => ({
                // TODO: URL для примера
                url: '/stands',
            })
        })
    })

})


export const { useFetchAllProductsQuery } = productsAPI