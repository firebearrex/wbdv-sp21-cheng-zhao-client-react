import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import widgetService from "../../services/widget-service";

const WidgetList = ({
    myWidgets = [],
    createWidget,

})