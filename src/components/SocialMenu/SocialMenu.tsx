import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./SocialMenu.scss";
import { Theme } from "../../enums/Theme";

type SocialMenuProps = {
  theme: Theme;
  //   color?: "primary" | "secondary" | "tertiary";
  code?: boolean;
  children: React.ReactNode;
};

function SocialMenu({ /*color,*/ theme, code, children }: SocialMenuProps): JSX.Element {
  const baseClassName = "social-menu";
  //   const colorClassName = color ? `${baseClassName}--${color}` : "";
  const themeClassName = theme ? `is-${theme}` : "";
  const classNames = classnames(baseClassName, /*colorClassName*/ themeClassName);
  const html = (
    <>
      <ul className={`${classNames}`}>{children}</ul>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default SocialMenu;
