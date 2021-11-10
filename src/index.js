import _ from "lodash";
import "./style.scss";

function component() {
  const element = document.createElement("div");
  const innerElement = document.createElement("div");
  const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
  const billo = (array) => array[0];
  console.log(billo(array));
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  innerElement.innerHTML = _.join(["Hello", "webpack"], " ");
  element.append(innerElement);
  innerElement.classList.add("hello2");

  return element;
}

document.body.appendChild(component());
