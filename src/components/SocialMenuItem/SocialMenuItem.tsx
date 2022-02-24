import React from "react";
import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import Icon from "../Icon";
import { IconSize } from "../../enums/IconSize";

type SocialMenuItemProps = {
  type?: "primary" | "secondary" | "tertiary";
  href: string;
  title: string;
  name: string;
  size?: IconSize;
  code?: boolean;
};

function SocialMenuItem({ type, href, title, name, size, code }: SocialMenuItemProps): JSX.Element {
  const baseClassName = "social-menu__item";
  const typeClassName = type ? `${baseClassName}--${type}` : "";
  const classNames = classnames(baseClassName, typeClassName);
  const html = (
    <>
      <li className={`${classNames}`}>
        <a href={href} className="social-menu__link">
          <Icon name={name} size={size} className="social-menu__icon" />
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
