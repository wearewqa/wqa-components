import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import Image from "../Image/Image";
import { ShadowSize } from "../../enums/ShadowSize";
import "./Tiles.scss";

type TilesProps = {
  reverse?: "none" | "all" | "desktop";
  flush?: boolean;
  image?: string;
  mobileImage?: string;
  mobileImageFlush?: boolean;
  imageAlt?: string;
  imageShadow?: ShadowSize;
  code?: boolean;
  children: React.ReactNode;
};

function getReverse(value: string): string {
  switch (value) {
    case "all":
      value = "rev";
      break;
    case "desktop":
      value = "rev-md";
      break;
    default:
      "none";
  }
  return value;
}

function Tiles({ reverse, flush, image, mobileImage, mobileImageFlush, imageAlt, imageShadow, code, children }: TilesProps): JSX.Element {
  const baseClassName = "tiles";
  const reverseClassName = reverse ? `${baseClassName}--${getReverse(reverse)}` : "";
  const flushModifier = flush ? `${baseClassName}--flush` : "";
  const mobileImageFlushModifier = mobileImageFlush ? "tiles__content--flush-mob" : "";
  const classNames = classnames(baseClassName, reverseClassName, flushModifier);
  const html = (
    <>
      <section className={`${classNames}`}>
        <div className="tiles__content">
          <div className="tiles__inner">{children}</div>
        </div>
        <div className={`tiles__content tiles__content--media ${mobileImageFlushModifier}`}>
          {mobileImage && (
            <picture className="tiles__image">
              <source srcset={image} media="(min-width: 768px)" className="tiles__image" />
              <Image src={mobileImage} alt={imageAlt} className="tiles__image" shadow={imageShadow} />
            </picture>
          )}
          {!mobileImage && <Image src={image} alt={imageAlt} className="tiles__image" shadow={imageShadow} />}
        </div>
      </section>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default Tiles;
