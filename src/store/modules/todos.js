const state = {
    todos: [
        {
            title: "Vuex1 title",
            body: "Vuex1 title",
            userId: 1,
            id: 1,
        },
        {
            title: "Vuex1 title",
            body: "Vuex1 title",
            userId: 1,
            id: 2,
        }
    ]
};

const getters = {
    allTodos: (state) => state.todos,
};

const actions = {};

const mutations = {};

export default {
    state,
    actions,
    mutations,
    getters,
};