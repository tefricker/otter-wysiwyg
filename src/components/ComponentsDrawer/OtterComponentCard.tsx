import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import React, { Dispatch, SetStateAction, useState } from "react";

interface props {
  name: string;
  type: OCtype;
  isBlank?: boolean;
  addOtterComponent: (type: string) => void;
}

const renderBadge = (type: OCtype) => {
  switch (type) {
    case "textarea":
      return "Long text";
    case "text":
      return "Short text";
    case "custom":
      return "Custom";
  }
};

export const OtterComponentsCard: React.FunctionComponent<props> = (props) => {
  const { name, type, isBlank, addOtterComponent } = props;
  return (
    <div
      style={{
        width: "220px",
        marginTop: 30,
      }}
    >
      {!isBlank && (
        <Card shadow="sm" padding="lg">
          <Group position="center">
            <Text weight={500}>{name}</Text>
            <Badge color="pink" variant="light">
              {renderBadge(type)}
            </Badge>
          </Group>

          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
            onClick={() => addOtterComponent(type)}
          >
            Add
          </Button>
        </Card>
      )}
    </div>
  );
};
