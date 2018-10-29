import React from "react";
import Layout from '../components/layout';
import TeamHeader from '../components/team/TeamHeader';
import SectionTribe from '../components/team/SectionTribe';
import SectionMembers from '../components/team/SectionMembers';
import SectionScript from '../components/team/SectionScript';
import SectionContact from '../components/team/SectionContact';

export default () => {
  return (<Layout team>
      <TeamHeader/>
      <SectionTribe/>
      <SectionMembers/>
      <SectionScript/>
      <SectionContact/>
    </Layout>
  )}
