import { Tabs, Tab, Box, TabsProps } from "@mui/material";
import React, { useState } from "react";
import Menu from "./menu";
import styled from 'styled-components';

interface StyledTabProps {
  label: string
  value: string
}

interface StyledTabsProps extends TabsProps {
  children?: React.ReactNode;
  value: string;
  onChange: (event: React.SyntheticEvent, newCategory: string) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: 'brown',
  },
});

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))({
  textTransform: 'none',
  color: 'red',
  '&.Mui-selected': {
    color: 'brown !important',
    fontWeight: 600,
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
});

const Content = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("Main Menu");

  const handleChange = (event: React.SyntheticEvent, newCategory: string) => {
    setCurrentCategory(newCategory);
  };
  return (
    <div style={{ marginTop: 50 }}>
      <Box mb={2} position="sticky" top="0" bgcolor="#EAB676" zIndex={10}>
        <StyledTabs
          value={currentCategory}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <StyledTab label="Main Menu" value="Main Menu" />
          <StyledTab label="Salad" value="Salad" />
          <StyledTab label="Yum Yum" value="Yum Yum" />
          <StyledTab label="Soup" value="Soup" />
          <StyledTab label="Spicy Thai Curry" value="Spicy Thai Curry" />
          <StyledTab label="Chef's Recommendation" value="Chef's Recommendation" />
          <StyledTab label="Northern Thai Specialties" value="Northern Thai Specialties" />
          <StyledTab label="Wok Stir-fried Noddle and Rice" value="Wok Stir-fried Noodle and Rice" />
          <StyledTab label="Noodle" value="Noodle" />
          <StyledTab label="Add On" value="Add On" />
        </StyledTabs>
      </Box>
      
      {currentCategory === "Main Menu" ? 
        <>
          <Menu
          imageUrl="https://media2.miaminewtimes.com/mia/imager/u/original/8502165/lung_yai_thai_tapas1-credit_billwisserphoto.com.jpg"
          name="Dumplings (Shrimp and Pork)"
          description="Steamed cjoice of dumplings with soy vinaigrette dip"
          price="price"
          />
          <Menu
            imageUrl="https://media2.miaminewtimes.com/mia/imager/u/original/8502165/lung_yai_thai_tapas1-credit_billwisserphoto.com.jpg"
            name="name"
            description="description"
            price="price"
          />
          <Menu
            imageUrl="https://media2.miaminewtimes.com/mia/imager/u/original/8502165/lung_yai_thai_tapas1-credit_billwisserphoto.com.jpg"
            name="name"
            description="description"
            price="price"
          />
          <Menu
            imageUrl="https://media2.miaminewtimes.com/mia/imager/u/original/8502165/lung_yai_thai_tapas1-credit_billwisserphoto.com.jpg"
            name="name"
            description="description"
            price="price"
          />
          <Menu
            imageUrl="https://media2.miaminewtimes.com/mia/imager/u/original/8502165/lung_yai_thai_tapas1-credit_billwisserphoto.com.jpg"
            name="name"
            description="description"
            price="price"
          />
          <Menu
            imageUrl="https://media2.miaminewtimes.com/mia/imager/u/original/8502165/lung_yai_thai_tapas1-credit_billwisserphoto.com.jpg"
            name="name"
            description="description"
            price="price"
          />
          <Menu
            imageUrl="https://media2.miaminewtimes.com/mia/imager/u/original/8502165/lung_yai_thai_tapas1-credit_billwisserphoto.com.jpg"
            name="name"
            description="description"
            price="price"
          />
        </>
      : currentCategory}
      
    </div>
  );
};

export default Content;
