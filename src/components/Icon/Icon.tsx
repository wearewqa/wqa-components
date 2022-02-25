import React from "react";
import SVG, { Props as SVGProps } from "react-inlinesvg";
import { IconSize } from "../../enums/IconSize";

export interface Props {
  name: string;
  className?: string;
  size?: IconSize;
}

const Icon: React.FC<Props> = ({ name, className = "", size }) => {
  let width = 24;
  let height = 24;
  switch (size) {
    case IconSize.xsmall:
      width = 24;
      height = 24;
      break;
    case IconSize.small:
      width = 32;
      height = 32;
      break;
    case IconSize.medium:
      width = 40;
      height = 40;
      break;
    case IconSize.large:
      width = 48;
      height = 48;
      break;
    case IconSize.xlarge:
      width = 56;
      height = 56;
      break;

    default:
      break;
  }
  return <SVG src={`icons/icon-${name}.svg`} width={width} height={height} className={className} />;
};

export default Icon;
