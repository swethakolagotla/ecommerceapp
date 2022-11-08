 import App from "./App";
 import Listing from "./pages/Listing";

 const Routes = [
   {
     path: "/",
     element: <App />,
     children: [
       {
         path: "listing",
         element: <Listing/>,
       },
     ],
   },
 ];

 export default Routes;