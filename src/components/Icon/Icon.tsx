import React from "react";
import SVG, { Props as SVGProps } from "react-inlinesvg";
import classnames from "classnames";
import { IconSize } from "../../enums/IconSize";
import { Theme } from "../../enums/Theme";
import "./Icon.scss";

export interface Props {
  theme: Theme;
  name: string;
  className?: string;
  size?: IconSize;
}

const Icon: React.FC<Props> = ({ theme, name, className = "", size }) => {
  const baseClassName = "icon";
  const themeClassName = theme ? `is-${theme}` : "";
  const classNames = classnames(className, baseClassName, themeClassName);
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
  return <SVG src={`icons/icon-${name}.svg`} width={width} height={height} className={classNames} />;
};

export default Icon;
