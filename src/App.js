import React from "react";

function App() {
  return (
    <div>
      <div className="container-contact100">
        <div
          className="contact100-map"
          id="google_map"
          data-map-x="40.722047"
          data-map-y="-73.986422"
          data-pin="images/icons/map-marker.png"
          data-scrollwhell="0"
          data-draggable="1"
        ></div>

        <div className="wrap-contact100">
          <span className="contact100-form-symbol">
            <img src="assets/images/icons/symbol-01.png" alt="SYMBOL-MAIL" />
          </span>

          <form className="contact100-form validate-form flex-sb flex-w">
            <span className="contact100-form-title">
              Become smarter in just 5 minutes
            </span>

            <span className="contact100-form-subtitle">
              Get the daily email that makes reading the news actually
              enjoyable. Stay informed and entertained, for free.
            </span>

            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
                aria-label="Enter email"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
