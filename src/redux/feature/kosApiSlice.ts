import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // api door
    getKoss: build.query({
      query: () => ({
        url: `kos/posts`,
        providesTags: (result: any) => result.posts,
      }),
    }),

    addNewKos: build.mutation({
      query: (body: any) => ({
        url: "kos/post",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    getKos: build.query({
      query: (id) => ({
        url: `kos/post/${id}`,
        providesTags: (result: any, error: any, id: any) => [
          { type: "Post", id },
        ],
      }),
    }),

    updateKos: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `kos/${id}`,
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

    deleteKos: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `kos/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Post", id }],
    }),
  }),
});

export const {
  useGetKosQuery,
  useGetKossQuery,
  useAddNewKosMutation,
  // useUpdateDoorMutation,
  useDeleteKosMutation,
} = extendedApiSlice;
