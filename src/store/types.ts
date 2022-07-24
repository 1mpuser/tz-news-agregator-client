import { MutationTree } from "vuex"
export const state = {
    isAuth: false,
    username : ''
}
export type State = typeof state

export enum MutationTypes {
    LOG_IN = 'LOG_IN',
    LOG_OUT = 'LOG_OUT', 
    SET_USERNAME  = 'SET_USERNAME'
}

export type Mutations<S = State> = {
    [MutationTypes.LOG_IN](state: S): void,
    [MutationTypes.SET_USERNAME](state : S, payload : string) : void,
    [MutationTypes.LOG_OUT] (state : S) : void
}



export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.LOG_OUT](state) {
        state.isAuth = false,
        state.username = ''
    },
    [MutationTypes.LOG_IN](state) {
        state.isAuth = true
    },
    [MutationTypes.SET_USERNAME](state, payload: string) {
        state.username = payload
    }
}