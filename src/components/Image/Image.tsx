import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import { ShadowSize } from "../../enums/ShadowSize";
import "./Image.scss";

type ImageProps = {
  src: string;
  alt: string;
  align?: "center" | "left" | "right";
  shadow?: ShadowSize;
  className?: string;
  code?: boolean;
};

const Image = ({ src, alt, align, shadow, className, code }: ImageProps) => {
  const baseClassName = "image";
  const alignClassName = align ? `${baseClassName}--${align}` : "";
  const shadowClassName = shadow ? `${shadow}` : "";
  const classNames = classnames(className, baseClassName, alignClassName, shadowClassName);

  const html = (
    <>
      <img src={src} alt={alt} className={`${classNames}`} />
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
};

export default Image;
