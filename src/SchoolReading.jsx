import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { TitleSection } from "./components/TitleSection";
import DetaileFile from "./components/DetaileFile";
import TableComponents from "./components/TableComponents";

export const SchoolReading = () => {
  return (
    <>
      <div className="schoolReading">
        <Header></Header>
        <TitleSection Name={"SCHOOL"} />
        <DetaileFile></DetaileFile>
        <TableComponents
          classes={["UKG ", " 1 ", " 2 ", " 3 "]}
          nepaliclasses={["युकेजी", " १", " २", " ३"]}
        />

        {/* <TableComponents /> */}
        <Footer />
      </div>
    </>
  );
};
