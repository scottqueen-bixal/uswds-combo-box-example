import React from "react";
import '../node_modules/uswds/dist/css/uswds.min.css';
import USWDS from "../node_modules/uswds/src/js/components";
const { comboBox } = USWDS;

const App = () => {
  const ref = document.body;
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    // initialize
    comboBox.on(ref);
    // default ref is document.body,
    // if you want to use default you do not have to pass arguments

    // remove event listeners when component un-mounts.
    return () => {
      comboBox.off();
    };
  });

  function page1() {
    return (
      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-col">
            <form class="usa-form">
              <label class="usa-label" for="fruit">
                Select a fruit
              </label>
              <div class="usa-combo-box">
                <select class="usa-select" name="fruit" id="fruit">
                  <option value>Select a fruit</option>
                  <option value="apple">Apple</option>
                  <option value="apricot">Apricot</option>
                  <option value="avocado">Avocado</option>
                  <option value="banana">Banana</option>
                  <option value="blackberry">Blackberry</option>
                  <option value="blood orange">Blood orange</option>
                  <option value="blueberry">Blueberry</option>
                  <option value="boysenberry">Boysenberry</option>
                  <option value="breadfruit">Breadfruit</option>
                </select>
              </div>
            </form>
            <button className="usa-button" onClick={() => setPage(2)}>
              Go to page 2
            </button>
          </div>
        </div>
      </div>
    );
  }

  function page2() {
    return (
      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-col">
            <button className="usa-button" onClick={() => setPage(1)}>
              Go to page 1
            </button>
          </div>
        </div>
      </div>
    );
  }

  return page === 1 ? page1() : page2();
};

export default App;
