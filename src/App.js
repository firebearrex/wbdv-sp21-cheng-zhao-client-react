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
                <Route path={"/editor"}
                       render={(props) =>
                           <CourseEditor {...props}/>}>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
