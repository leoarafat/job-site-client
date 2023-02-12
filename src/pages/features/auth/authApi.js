
import { onAuthStateChanged } from "firebase/auth";
import apiSlice from "../api/apiSlice";
import { getUser } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/user",
        body: data,
      }),
      async onAuthStateChanged(data, { dispatch, queryFulFiled }) {
        try {
          const res = await queryFulFiled;
          dispatch(getUser(data?.email));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useRegisterMutation } = authApi;
