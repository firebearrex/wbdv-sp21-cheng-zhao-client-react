import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import widgetService from "../../services/widget-service";
import widgetActions from "../../actions/widget-actions";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const WidgetList = (
    {
        myWidgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic
    }) => {

    const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams();
    const [editingWidgets, setEditingWidgets] = useState([]);

    useEffect(() => {
        console.log(`Loading Widgets for Topic: ${topicId}`);
        if (typeof topicId !== "undefined" && topicId !== "undefined") {
            findWidgetsForTopic(topicId);
        }
    }, [courseId, moduleId, lessonId, topicId]);

    const isEditingWidget = (editingWidgets, widget) => {
        editingWidgets.map(editingWidget => {
            if (editingWidget.id === widget.id) {
                return true;
            }
        });
        return false;
    }

    const thisEditingWidget = (editingWidgets, widgetId) => {
        editingWidgets.map(editingWidget => {
            if (editingWidget.id === widgetId) {
                return editingWidget;
            }
        })
    }

    return (
        <div className={"row mt-3 mr-3 ml-1"}>
            <div className={"list-group col-11"}>
                {
                    myWidgets.map(widget => {
                            let editing = isEditingWidget(editingWidgets, widget);
                            return (
                                <a
                                    className={"list-group-item list-group-item-action row"}
                                    key={widget.id}>
                                    {
                                        widget.type === 'HEADING' &&
                                        <HeadingWidget
                                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                            editing={editing}
                                            widget={widget}
                                            updateWidget={updateWidget}
                                            deleteWidget={deleteWidget}
                                            setEditingWidgets={setEditingWidgets}
                                        />
                                    }
                                    {
                                        widget.type === 'PARAGRAPH' &&
                                        <ParagraphWidget
                                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                            widget={widget}
                                            editing={editing}
                                            updateWidget={updateWidget}
                                            deleteWidget={deleteWidget}
                                            setEditingWidgets={setEditingWidgets}
                                        />
                                    }
                                </a>
                            )
                        }
                    )
                }
            </div>
            <a className={"col-1"}>
                <i onClick={() => createWidget(topicId)}
                   className={"fas fa-plus-circle fa-2x"}></i>
            </a>
            {JSON.stringify(myWidgets)}
        </div>
    );
}

const stpm = store => {
    return {
        myWidgets: store.widgetReducer.widgets
    }
}

const dtpm = dispatch => {
    return {
        findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId),
        createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
        updateWidget: (widget) => widgetActions.updateWidget(dispatch, widget),
        deleteWidget: (widget) => widgetActions.deleteWidget(dispatch, widget)
    }
}

export default connect(stpm, dtpm)(WidgetList);