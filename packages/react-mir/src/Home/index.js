import React, { Component } from "react";
import Clock from '../Clock/';
import Counter from '../Counter/';

class Home extends Component {
  render() {
    return (
      <main>
        <h1>Make it Real! Home</h1>
        <section className="clocks">
          <Clock />
        </section>
        <section className="counters">
          <Counter name={"1"} />
          <Counter name={"2"} />
          <Counter name={"3"} />
        </section>
      </main>
    );
  }
}

export default Home;
