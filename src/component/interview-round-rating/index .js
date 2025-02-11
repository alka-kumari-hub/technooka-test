import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  LinearProgress,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import "../main/style.css";

const Index = () => {
  return (
    <div>
      {/** sub tab start */}
      <Box
        sx={{ paddingBottom: "20px" }}
        className="d-flex align-center justify-center my-5"
      >
        <div style={{ position: "relative" }}>
          <span className="sub-tab sub-tab-selected">1</span>
          <Typography
            noWrap
            variant="caption"
            className="secondary-color "
            style={{ position: "absolute", top: "50px", left: "-60%" }}
          >
            Interview Round 1
          </Typography>
        </div>
        <Divider
          style={{ width: "180px" }}
          className="sub-tab-selected-divider"
        />
        <div style={{ position: "relative" }}>
          <span className="sub-tab">2</span>
          <Typography
            noWrap
            variant="caption"
            style={{ position: "absolute", top: "50px", left: "-60%" }}
          >
            Interview Round 2
          </Typography>
        </div>
        <Divider style={{ width: "180px" }} />
        <div style={{ position: "relative" }}>
          <span className="sub-tab">3</span>
          <Typography
            noWrap
            variant="caption"
            style={{ position: "absolute", top: "50px", left: "-60%" }}
          >
            Interview Round 3
          </Typography>
        </div>
        <Divider style={{ width: "180px" }} />
        <div style={{ position: "relative" }}>
          <span className="sub-tab">4</span>
          <Typography
            noWrap
            variant="caption"
            style={{ position: "absolute", top: "50px", left: "-40%" }}
          >
            HR Round
          </Typography>
        </div>
      </Box>
      {/** sub tab End */}

      {/** Interview round Start */}
      <Box className="p-4">
        <Paper elevation={3}>
          <Box className="d-flex justify-between p-4">
            <Typography className="primary-color" variant="h5">
              Interview Round 1
            </Typography>
            <Stack
              direction={"row"}
              spacing={1}
              alignItems={"center"}
              className="px-3"
              style={{
                backgroundColor: "#F4F4F4",
                color: "#A9b2be",
                borderRadius: "5px",
              }}
            >
              <Typography variant="caption">Completed</Typography>
              <ExpandMoreIcon />
            </Stack>
          </Box>
          <Divider className="gray-divider" />

          <Grid container spacing={4} className="p-4 py-5">
            <Grid item xs={6}>
              <Paper
                className="d-flex justify-between p-4 align-center"
                style={{ height: "60px" }}
                elevation={4}
              >
                <Typography
                  variant="h6"
                  className="primary-color"
                  fontSize={"18px"}
                >
                  Feedback Given
                </Typography>
                <Typography className="pe-3 secondary-color" variant="h3">
                  2/2
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                className="d-flex justify-between p-4 align-center"
                style={{ height: "60px" }}
                elevation={4}
              >
                <Typography
                  variant="h6"
                  className="primary-color"
                  fontSize={"18px"}
                >
                  Feedback Pending
                </Typography>
                <Typography className="pe-3 secondary-color" variant="h3">
                  0/2
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Divider className="gray-divider" />
          {/** Overall Rating start */}
          <Box className="p-4">
            <Typography
              variant="h6"
              className="primary-color"
              fontSize={"18px"}
            >
              Overall Ratings
            </Typography>
            <Box className="pt-3">
              <Stack spacing={1} direction={"row"} alignItems={"center"}>
                <Typography variant="h3">2/2</Typography>
                <Rating
                  name="text-feedback"
                  value={"2"}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Typography className="pe-3" variant="h6">
                  Poor+
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    fontSize={"14px"}
                    component="span"
                    className="gray-color"
                  >
                    Based on all the categories
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2} className="pb-4">
                    <Grid
                      item
                      xs={11}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span>
                        <Typography noWrap className="pe-4 " fontSize={"14px"}>
                          Skills and Qualifications
                        </Typography>
                      </span>
                      <LinearProgress
                        variant="determinate"
                        value={"50"}
                        sx={{ width: "100%" }}
                        color="warning"
                      />
                    </Grid>
                    <Grid item xs={1} className="d-flex flex-row-reverse">
                      <Typography
                        fontSize={"14px"}
                        component="span"
                        className="gray-color"
                      >
                        2/5
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className="pb-4">
                    <Grid
                      item
                      xs={11}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span>
                        <Typography noWrap fontSize={"14px"} className="pe-4 ">
                          Cultural Fit
                        </Typography>
                      </span>
                      <LinearProgress
                        variant="determinate"
                        value={"50"}
                        sx={{ width: "100%" }}
                        color="warning"
                      />
                    </Grid>
                    <Grid item xs={1} className="d-flex flex-row-reverse">
                      <Typography
                        fontSize={"14px"}
                        component="span"
                        className="gray-color"
                      >
                        2/5
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className="pb-4">
                    <Grid
                      item
                      xs={11}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span>
                        <Typography noWrap className="pe-4 " fontSize={"14px"}>
                          Problem-solving and Critical Thinking
                        </Typography>
                      </span>
                      <LinearProgress
                        variant="determinate"
                        value={"50"}
                        sx={{ width: "100%" }}
                        color="warning"
                      />
                    </Grid>
                    <Grid item xs={1} className="d-flex flex-row-reverse">
                      <Typography
                        fontSize={"14px"}
                        component="span"
                        className="gray-color"
                      >
                        2/5
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={11}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span>
                        <Typography noWrap fontSize={"14px"} className="pe-4 ">
                          Communication and Interpersonal Skills
                        </Typography>
                      </span>
                      <LinearProgress
                        variant="determinate"
                        value={"50"}
                        sx={{ width: "100%" }}
                        color="warning"
                      />
                    </Grid>
                    <Grid item xs={1} className="d-flex flex-row-reverse">
                      <Typography
                        fontSize={"14px"}
                        component="span"
                        className="gray-color"
                      >
                        2/5
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          {/** Overall Rating End */}
          <Divider className="gray-divider" />

          {/** Categories wise Ratiing start */}
          <Box className="p-4">
            <Box className="d-flex justify-between ">
              <Typography
                variant="h6"
                className="primary-color"
                fontSize={"18px"}
              >
                Categories Wise Rating
              </Typography>
              <span
                className="d-flex justify-center align-center px-4"
                style={{
                  fontSize: "10px",
                  backgroundColor: "#FFA42C",
                  color: "white",
                  borderRadius: "3px",
                  height: "20px",
                }}
              >
                Edit
              </span>
            </Box>
            <Box>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    fontSize={"14px"}
                    component="span"
                    className="gray-color"
                  >
                    Smit Panchal's Ratings
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2} className="pb-4">
                    <Grid item xs={5}>
                      <Stack spacing={1}>
                        <Typography>Skills and Qualifications</Typography>
                        <Stack
                          spacing={1}
                          direction={"row"}
                          alignItems={"center"}
                        >
                          <Rating
                            name="text-feedback"
                            value={"3"}
                            readOnly
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Typography className="pe-3" variant="h6">
                            Poor+
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>{" "}
                    <Grid item xs={5}>
                      <Stack spacing={1}>
                        <Typography>Cultural Fit</Typography>
                        <Stack
                          spacing={1}
                          direction={"row"}
                          alignItems={"center"}
                        >
                          <Rating
                            name="text-feedback"
                            value={"3"}
                            readOnly
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Typography className="pe-3" variant="h6">
                            Poor+
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className="pb-4">
                    <Grid item xs={5}>
                      <Stack spacing={1}>
                        <Typography>
                          {" "}
                          Problem-solving Critical Thinking
                        </Typography>
                        <Stack
                          spacing={1}
                          direction={"row"}
                          alignItems={"center"}
                        >
                          <Rating
                            name="text-feedback"
                            value={"3"}
                            readOnly
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Typography className="pe-3" variant="h6">
                            Poor+
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>{" "}
                    <Grid item xs={5}>
                      <Stack spacing={1}>
                        <Typography>
                          Communication and Interpersonal Skills
                        </Typography>
                        <Stack
                          spacing={1}
                          direction={"row"}
                          alignItems={"center"}
                        >
                          <Rating
                            name="text-feedback"
                            value={"3"}
                            readOnly
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Typography className="pe-3" variant="h6">
                            Poor+
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Box>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    fontSize={"14px"}
                    component="span"
                    className="gray-color"
                  >
                    Devarsh Patel's Ratings
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2} className="pb-4">
                    <Grid item xs={5}>
                      <Stack spacing={1}>
                        <Typography>Skills and Qualifications</Typography>
                        <Stack
                          spacing={1}
                          direction={"row"}
                          alignItems={"center"}
                        >
                          <Rating
                            name="text-feedback"
                            value={"3"}
                            readOnly
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Typography className="pe-3" variant="h6">
                            Poor+
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>{" "}
                    <Grid item xs={5}>
                      <Stack spacing={1}>
                        <Typography>Cultural Fit</Typography>
                        <Stack
                          spacing={1}
                          direction={"row"}
                          alignItems={"center"}
                        >
                          <Rating
                            name="text-feedback"
                            value={"3"}
                            readOnly
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Typography className="pe-3" variant="h6">
                            Poor+
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className="pb-4">
                    <Grid item xs={5}>
                      <Stack spacing={1}>
                        <Typography>
                          {" "}
                          Problem-solving Critical Thinking
                        </Typography>
                        <Stack
                          spacing={1}
                          direction={"row"}
                          alignItems={"center"}
                        >
                          <Rating
                            name="text-feedback"
                            value={"3"}
                            readOnly
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Typography className="pe-3" variant="h6">
                            Poor+
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>{" "}
                    <Grid item xs={5}>
                      <Stack spacing={1}>
                        <Typography>
                          Communication and Interpersonal Skills
                        </Typography>
                        <Stack
                          spacing={1}
                          direction={"row"}
                          alignItems={"center"}
                        >
                          <Rating
                            name="text-feedback"
                            value={"3"}
                            readOnly
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Typography className="pe-3" variant="h6">
                            Poor+
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          {/** Categories wise Ratiing End */}
        </Paper>
      </Box>
      {/** Interview round End */}
    </div>
  );
};

export default Index;
