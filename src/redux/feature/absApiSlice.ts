import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // api door
    getPosts: build.query({
      query: () => ({
        url: `abs/posts`,
        providesTags: (result: any) => result.posts,
      }),
    }),

    addNewPost: build.mutation({
      query: (body: any) => ({
        url: "abs/post",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    getPost: build.query({
      query: (id) => ({
        url: `abs/post/${id}`,
        providesTags: (result: any, error: any, id: any) => [
          { type: "Post", id },
        ],
      }),
    }),

    updateDoor: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `abs/${id}`,
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

    deleteDoor: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `abs/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Post", id }],
    }),
  }),
});

export const {
  useGetPostQuery,
  useGetPostsQuery,
  useAddNewPostMutation,
  // useUpdateDoorMutation,
  useDeleteDoorMutation,
} = extendedApiSlice;
