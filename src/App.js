import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/courses">
                    <CourseManager/>
                </Route>
                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/:moduleId",
                    "/courses/:layout/edit/:courseId/"
                ]}
                       exact={true}
                       render={(props) =>
                           <CourseEditor {...props}/>}>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
