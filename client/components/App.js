import React, { Component } from 'react';

import '../scss/main.scss';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

  return (
    <div>
      <section>
        <div class="float-left--side">
          <h1>hello</h1>
        </div>
        <div class="float-right--side">
          <form name="contact" method="POST" netlify-honeypot="bot-field" netlify>
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Property Address: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Phone Number: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </section>
    </div>
    );
  }
}

export default App;
