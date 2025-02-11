import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import InterviewRoundRatings from "../interview-round-rating/index ";
import BasicDetails from "../basic-details";
import ContactDetails from "../contact-details";
import AcadmicDetails from "../acadmic-details";
import "./style.css";

const Index = () => {
  const [currentTabId, setCurrentTabId] = useState("tab-4");
  const tabHandler = (tabId) => {
    setCurrentTabId(tabId);
  };
  return (
    <Box className="d-flex justify-center ">
      <Box className="p-5" sx={{ width: "65vw" }}>
        <Paper elevation={4} sx={{ width: "100%" }}>
          {/** main tab start */}
          <Box
            style={{
              display: "flex",
            }}
            className="p-4"
          >
            <Typography
              variant="body2"
              className={`pe-5 cursor-pointer ${
                currentTabId === "tab-1" ? "tab-selected" : "pe-5 tab"
              }`}
              onClick={() => {
                tabHandler("tab-1");
              }}
            >
              Basic Details
              {currentTabId === "tab-1" && (
                <hr className="tab-underline mt-2" />
              )}
            </Typography>
            <Typography
              variant="body2"
              className={`pe-5 cursor-pointer ${
                currentTabId === "tab-2" ? "tab-selected" : "pe-5 tab"
              }`}
              onClick={() => {
                tabHandler("tab-2");
              }}
            >
              Contact Details
              {currentTabId === "tab-2" && (
                <hr className="tab-underline mt-2" />
              )}
            </Typography>
            <Typography
              variant="body2"
              className={`pe-5 cursor-pointer ${
                currentTabId === "tab-3" ? "tab-selected" : "pe-5 tab"
              }`}
              onClick={() => {
                tabHandler("tab-3");
              }}
            >
              Acadmic Details
              {currentTabId === "tab-3" && (
                <hr className="tab-underline mt-2" />
              )}
            </Typography>
            <Typography
              variant="body2"
              className={`pe-5 cursor-pointer ${
                currentTabId === "tab-4" ? "tab-selected" : "pe-5 tab"
              }`}
              onClick={() => {
                tabHandler("tab-4");
              }}
            >
              Interview Rounds & Ratings
              {currentTabId === "tab-4" && (
                <hr className="tab-underline mt-2" />
              )}
            </Typography>
          </Box>
          {/** Main tab End */}
          <Divider className="secondary-divider" />
          {currentTabId === "tab-1" && <BasicDetails />}
          {currentTabId === "tab-2" && <ContactDetails />}
          {currentTabId === "tab-3" && <AcadmicDetails />}
          {currentTabId === "tab-4" && <InterviewRoundRatings />}
          <Divider className="secondary-divider mt-5" />

          <Box className="p-4 d-flex flex-row-reverse">
            <Stack direction={"row"} spacing={2}>
              <Button
                sx={{
                  color: "#5BAFDB",
                  backgroundColor: "#f2f6f9",
                  borderRadius: "5px",
                  width: "100px",
                  textTransform: "none",
                }}
              >
                Back
              </Button>
              <Button
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#0084ca",
                  borderRadius: "5px",
                  width: "100px",
                  textTransform: "none",
                }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Index;
