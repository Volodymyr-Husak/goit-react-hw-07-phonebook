export const Example = () => {
  const tasksSlice = {
    name: 'tasks',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    reducers: {
      fetchingInProgress(state) {
        console.log(state);
        state.isLoading = true;
      },
      fetchingSuccess(state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      fetchingError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  };

  console.log(tasksSlice.action);
  return <div>Example</div>;
};
