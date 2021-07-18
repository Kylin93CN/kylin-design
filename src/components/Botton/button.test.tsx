import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./button";

const defaultProps = {
  onClick: jest.fn(),
};
const defaultBtnProps: ButtonProps = {
  btnType: "default",
  className: "test-cls",
};
describe("test button component", () => {
  // test default button
  it("test default button", () => {
    const btnDom = render(
      <Button {...defaultBtnProps} {...defaultProps}>
        Default Button
      </Button>
    );
    const ele = btnDom.getByText("Default Button");
    // button是否存在
    expect(ele).toBeInTheDocument();
    // dom属性是否是BUTTON
    expect(ele.tagName).toEqual("BUTTON");
    expect(ele).toHaveClass("btn btn-default test-cls");
    // 模拟点击
    fireEvent.click(ele);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  // test primary button
  it("test primary button", () => {
    const btnDom = render(
      <Button
        {...defaultBtnProps}
        {...defaultProps}
        btnType="primary"
      >
        Primary Button
      </Button>
    );
    const ele = btnDom.getByText("Primary Button");
    // button是否存在
    expect(ele).toBeInTheDocument();
    // dom属性是否是BUTTON
    expect(ele.tagName).toEqual("BUTTON");
    expect(ele).toHaveClass("btn btn-primary test-cls");
    // 模拟点击
    fireEvent.click(ele);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  // test small-ghost button
  it("test small-ghost button", () => {
    const btnDom = render(
      <Button
        {...defaultBtnProps}
        {...defaultProps}
        size="sm"
        btnType="ghost"
      >
        Small Ghost Button
      </Button>
    );
    const ele = btnDom.getByText("Small Ghost Button");
    // button是否存在
    expect(ele).toBeInTheDocument();
    // dom属性是否是BUTTON
    expect(ele.tagName).toEqual("BUTTON");
    expect(ele).toHaveClass("btn btn-ghost btn-sm test-cls");
    // 模拟点击
    fireEvent.click(ele);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  // test disabled button
  it("test disabled button", () => {
    const btnDom = render(
      <Button
        {...defaultBtnProps}
        {...defaultProps}
        size="sm"
        btnType="ghost"
        disabled
      >
        Disabled Button
      </Button>
    );
    const ele = btnDom.getByText("Disabled Button") as HTMLButtonElement;
    // button是否存在
    expect(ele).toBeInTheDocument();
    // dom属性是否是BUTTON
    expect(ele.tagName).toEqual("BUTTON");
    expect(ele).toHaveClass("btn btn-ghost btn-sm test-cls");
    // disabled 属性
    expect(ele.disabled).toBeTruthy();
    // 模拟点击
    fireEvent.click(ele);
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
  // test link button
  it("test link button", () => {
    const btnDom = render(
      <Button
        {...defaultBtnProps}
        {...defaultProps}
        size="sm"
        btnType="link"
        // disabled
        href="https://www.bilibili.com/"
      >
        Disabled Button
      </Button>
    );
    const ele = btnDom.getByText("Disabled Button") as HTMLButtonElement;
    // button是否存在
    expect(ele).toBeInTheDocument();
    // dom属性是否是BUTTON
    expect(ele.tagName).toEqual("A");
    expect(ele).toHaveClass("btn btn-link btn-sm test-cls");
    // disabled 属性
    // expect(ele.disabled).toBeTruthy();
    // 模拟点击
    fireEvent.click(ele);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
