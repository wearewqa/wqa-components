import React from "react";
import classnames from "classnames";
import "../themes.scss";
interface Props {
  theme: "default" | "simple" | "material";
  children: React.ReactNode;
}

const Layout = ({ theme, children }: Props) => {
  const baseClassName = "layout";
  const themeClassName = theme ? `theme--${theme}` : "";
  const classNames = classnames(baseClassName, themeClassName);
  const html = (
    <>
      <div className={`${classNames}`}>{children}</div>
    </>
  );
  return html;
};

export default Layout;
