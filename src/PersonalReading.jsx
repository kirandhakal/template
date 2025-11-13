import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import PersonalDetaileFile from "./components/PersonalDetaileFIle";
import { TitleSection } from "./components/TitleSection";
import TableComponents from "./components/TableComponents";

import { IssusedDate } from "./components/IssusedDate";
export const PersonalReading = () => {
  return (
    <>
      <Header></Header>
      <TitleSection />
<PersonalDetaileFile />
        <TableComponents />
      <IssusedDate />
      <Footer />
    </>
  );
};
