import React from "react";
import classnames from "classnames";
import "./WqaLayout.scss";
import "../themes.scss";
import { Themes } from "../../enums/Themes";

interface Props {
  theme: Themes;
  children: React.ReactNode;
}

const WqaLayout = ({ theme, children }: Props) => {
  const baseClassName = "wqa-layout";
  const themeClassName = theme ? `is-${theme}` : "";
  const classNames = classnames(baseClassName, themeClassName);
  const html = (
    <>
      <div className={`${classNames}`}>{children}</div>
    </>
  );
  return html;
};

export default WqaLayout;
