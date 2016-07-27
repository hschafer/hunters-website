import Header from '../shared/Header';
import LandingParallax from '../shared/LandingParallax';

export default class SqlTutorial extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header key="header" title="Blog" />
        <LandingParallax
          text="Yet Another SQL Tutorial"
          imageUrl="/images/big_data.jpg"
          imageOffset="115px"
          styles={{WebkitFilter: "blur(3px)"}}
        />
        <div className="content container">
          <h3>Introduction</h3>
          <p>
            When I decided to make a personal website, I did it mainly to learn new technologies, show off things I have made, and get a chance writing tutorials for material I find interesting. I have spent 2 years as a teaching assistant for the introductory computer science classes at the University of Washington; and while I've had a lot of practice teaching in front of a class, I have not really practice my ability to write a tutorial that someone can sit through on their own time to figure out.
          </p>
          <p>
            In all honesty, this tutorial is as much for me as it is for you; I want to figure out if this medium is right for me and if I'm any good at this type of writing. I have a suspicion that spending time making good visualizations will help but who knows!
          </p>

          <h3>Pre-Requisites</h3>
          <p>
            I'm going to assume that you don't know a whole lot when it comes to databases; you've probably seen a lot of words floating around the internet like DB, SQL, DBMS, NoSQL, OLAP, OLTP, NewSQL, ACID, BASE, ZDEF. Okay, I'll admit the last one is made up, but you wouldn't know it because the databases community LOVES acronyms. We will forget a lot of those exist for now and just to focus on the basics.
          </p>
          <p>
            A <b>database (DB)</b> is some collection of data; your tax returns, a box full a seashells, some other collection of business things are just a couple of examples but usually we are referring to a collection of data on some computer. a <b>Database Management System (DBMS)</b> is a program that manages a DB. We are only a few paragraphs in and this stuff is making so much sense! So we have data and a thing to manage data, but what do we actually do with it? How do we actually interact with our data? This is where the <b>Simple Query Language (SQL)</b> comes in. In order to talk to the DBMS, you will be writing SQL queries to either get data or update data.
          </p>
        </div>
      </div>
    );
  }
}
