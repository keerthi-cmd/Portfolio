import React from "react";
import type { NextPage } from "next";

import {
  About,
  Experience,
  ProfileSection,
  Skills,
  Contact,
  Projects,
  Layout,
} from "../containers";

const index: NextPage = () => {
  return (
    <>
      <Layout>
        <ProfileSection />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default index;
