import {
    CREATE_WIDGET,
    UPDATE_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS_FOR_TOPIC,
    FIND_ALL_WIDGETS,
    FIND_WIDGET
} from "../actions/widget-actions";

const initialState = {
    widgets: []
};

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            };
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            };
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if (widget.id === action.widget.id) {
                        return false;
                    } else {
                        return true;
                    }
                })
            };
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.widget.id) {
                        return action.widget;
                    } else {
                        return widget;
                    }
                })
            };
        case FIND_ALL_WIDGETS:
            return {
                ...state,
                widgets: action.widgets
            };
        case FIND_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if (widget.id === action.widget.id) {
                        return true;
                    } else {
                        return false;
                    }
                })
            };
        default:
            return state;
    }
}

export default widgetReducer;