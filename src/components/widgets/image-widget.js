import React, {useState} from 'react';

const ImageWidget = (
    {
        to,
        widget,
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false);
    const [cachedWidget, setCachedWidget] = useState(widget);

    return (
        <>
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)}
                       className={"fas fa-2x fa-cog float-right"}></i>
                    <img
                        // Not sure if the "alt" attribute can prevent application from failure when .src/.width/.height are null?
                        src={widget.src}
                        width={widget.width}
                        height={widget.height}
                        alt={"Please update the source and width/height info for this Image Widget."}
                    />
                </>

            }
            {
                editing &&
                <>
                    <span className={"float-right"}>
                        <i className={"fas fa-check mr-3"}
                           onClick={() => {
                               setEditing(false);
                               updateWidget(cachedWidget);
                           }}></i>
                        <i className={"fas fa-trash"}
                           onClick={() => {
                               setEditing(false);
                               deleteWidget(widget);
                           }}></i>
                    </span>
                    <input
                        type="text"
                        onChange={event => {
                            setCachedWidget(prevState => ({
                                ...widget,
                                src: event.target.value
                            }))
                        }}
                        placeholder={cachedWidget.src? "" : "Enter your image source URL here"}
                        value={cachedWidget.src}
                        className={"form-control"}
                    />
                    <input
                        type="number"
                        onChange={event => {
                            setCachedWidget(prevState => ({
                                ...widget,
                                width: event.target.value
                            }))
                        }}
                        placeholder={cachedWidget.width? "" : "Enter image width to be displayed here"}
                        value={cachedWidget.width}
                        className={"form-control"}
                    />
                    <input
                        type="number"
                        onChange={event => {
                            setCachedWidget(prevState => ({
                                ...widget,
                                height: event.target.value
                            }))
                        }}
                        placeholder={cachedWidget.height? "" : "Enter image height to be displayed here"}
                        value={cachedWidget.height}
                        className={"form-control"}
                    />
                </>
            }
        </>
    )
};

export default ImageWidget;