import React from "react";
import {Link} from "react-router-dom";
import "../course-manager.css"

const CourseEditor = ({history}) =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container-fluid row">
                <span className={"col-1 col-md-3 mr-auto"}>
                    <a onClick={() => history.goBack()}
                       className="navbar-brand fas fa-times"></a>
                    <span className={"navbar-text h4 m-auto d-none d-md-inline text-white"}>
                        Course Editor
                    </span>
                </span>
                <form className={"navbar-nav col-11 col-md-9"}>
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
                </form>
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

        <div className="row extra-top-padding">
            <div className="col-4 editor-module-list-background">
                <div className="list-group list-group-flush mt-3 editor-module-list">
                    <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                        Cras justo odio
                        <i className="fas fa-minus-circle float-right"></i>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Dapibus ac facilisis in
                        <i className="fas fa-minus-circle float-right"></i>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Morbi leo risus
                        <i className="fas fa-minus-circle float-right"></i>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Porta ac consectetur ac
                        <i className="fas fa-minus-circle float-right"></i>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Vestibulum at eros
                        <i className="fas fa-minus-circle float-right"></i>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <i className="fas fa-plus-circle float-right"></i>
                    </a>
                </div>
            </div>

            <div className="col-8">
                <ul className="nav nav-pills mt-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-plus-circle"></i>
                        </a>
                    </li>
                </ul>

                <br/>

                Content intentionally left blank
            </div>
        </div>
    </div>

export default CourseEditor;