import { deleteTask, toggleDarkMode, addTask, toggleTask } from "./uitils.js";

import {
  taskListElement,
  taskListLink,
  taskSearchBarButton,
  darkThemeToggle,
  getCheckboxElement,
  getDeletIcons,
} from "./elements.js";

export const initTaskListenrs = () => {
  getDeletIcons().forEach((icon, index) => {
    icon.addEventListener("click", (e) => deleteTask(e, index));
  });
  getCheckboxElement().forEach((box, index) => {
    box.addEventListener("click", (e) => toggleTask(e, index));
    box.addEventListener(
      "keydown",
      (e) => e.key === "Enter" && toggleTask(e, index),
    );
  });
};

export const initListeners = () => {
  darkThemeToggle?.addEventListener("click", toggleDarkMode);
  taskSearchBarButton.addEventListener("click", addTask);
  taskListLink.addEventListener("click", () => {
    taskListElement.classList.toggle("TaskList__list--hideCompleted");
    taskListLink.classList.toggle("TaskList__link--isActive");
  });
};
