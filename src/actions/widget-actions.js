import widgetService from "../services/widget-service";

export const CREATE_WIDGET = "CREATE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC";
export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS";
export const FIND_WIDGET = "FIND_WIDGET";

export const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(actualWidgets => dispatch({
            type: FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: actualWidgets
        }))
};

export const createWidget = (dispatch, topicId) => {
    widgetService.createWidget(
        topicId,
        {
            type: "HEADING",
            size: 1,
            text: "New Widget",
            widgetOrdered: false
        })
        .then(theNewWidget => dispatch({
            type: CREATE_WIDGET,
            widget: theNewWidget
        }));
};

export const updateWidget = (dispatch, widget) => {
    widgetService.updateWidget(widget.id, widget)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            widget
        }));
};

export const deleteWidget = (dispatch, widget) => {
    widgetService.deleteWidget(widget.id)
        .then(status => dispatch({
            type: DELETE_WIDGET,
            widget
        }));
};

export const findWidgetById = (dispatch, widget) => {
    widgetService.findWidgetById(widget.id)
        .then(theWidget => dispatch({
            type: FIND_WIDGET,
            widget: theWidget
        }));
};

export const findAllWidgets = (dispatch) => {
    widgetService.findAllWidgets()
        .then(allWidgets => dispatch({
            type: FIND_ALL_WIDGETS,
            widgets: allWidgets
        }));
};

const widgetActions = {
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget,
    findWidgetById,
    findAllWidgets
};

export default widgetActions;