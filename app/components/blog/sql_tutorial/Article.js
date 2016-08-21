import Header from '../../shared/Header';
import LandingParallax from '../../shared/LandingParallax';
import Table from './Table';
import Example from './Example';

export default class SqlTutorial extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header key="header" title="Blog" />
        <LandingParallax
          text="Yet Another SQL Tutorial"
          imageUrl="/images/big_data.jpg"
          imageOffset="90px"
          styles={{WebkitFilter: "blur(3px)"}}
        />
        <div className="content container">
          <h3>Pre-Requisites</h3>
          <p>
            I'm going to assume that you don't know a whole lot when it comes to databases; you've probably seen a lot of words floating around the internet but there are just a few too many for you to fully grasp what's going on. For this tutorial, I really want to just focus on the basics of using SQL and not worry too much about learning all the acronyms.
          </p>
          <p>
            Before starting, there is a little bit of terminology we will have to understand. A <b>database</b> is some collection of data while a <b>database management system (DBMS)</b> is a program that manages your interactions with your data. There are a lot of DBMSs out there, some examples are MySQL, PostgreSQL, MariaDB, SQLite. They all provide a ton of varying advanced features but for the most part they provide a lot of the same core functionality. That core functionality you will see is writing SQL queries to access and update your data in your database.
          </p>
          <p>
            You most likely have SQLite installed on your computer and I think it's a great system for educational purposes since it's so simple; pretty much all of the skills you learn using it are transferable to any other RDBMSs. In this tutorial, we will be focusing only on <b>relational database management systems (RDBMS)</b> which is a fancy word to describe databases that store data in tables and work with relationships between those tables.
          </p>

          <p>
            For most of this tutorial, we will be working with a sample database that stores information about movies. We will call this database NotIMDB. Feel free to follow along with examples <b>HERE (insert generate DB file here)</b>
          </p>

          <h3>Conceptual Model</h3>
          <p>
            The basic object in a RDBMS is the <b>table</b>. A table is essentially an Excel sprreadsheet that has columns/rows to hold our data. Each table should represent one type of data; our NotIMDB has one table for each of:
          </p>
          <ul>
            <li>Actors</li>
            <li>Movies</li>
            <li>Directors</li>
            <li>AppearsIn (to be described)</li>
            <li>DirectedBy (to be described)</li>
          </ul>

          <p>
            So in the Moviess table, each row would represent a single movie. What does each column represent? That depends on the <b>schema</b> of the table. The schema is essentially metadata about the table describing the name of each column, that column's type, and any other information; you can imaging the schema as the header for the table. The movies table will look something like this:
          </p>

          <Table
            query="SELECT * FROM Movies;"
          />

          <p>
            Most of the columns make sense to help describe what information we usually want to know about movies. A usually important addition is to include an <b>id</b> column to uniquely identify a movie in our table. The hallmark of why SQL is so powerful is being able to describe relationships between tables and it is helpful to have an id to uniquely identify the rows since in our case two movies may have the same name and all the information is definitely not unique.
          </p>

          <h3>Simple SQL</h3>
          <p>
            <b>SQL</b> is the language you will write queries in to read or update data in your database. Let's start with the simplest query which is to ask our DBMS to show us all of the rows in a table. We would write that as.
          </p>
          <Example
            query="SELECT * FROM MOVIES;"
          />

          <p>
            You are also able to pick which columns you want to see with a query like
          </p>

          <Example
            query="SELECT title, year FROM MOVIES;"
          />
        </div>
      </div>
    );
  }
}
