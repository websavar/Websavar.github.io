import React from 'react';
import { Skeleton } from '../mui';

export const skeleton = (
  element: JSX.Element,
  loading: boolean = false,
  variant: "text" | "rectangular" | "circular" | undefined = "text",
  height?: number,
  width?: number): JSX.Element => {
  return loading
    ? <Skeleton variant={variant} width={width} height={height} />
    : element;
}