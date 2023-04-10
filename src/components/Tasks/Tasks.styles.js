import { createUseStyles } from "react-jss";

export const useTasksStyle = createUseStyles({
  parent: {
    background: "#333333",
    color: "white",
    height: "100%",
    width: "100%",
  },
  menu: {
    width: "100%",
    minHeight: "50px",
    position: "fixed",
    zIndex: "10",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#535353",
    "& div a button": {
      "@media (max-width: 550px)": {
        fontSize: "12px",
        padding: 3,
      },
    },
  },
  main: {
    paddingTop: "120px",
    width: "100%",
    background: "#333333",
  },
  table: {
    margin: "auto",
    width: "80%",
    textAlign: "center",
    "& table, thead, tr, tbody": {
      width: "100%",
    },

    "& td": {
      textAlign: "center",
      padding: "16px",
      "@media (max-width: 850px)": {
        padding: "6px",
      },
    },

    "& tr:nth-child(even) ": {
      backgroundColor: "gray",
      color: "black",
    },
  },

  "@media (max-width: 600px)": {
    parent: { fontSize: "12.5px" },
  },
});
