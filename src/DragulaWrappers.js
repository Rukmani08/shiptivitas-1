
import dragula from 'dragula';

const DragulaWrappers = (containers) => {
  dragula(containers, {

    isContainer: function (el) {
        return false; // only elements in drake.containers will be taken into account
      },
      moves: function (el, source, handle, sibling) {
        return true; // elements are always draggable by default
      },
      accepts: function (el, target, source, sibling) {
        return true; // elements can be dropped in any of the `containers` by default
      },
      invalid: function (el, handle) {
        return false; // don't prevent any drags from initiating by default
      },
    // options here, e.g.:
   
    revertOnSpill: true,
    dragend: (el) => {
      const swimlane = el.closest('.swimlane');
      const color = swimlane.dataset.color; // Assume color is stored in data-color attribute
      el.style.backgroundColor = color;
       
      el.querySelector('.Card').style.backgroundColor = color;
    }
  });
};

export default DragulaWrappers;