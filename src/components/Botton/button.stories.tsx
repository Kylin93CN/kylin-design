import React from "react";
import Button, { ButtonType } from "./button";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "../../styles/index.scss";

const defaultButton = () => (
  <>
    <Button onClick={action("clicked")}> default button </Button>
    <Button btnType={ButtonType.Primary} onClick={action("clicked")}>
      default button
    </Button>
    <Button btnType={ButtonType.Danger} onClick={action("clicked")}>
      default button
    </Button>
  </>
);
storiesOf("Button Component", module).add("Button", defaultButton);
