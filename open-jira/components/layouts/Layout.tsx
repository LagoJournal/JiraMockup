import { Box } from "@mui/material";
import React from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ title = "JiraMockup", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
