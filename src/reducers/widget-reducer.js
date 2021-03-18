const initialState = {
    widgets: []
};

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_ALL_WIDGET_FOR_TOPIC':
            return {
                ...state,
                widgets: action.widgets
            };
        case 'CREATE_WIDGET':
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            };
        case 'DELETE_WIDGET':
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if (widget._id === action.widget._id) {
                        return false;
                    } else {
                        return true;
                    }
                })
            };
        case 'UPDATE_WIDGET':
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if (widget._id === action.widget._id) {
                        return action.widget;
                    } else {
                        return widget;
                    }
                })
            };
        case 'FIND_ALL_WIDGETS':
            return {

            };
        case 'FIND_WIDGET':
            return {

            };
    }
}

export default widgetReducer;