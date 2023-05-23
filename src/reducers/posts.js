const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = initialState, action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return posts;
        default:
            return posts;
    }
};
