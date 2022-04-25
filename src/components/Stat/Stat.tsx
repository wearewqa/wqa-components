import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Stat.scss";
import { Themes } from "../../enums/Themes";

type StatProps = {
  theme: Themes;
  //   color?: "primary-light" | "primary-dark" | "gray-light" | "gray-dark";
  value: string;
  title: string;
  text?: string;
  code?: boolean;
};

function Stat({ /*color*/ theme, value, title, text, code }: StatProps): JSX.Element {
  const baseClassName = "stat";
  //   const colorClassName = color ? `${baseClassName}--${color}` : "";
  const themeClassName = theme ? `is-${theme}` : "";
  const classNames = classnames(baseClassName, /*colorClassName*/ themeClassName);
  const html = (
    <>
      <div className={`${classNames}`}>
        <h3 className={`${baseClassName}__title`}>{title}</h3>
        <div className={`${baseClassName}__value`}>{value}</div>
        <p className={`${baseClassName}__text`}>{text}</p>
      </div>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default Stat;
