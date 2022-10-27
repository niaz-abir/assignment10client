import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Component/Blog/Blog";
import Home from "../../Component/Home/Home";
import Course from "../../Component/Course/Course";
import Faq from "../../Component/Faq/Faq";
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";
import Navload from "../../Component/Navload/Navload";
import Navcomponent from "../../Component/Navcomponent/Navcomponent";
import Coursedetails from "../../Component/Coursedetails/Coursedetails";
import Coursedetailsdiv from "../../Component/Coursedetalisdiv/Coursedetailsdiv";
import Reactpackeg from "../../Component/Reactpackeg/Reactpackeg";
import Privateroute from "../../Component/Privateroute/Privateroute";
import Pdf from "../../Component/Pdf/Pdf";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/course", element: <Course></Course> },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/navload",
        element: <Navload></Navload>,
      },
      {
        path: "/navcom",
        element: <Navcomponent></Navcomponent>,
      },
      {
        path: "/detail/:id",
        element: <Coursedetails></Coursedetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courseinfo/${params.id}`),
      },
      {
        path: "/detail/:id",
        element: <Coursedetails></Coursedetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courseinfo/${params.id}`),
      },

      {
        path: "/packeg/:id",
        element: (
          <Privateroute>
            <Reactpackeg></Reactpackeg>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courseinfo/${params.id}`),
      },
      {
        path: "/pdf",
        element: <Pdf></Pdf>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/courseinfo/${params.id}`),
      },
      {
        path: "/*",
        element: <div>This is error</div>,
      },
    ],
  },
]);
