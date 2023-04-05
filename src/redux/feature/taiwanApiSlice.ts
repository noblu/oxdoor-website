import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // api door
    getTaiwans: build.query({
      query: () => ({
        url: `taiwan/posts`,
        providesTags: (result: any) => result.posts,
      }),
    }),

    addNewTaiwan: build.mutation({
      query: (body: any) => ({
        url: "taiwan/post",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    getTaiwan: build.query({
      query: (id) => ({
        url: `taiwan/post/${id}`,
        providesTags: (result: any, error: any, id: any) => [
          { type: "Post", id },
        ],
      }),
    }),

    updateTaiwan: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `taiwan/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult: any = dispatch(
          // @ts-ignore
          apiSlice.util.updateQueryData("getPost", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),

    deleteTaiwan: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `taiwan/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Post", id }],
    }),
  }),
});

export const {
  useGetTaiwanQuery,
  useGetTaiwansQuery,
  useAddNewTaiwanMutation,
  // useUpdateDoorMutation,
  useDeleteTaiwanMutation,
} = extendedApiSlice;
