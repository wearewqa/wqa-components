import React from "react";
import classnames from "classnames";
import "../themes.scss";
import { Theme } from "../../enums/Theme";

interface Props {
  theme: Theme;
  children: React.ReactNode;
}

const Layout = ({ theme, children }: Props) => {
  const baseClassName = "layout";
  const themeClassName = theme ? `is-${theme}` : "";
  const classNames = classnames(baseClassName, themeClassName);
  const html = (
    <>
      <div className={`${classNames}`}>{children}</div>
    </>
  );
  return html;
};

export default Layout;
