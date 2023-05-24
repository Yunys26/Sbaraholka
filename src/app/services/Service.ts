import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

export const sbaraholkaAPI = createApi({
    reducerPath: 'sbaraholkaAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'api'}),
    endpoints: (build) => ({
        fetchAllProducts: build.query({
            query: () => ({
                url: 'catalogue',
            })
        }),
        getAuth: build.query({
            query: () => ({
                url: 'auth',
                method: "POST",
            })
        })
    })

})


export const { useFetchAllProductsQuery, useGetAuthQuery } = sbaraholkaAPI