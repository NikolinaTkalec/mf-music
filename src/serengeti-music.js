import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { MusicLayout } from "./music-layout";
import { DefaultTheme } from "@serengeti/styleguide";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => {
    return (
      <DefaultTheme>
        <MusicLayout />
      </DefaultTheme>
    );
  },
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});
export const { bootstrap, mount, unmount } = lifecycles;
