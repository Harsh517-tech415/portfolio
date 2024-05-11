import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const themeActions = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode(state, action) {
      const htmlElement = document.querySelector("html");
      htmlElement.classList.toggle(
        "dark",
        !htmlElement.classList.contains("dark")
      );
    },
    scrollToAbout(state, action) {
      const aboutElement = window.document.getElementById("about");
      aboutElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    },
    scrollToProject(state, action) {
      const projectElement = window.document.getElementById("project");
      projectElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    },
    scrollToContact(state, action) {
      const contactElement = window.document.getElementById("contact");
      contactElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    },
  },
});

export default themeActions.reducer;
export const { toggleMode, scrollToAbout, scrollToProject, scrollToContact } =
  themeActions.actions;
