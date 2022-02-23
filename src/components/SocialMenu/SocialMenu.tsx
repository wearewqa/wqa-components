import React from "react";
import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./SocialMenu.scss";

type SocialMenuProps = {
  type?: "primary" | "secondary" | "tertiary";
  code?: boolean;
  children: React.ReactNode;
};

function SocialMenu({ type, code, children }: SocialMenuProps): JSX.Element {
  const baseClassName = "social-menu";
  const typeClassName = type ? `${baseClassName}--${type}` : "";
  const classNames = classnames(baseClassName, typeClassName);
  const html = (
    <>
      <ul className={`${classNames}`}>{children}</ul>
    </>
  );
  const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  if (code) {
    return <code>{`${htmlString}`}</code>;
  }
  return html;
}

export default SocialMenu;
