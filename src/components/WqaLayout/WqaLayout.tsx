import React from "react";
import classnames from "classnames";
import "./WqaLayout.scss";
import "../themes.scss";
import { Theme } from "../../enums/Theme";

interface Props {
  theme: Theme;
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
