import React from "react";
import {Link} from "react-router-dom";
import "../course-manager.css"

const CourseEditor = ({history}) =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top extra-top-margin-editor-navbar">
            <div className="container-fluid row">
                <span className={"col-1 col-lg-3"}>
                    <a
                        onClick={() => history.goBack()}
                        className="navbar-brand fas fa-times"></a>
                    <span className={"navbar-text h5 m-auto d-none d-lg-inline"}>Course Editor</span>
                </span>
                <span className={"col-11 col-lg-9"}>
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Active
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                                Disabled
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-plus-circle"></i>
                            </a>
                        </li>
                    </ul>
                </span>
            </div>
        </nav>
        {/*<div className={"extra-top-padding-editor"}>*/}
        {/*    <h2>*/}
        {/*        <Link>*/}
        {/*            <i onClick={() => history.goBack()}*/}
        {/*               className={"fas fa-arrow-left"}></i>*/}
        {/*        </Link>*/}
        {/*        Course Editor*/}
        {/*    </h2>*/}
        {/*</div>*/}
    </div>

export default CourseEditor;