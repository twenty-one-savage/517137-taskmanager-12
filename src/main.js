import {createAppMenuTemplate} from './view/menu.js';
import {createAppFilterTemplate} from './view/filter.js';
import {createAppDeskTemplate} from './view/desk.js';
import {createAppSortTemplate} from './view/sort.js';
import {createAppTaskTemplate} from './view/task.js';
import {createAppButtonLoadTemplate} from './view/button-load.js';
import {createAppTaskEditTemplate} from './view/task-edit.js';
import {generateTask} from './mock/task.js';
import {generateFilter} from './mock/filter.js';

const TASKS_COUNT = 22;
const TASK_COUNT_PER_STEP = 8;

const tasks = new Array(TASKS_COUNT).fill().map(generateTask);

const filters = generateFilter(tasks);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const appMainElement = document.querySelector(`.main`);

const appHeaderElement = appMainElement.querySelector(`.main__control`);

render(appHeaderElement, createAppMenuTemplate(), `beforeend`);

render(appMainElement, createAppFilterTemplate(filters), `beforeend`);

render(appMainElement, createAppDeskTemplate(), `beforeend`);

const appDeskElement = appMainElement.querySelector(`.board`);

render(appDeskElement, createAppSortTemplate(), `afterbegin`);

const appTasksListElement = appDeskElement.querySelector(`.board__tasks`);

render(appTasksListElement, createAppTaskEditTemplate(tasks[0]), `afterbegin`);

for (let i = 1; i < Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {
  render(appTasksListElement, createAppTaskTemplate(tasks[i]), `beforeend`);
}

if (tasks.length > TASK_COUNT_PER_STEP) {
  let renderedTaskCount = TASK_COUNT_PER_STEP;

  render(appDeskElement, createAppButtonLoadTemplate(), `beforeend`);

  const loadMoreButton = appDeskElement.querySelector(`.load-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    tasks
      .slice(renderedTaskCount, renderedTaskCount + TASK_COUNT_PER_STEP)
      .forEach((task) => render(appTasksListElement, createAppTaskTemplate(task), `beforeend`));

    renderedTaskCount += TASK_COUNT_PER_STEP;

    if (renderedTaskCount >= tasks.length) {
      loadMoreButton.remove();
    }
  });
}
