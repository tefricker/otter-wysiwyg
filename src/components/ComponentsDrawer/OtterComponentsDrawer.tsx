import { Drawer, Tabs, Title } from "@mantine/core";
import React, { Dispatch, SetStateAction, useState } from "react";
import { OtterComponentsCard } from "./OtterComponentCard";

interface props {
  control: [boolean, Dispatch<SetStateAction<boolean>>];
  addOtterComponent: (type: string) => void;
}

export const OtterComponentsDrawer: React.FunctionComponent<props> = (
  props
) => {
  const { control, addOtterComponent } = props;

  return (
    <Drawer
      target={".otter-editor"}
      opened={control[0]}
      onClose={() => {
        control[1](false);
      }}
      size="80%"
    >
      <Title order={1} align="center">
        Add a block
      </Title>

      <Tabs grow>
        <Tabs.Tab label="Basic">
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-evenly",
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <OtterComponentsCard
              name="Title"
              type="text"
              addOtterComponent={addOtterComponent}
            />
            <OtterComponentsCard
              name="Subtitle"
              type="text"
              addOtterComponent={addOtterComponent}
            />

            <OtterComponentsCard
              name="Text"
              type="textarea"
              addOtterComponent={addOtterComponent}
            />
            <OtterComponentsCard
              name="Map"
              type="custom"
              addOtterComponent={addOtterComponent}
            />
            <OtterComponentsCard
              name="Link"
              type="custom"
              addOtterComponent={addOtterComponent}
            />
            <OtterComponentsCard
              name=""
              type="custom"
              isBlank
              addOtterComponent={addOtterComponent}
            />
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Custom">
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-evenly",
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <OtterComponentsCard
              name="Button to register"
              type="custom"
              addOtterComponent={addOtterComponent}
            />
            <OtterComponentsCard
              name="Button to register"
              type="custom"
              addOtterComponent={addOtterComponent}
            />
            <OtterComponentsCard
              name=""
              type="custom"
              isBlank
              addOtterComponent={addOtterComponent}
            />
          </div>
        </Tabs.Tab>
      </Tabs>
    </Drawer>
  );
};

// Sample text
