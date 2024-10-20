"use client";
import React from "react";
import HeroSection from "./@components/HeroSection";
import WhyOnline from "./@components/WhyOnline";
import FindRightJob from "./@components/FindRightJob";
import GoodWorkEnvironment from "./@components/GoodWorkEnvironment";
import JobCategories from "./@components/LookingCategory";
import HiringBannerSection from "./@components/HiringBannerSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyOnline />
      <JobCategories />
      <FindRightJob />
      <GoodWorkEnvironment />
      <HiringBannerSection />
    </div>
  );
};

export default Home;
