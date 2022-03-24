// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 212 406"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M114.517 317.979c-18.137-11.575-36.248-23.202-54.411-34.7-11.859-7.517-24.26-14.254-35.628-22.448C11.018 251.129 3.215 237.55.734 220.72c-2.402-16.439 1.086-31.552 10.542-44.558 12.065-16.622 28.884-25.414 49.786-25.388 13.254.026 25.01 4.5 35.964 11.576 9.094 5.774 18.215 11.523 27.309 17.324 8.035 5.098 16.044 10.248 24.079 15.347 1.654 1.04 3.462 1.794 4.857-.235 1.602-2.367-.491-3.199-1.989-4.213-.155-.104-.284-.235-.439-.313L18.897 104.889C7.167 93.678.527 79.683.217 63.426-.324 34.449 13.679 14.679 39.67 3.052c31.339-13.474 79.032 22.032 79.032 22.032 17.543 11.16 35.112 22.293 52.655 33.426 8.655 5.488 17.206 11.21 26.042 16.413 15.554 9.156 18.602 28.952 8.759 43.206-.724 1.067-1.525 2.081-2.274 3.122-8.474 8.896-24.751 11.341-35.809 3.927-2.402-1.612-7.957-5.046-8.267-5.254-32.114-20.237-64.229-40.5-96.343-60.738-1.602-1.015-3.488-2.237-4.832-.26-1.498 2.185.259 3.85 1.99 5.02 5.761 3.85 119.26 75.331 119.26 75.331 11.548 6.841 20.565 15.711 26.301 27.963 1.472 3.121 4.702 14.41 4.831 15.295 1.809 12.564 1.421 24.789-4.366 36.443-.672 1.352-3.876 7.517-4.521 8.584-15.864 26.558-55.445 35.428-81.1 19.327-5.193-3.278-44.154-28.015-58.106-36.755-1.447-.911-3.255-1.379-4.392.494-1.395 2.315.568 3.407 2.067 4.37l121.456 76.553c15.967 10.639 26.973 24.582 29.376 44.351 2.712 22.188-4.238 40.708-20.747 55.587-6.433 5.775-13.874 9.833-22.116 12.382-17.026 3.928-33.613 2.705-48.882-6.061L10.966 327.786c-14.417-10.873-14.624-34.284.723-45.703 14.985-11.133 26.792-6.165 38.961 1.977l96.446 61.414c2.093 1.249 3.927 3.564 6.046.728 2.222-2.991-1.085-3.823-2.661-4.864-11.936-7.881-23.976-15.607-35.964-23.359z"
        }
        fill={"currentColor"}
        style={{
          mixBlendMode: 'screen"',
        }}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
