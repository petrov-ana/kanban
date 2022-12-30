import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({tasks}) => {
  
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer
        tasks={tasks}
      />
    </>
  )
}

export default Layout