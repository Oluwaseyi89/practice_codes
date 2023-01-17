export const state = () => ({
    views: new Map()
});

export const getters = {
    getViews (state) {
        return (path) => {
            let count = 0;
            if(state.views.get(path) !== undefined) {
                count = state.views.get(path);
            }
            return count;
        }
    }
}

export const mutations = {
    ADD_VIEW (state, path) {
        let count = 1;
        if(state.views.get(path) !== undefined) {
            count = state.views.get(path) + 1;
        }
        state.views.set(path, count);
    } 
}