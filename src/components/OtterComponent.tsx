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
      Your text here
    </div>
  ) : (
    <div>d</div>
  );
};
