import React from "react";
import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./MoreCta.scss";

type MoreCtaProps = {
  type?: "primary" | "secondary" | "tertiary";
  heading: string;
  avatarSrc: string;
  text: string;
  code?: boolean;
  children: React.ReactNode;
};

function MoreCta({ type, heading, avatarSrc, text, code, children }: MoreCtaProps): JSX.Element {
  const baseClassName = "more-cta";
  const typeClassName = type ? `${baseClassName}--${type}` : "";
  const classNames = classnames(baseClassName, typeClassName);
  const html = (
    <>
      <div className={`${classNames}`}>
        <div className={`${baseClassName}__header`}>
          <img src={avatarSrc} alt="" className={`${baseClassName}__avatar`} />
        </div>
        <h3 className={`${baseClassName}__heading`}>{heading}</h3>
        <div className={`${baseClassName}__text`}>{text}</div>
        {children}
      </div>
    </>
  );
  const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  if (code) {
    return <code>{`${htmlString}`}</code>;
  }
  return html;
}

export default MoreCta;
