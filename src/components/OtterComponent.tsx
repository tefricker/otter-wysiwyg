import React from "react";

interface props {
  editMode: boolean;
  component: otterComponent;
}

export const OtterComponent: React.FunctionComponent<props> = (props) => {
  const { editMode, component } = props;
  return component.type === "text" ? (
    <div
      style={
        editMode
          ? { border: "solid 2px black", height: 300, textAlign: "center" }
          : {}
      }
    >
      <input type="text" value="Lorem ipsum lorem ipsum lorem ipsum" />
    </div>
  ) : (
    <div>d</div>
  );
};
