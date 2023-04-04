import { apiSlice } from "../api/apiSlice";
export interface Door {}
type PostsResponse = Door[];

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // api door
    getDoors: build.query<PostsResponse, void>({
      query: () => "abs/posts",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: "Post" as const, id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
    }),

    addDoor: build.mutation<Door, Partial<Door>>({
      query: (body: any) => ({
        url: "abs/post",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    getDoor: build.query<Door, string>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),

    // updateDoor: build.mutation<void, Pick<Door> & Partial<Door>>({
    //   query: ({ id, ...patch }) => ({
    //     url: `posts/${id}`,
    //     method: "PUT",
    //     body: patch,
    //   }),
    //   async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
    //     const patchResult = dispatch(
    //       apiSlice.util.updateQueryData("getDoor", id, (draft) => {
    //         Object.assign(draft, patch);
    //       })
    //     );
    //     try {
    //       await queryFulfilled;
    //     } catch {
    //       patchResult.undo();
    //     }
    //   },
    //   invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    // }),

    deleteDoor: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Post", id }],
    }),
  }),
});

export const {
  useGetDoorQuery,
  useGetDoorsQuery,
  useAddDoorMutation,
  // useUpdateDoorMutation,
  useDeleteDoorMutation,
} = extendedApiSlice;
