import {createAppMenuTemplate} from './view/menu.js';
import {createAppFilterTemplate} from './view/filter.js';
import {createAppDeskTemplate} from './view/desk.js';
import {createAppSortTemplate} from './view/sort.js';
import {createAppTaskTemplate} from './view/task.js';
import {createAppButtonLoadTemplate} from './view/button-load.js';
import {createAppTaskEditTemplate} from './view/task-edit.js';

const TASKS_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const appMainElement = document.querySelector(`.main`);

const appHeaderElement = appMainElement.querySelector(`.main__control`);

render(appHeaderElement, createAppMenuTemplate(), `beforeend`);

render(appMainElement, createAppFilterTemplate(), `beforeend`);

render(appMainElement, createAppDeskTemplate(), `beforeend`);

const appDeskElement = appMainElement.querySelector(`.board`);

render(appDeskElement, createAppSortTemplate(), `afterbegin`);

const appTasksListElement = appDeskElement.querySelector(`.board__tasks`);

render(appTasksListElement, createAppTaskEditTemplate(), `afterbegin`);

for (let i = 0; i < TASKS_COUNT; i++) {
  render(appTasksListElement, createAppTaskTemplate(), `beforeend`);
}

render(appDeskElement, createAppButtonLoadTemplate(), `beforeend`);
