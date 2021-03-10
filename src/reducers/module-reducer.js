const initialState = {
    modules: []
}

const moduleReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case 'FIND_MODULES_FOR_COURSE':
            return {
                ...state,
                modules: action.modules
            };
        case 'CREATE_MODULE':
            newState = {
                modules: [
                    ...state.modules,
                    action.module
                ]
            };
            return newState;
        case 'DELETE_MODULE':
            // alert("delete the module " + action.moduleToDelete.title)
            newState = {
                modules: state.modules.filter(module => {
                    if (module._id === action.moduleToDelete._id) {
                        return false;
                    } else {
                        return true;
                    }
                })
            };
            return newState;
        case 'UPDATE_MODULE':
            return {
                modules: state.modules.map(m => {
                    if (m._id === action.module._id) {
                        return action.module;
                    } else {
                        return m;
                    }
                })
            };
        default:
            return state;
    }
}

export default moduleReducer;