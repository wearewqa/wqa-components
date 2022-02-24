import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./SocialMenu.scss";

type SocialMenuProps = {
  color?: "primary" | "secondary" | "tertiary";
  code?: boolean;
  children: React.ReactNode;
};

function SocialMenu({ color, code, children }: SocialMenuProps): JSX.Element {
  const baseClassName = "social-menu";
  const colorClassName = color ? `${baseClassName}--${color}` : "";
  const classNames = classnames(baseClassName, colorClassName);
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
