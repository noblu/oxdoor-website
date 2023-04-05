import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // api door
    getDewoos: build.query({
      query: () => ({
        url: `dewoo/posts`,
        providesTags: (result: any) => result.posts,
      }),
    }),

    addNewDewoo: build.mutation({
      query: (body: any) => ({
        url: "dewoo/post",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    getDewoo: build.query({
      query: (id) => ({
        url: `dewoo/post/${id}`,
        providesTags: (result: any, error: any, id: any) => [
          { type: "Post", id },
        ],
      }),
    }),

    updateDewoo: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `dewoo/${id}`,
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

    deleteDewoo: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `dewoo/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Post", id }],
    }),
  }),
});

export const {
  useGetDewooQuery,
  useGetDewoosQuery,
  useAddNewDewooMutation,
  // useUpdateDoorMutation,
  useDeleteDewooMutation,
} = extendedApiSlice;
