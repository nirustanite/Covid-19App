import React from "react";
import { Header, Footer } from "Components/index";


const Page = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
                {children}
            <Footer />
        </React.Fragment>
    );
};

export default Page;
