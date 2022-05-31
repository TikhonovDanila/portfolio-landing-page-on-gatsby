import React from "react";
import {Link} from "gatsby";
import Header from "./header";
import Footer from "./footer";

export default ({children}) => (
    <>
        <Header></Header>
        {children}
        <Footer></Footer>
    </>
)





