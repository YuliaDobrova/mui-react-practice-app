import { useState } from "react";
import { Tabs, Tab, AppBar, Box } from "@mui/material";

export default function TabsComponent() {
  const [value, setValue] = useState(0);

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" sx={{ display: "flex" }}>
        <Box
          // sx={{ borderBottom: 1, borderColor: "divider" }}
          sx={{ maxWidth: { xs: 250, sm: 350 }, bgcolor: "background.paper" }}
        >
          <Tabs
            value={value}
            onChange={handleTabs}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Item 1" />
            <Tab label="Item 2" />
            <Tab label="Item 3" />
            <Tab label="Item 4" />
            <Tab label="Item 5" />
          </Tabs>
        </Box>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item 1 Details
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item 2 Details
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item 3 Details
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4 Details
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 5 Details
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
