import React from "react";
import ReactDOMServer from "react-dom/server";
import classnames from "classnames";

type SocialMenuItemProps = {
  type?: "primary" | "secondary" | "tertiary";
  href: string;
  title: string;
  code?: boolean;
  children: React.ReactNode;
};

function SocialMenuItem({ type, href, title, code, children }: SocialMenuItemProps): JSX.Element {
  const baseClassName = "social-menu__item";
  const typeClassName = type ? `${baseClassName}--${type}` : "";
  const classNames = classnames(baseClassName, typeClassName);
  const html = (
    <>
      <li className={`${classNames}`}>
        <a href={href} className="social-menu__link">
          {children}
          <span className="visuallyhidden">{title}</span>
        </a>
      </li>
    </>
  );
  const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  if (code) {
    return <code>{`${htmlString}`}</code>;
  }
  return html;
}

export default SocialMenuItem;
