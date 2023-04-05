import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // api door
    getSbss: build.query({
      query: () => ({
        url: `sbs/posts`,
        providesTags: (result: any) => result.posts,
      }),
    }),

    addNewSbs: build.mutation({
      query: (body: any) => ({
        url: "sbs/post",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    getSbs: build.query({
      query: (id) => ({
        url: `sbs/post/${id}`,
        providesTags: (result: any, error: any, id: any) => [
          { type: "Post", id },
        ],
      }),
    }),

    updateSbs: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `sbs/${id}`,
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

    deleteSbs: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `sbs/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Post", id }],
    }),
  }),
});

export const {
  useGetSbsQuery,
  useGetSbssQuery,
  useAddNewSbsMutation,
  // useUpdateDoorMutation,
  useDeleteSbsMutation,
} = extendedApiSlice;
