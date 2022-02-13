import { Tabs } from "@mantine/core";
import React from "react";
import { RiPagesLine } from "react-icons/ri";
import { AiFillPlusSquare } from "react-icons/ai";

interface props {
  pages: page[];
  setActivePage: (index: number) => void;
  addPage: () => void;
}

export const PageNavBar: React.FunctionComponent<props> = (props) => {
  const { pages, setActivePage, addPage } = props;
  return (
    <Tabs
      onTabChange={(i) => {
        if (i === pages.length) {
          addPage();
          setActivePage(i);
        } else {
          setActivePage(i);
        }
      }}
    >
      {pages.map((page, i) => {
        return (
          <Tabs.Tab
            label={page.name}
            key={i}
            onClick={() => {}}
            icon={<RiPagesLine />}
          />
        );
      })}
      <Tabs.Tab label="Add" icon={<AiFillPlusSquare />} />
    </Tabs>
  );
};
