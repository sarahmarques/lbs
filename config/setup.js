import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};

// jest.mock('next/dynamic', () => ({
//   __esModule: true,
//   default: (...props) => {
//     const matchedPath = /(.)*(\'(.*)\')(.)*/.exec(props[0].toString());
//     if (matchedPath) return require(matchedPath[3]);
//     else return () => <></>;
//   },
// }));

// added for Slider from "react-slick"
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
