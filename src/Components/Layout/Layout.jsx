import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import SecHeader from "./SecHeader";

const Layout = ({ children, description, keywords, title, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div className="position-sticky top-0 start-0 z-3 bg-white">
        <Header />
        <div className="secHeadNav">
          <SecHeader />
        </div>
      </div>
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Tannis",
  description: "React Project",
  keywords: "mern,react",
  author: "Ficoslot",
};

export default Layout;
