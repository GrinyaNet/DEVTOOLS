import "core-js/modules/es.array.sort.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { getItem } from './storage.js';
const listElem = document.querySelector('.list');
const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  ;
  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
};
const createCheckbox = _ref => {
  let {
    done,
    id
  } = _ref;
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  return checkboxElem;
};
const createListItem = _ref2 => {
  let {
    text,
    done,
    id
  } = _ref2;
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item', 'list-item');
  const checkboxElem = createCheckbox({
    done,
    id
  });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  const textElem = document.createElement('span');
  textElem.classList.add('list__item__text');
  textElem.textContent = text;
  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.setAttribute('data-id', id);
  deleteBtnElem.classList.add('list__item__delete-btn');
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};
export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);
  listElem.append(...tasksElems);
};