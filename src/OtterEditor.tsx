import { PageNavBar } from "./components/PageNavBar";
import { OtterComponentsDrawer } from "./components/ComponentsDrawer/OtterComponentsDrawer";
import React, { useRef, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

import { Affix, Button, Drawer, MantineProvider } from "@mantine/core";
import { OtterComponent } from "./components/OtterComponent";
import produce from "immer";

export const OtterEditor: React.FunctionComponent<OtterWYSIWYGOptions> = (
  options
) => {
  const { theme } = options;
  const [otter, setOtter] = useState<otter>({
    pages: [{ name: "Accueil", otterComponent: [] }],
  });
  const [activePage, setActivePage] = useState(0);
  const [otterComponentsDrawerOpened, setOtterComponentsDrawerOpened] =
    useState(false);
  const editor = useRef(null);
  const addPage = () => {
    setOtter(
      (otter) =>
        (otter = {
          ...otter,
          pages: [...otter.pages, { name: "Accueil", otterComponent: [] }],
        })
    );
  };
  const addOtterComponent = (type: string) => {
    setOtter((otter) =>
      produce(otter, (draft) => {
        draft.pages[activePage].otterComponent.push({
          type: type,
          content: "Sample text",

          justify: "center",
          bgColor: "rgba(0, 0, 0, 1)",
          color: "rgba(255, 255, 255, 1)",
        });
      })
    );
    setOtterComponentsDrawerOpened(false);
  };
  return (
    <MantineProvider theme={{ colorScheme: theme }}>
      <div
        className="otter-editor"
        style={
          theme === "light"
            ? { backgroundColor: "white", height: "100%", width: "100%" }
            : {
                backgroundColor: "rgb(26, 27, 30)",
                height: "100%",
                width: "100%",
              }
        }
        ref={editor}
      >
        <PageNavBar
          pages={otter.pages}
          setActivePage={setActivePage}
          addPage={addPage}
        />
        <div
          className="otter-display"
          style={{
            height: " calc(100% - 40px)",
            width: " 100%",
            backgroundColor: "white",
          }}
        >
          {otter.pages[activePage].otterComponent.map((oc, i) => {
            return <OtterComponent editMode component={oc} key={i} />;
          })}
        </div>
        <OtterComponentsDrawer
          control={[
            otterComponentsDrawerOpened,
            setOtterComponentsDrawerOpened,
          ]}
          addOtterComponent={addOtterComponent}
        />
        {!otterComponentsDrawerOpened && editor.current && (
          <Affix position={{ bottom: 20, left: 20 }} target={editor.current}>
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              style={{
                borderRadius: "50%",
                height: 50,
                width: 50,
                fontSize: 20,
              }}
              onClick={() => setOtterComponentsDrawerOpened(true)}
            >
              +
            </Button>
          </Affix>
        )}
      </div>
    </MantineProvider>
  );
};
