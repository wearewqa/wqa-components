import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import Icon from "../Icon/Icon";
import { IconSize } from "../../enums/IconSize";
import ProgressLink from "../ProgressLink/ProgressLink";
import "./Feature.scss";
import { Theme } from "../../enums/Theme";

type FeatureProps = {
  // color?: "primary-light" | "primary-dark" | "gray-light" | "gray-dark";
  theme: Theme;
  layout?: "column" | "row" | "row-indent" | "block" | "block-row";
  iconName: string;
  title?: string;
  text?: string;
  linkHref?: string;
  linkText?: string;
  modifierClass?: string;
  code?: boolean;
};

function Feature({ /*color, */ theme, layout, iconName, title, text, linkHref, linkText, modifierClass, code }: FeatureProps): JSX.Element {
  const baseClassName = "feature";
  const themeClassName = theme ? `is-${theme}` : "";
  // const colorClassName = color ? `${baseClassName}--${color}` : "";
  const layoutClassName = layout ? `${baseClassName}--${layout}` : "";
  const classNames = classnames(baseClassName, /*colorClassName,*/ layoutClassName, modifierClass, themeClassName);
  const html = (
    <>
      <div className={`${classNames}`}>
        {iconName && <Icon name={iconName} size={IconSize.large} className="feature__mast" />}

        {/* <Heading className="feature__title" level={HeadingLevel.h3} size={FontSize.headingSmall} weight={FontWeight.semiBold}>
          Share team inboxes
        </Heading> */}
        {title && <h3 className="feature__title">{title}</h3>}

        {text && <p className="feature__text">{text}</p>}

        {linkText && (
          <div className="feature__cta">
            <ProgressLink href={linkHref}>{linkText}</ProgressLink>
          </div>
        )}
      </div>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default Feature;
