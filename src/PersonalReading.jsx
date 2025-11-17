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
      <TitleSection Name ="PERSONAL"/>
<PersonalDetaileFile />
 {/* <TableComponents /> */}
        <TableComponents classes={["Test 1 DATE: ", "Test 2 DATE: ", "Test3 DATE: ", "REMARK "]} nepaliclasses={["Test 1 DATE: ", "Test 2 DATE: ", "Test3 DATE: ", "REMARK "]} />

      <IssusedDate />
      <Footer />
    </>
  );
};