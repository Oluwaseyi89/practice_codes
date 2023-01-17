export default function ({ store, route }) {
    store.commit('ADD_VIEW', route.path)
}