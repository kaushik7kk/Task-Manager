import React from "react";
import Topbar from "../../../components/Topbar";
import Dashboard from "../../../components/dashboard/Dashboard";
import { useSelector } from "react-redux";
import FormWindow from "../../../components/FormWindow";

export default function CategoryPage() {

  // Visbility state for displaying form.
  const formVisibility = useSelector((state) => state.forms);
  // Category state for data and type loading.
  const categories = useSelector(state => state.categories);

  return (
    <>
      {formVisibility.visibility ? (
        <>
          <FormWindow type={categories.type} />
          <Topbar />
          <Dashboard page={categories} />
        </>
      ) : (
        <>
          <Topbar />
          <Dashboard page={categories} />
        </>
      )}
    </>
  );
}
