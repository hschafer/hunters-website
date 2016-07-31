import Header from '../../shared/Header';
import LandingParallax from '../../shared/LandingParallax';
import Table from './Table';

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
          <h3>Introduction</h3>
          <p>
            When I decided to make a personal website, I did it mainly to learn new technologies, show off things I have made, and get a chance writing tutorials for material I find interesting. I have spent 2 years as a teaching assistant for the introductory computer science classes at the University of Washington; and while I've had a lot of practice teaching in front of a class, I have not really practice my ability to write a tutorial that someone can sit through on their own time to figure out.
          </p>
          <p>
            In all honesty, this tutorial is as much for me as it is for you; I want to figure out if this medium is right for me and if I'm any good at this type of writing. I have a suspicion that spending time making good visualizations will help but who knows!
          </p>

          <h3>Pre-Requisites</h3>
          <p>
            I'm going to assume that you don't know a whole lot when it comes to databases; you've probably seen a lot of words floating around the internet but there are just a few too many for you to fully grasp what's goig on. For this tutorial, I really want to just focus on the basics of <b>relation databases</b> or what people commonly refer to as a <b>SQL</b> database.
          </p>
          <p>
            Before starting, there is a little bit of terminology we will have to understand. A <b>database</b> is some collection of data while a <b>database management system (DBMS)</b> is a program that manages your intereactions with your data. There are a lot of DBMSs out there, some examples are MySQL, PostgreSQL, MariaDB, SQLite. They all provide a ton of varying advanced features but for the most part they provide a lot of the same core functionality. That core functionality you will see is writing SQL queries to access and update your data in your database. You most likely have SQLite installed on your computer and I think it's a great system for educational purposes since it's so simple; pretty much all of the skills you learn using it are transferrable to any other RDBMS. Notice how I said RDBMS instead of DBMS in that last sentence. In this tutorial, we will be focusing only on <b>relational database management systems (RDBMS)</b> which is a fancy word to describe databases that store data in tables and work with relationships between those tables.
          </p>

          <p>
            For most of this tutorial, we will be working with a sample database that stores information about movies. We will call this database NotIMDB.
          </p>

          <h3>Tables, Tables, Tables</h3>
          <p>
            Think back to how we would store all our information about movies, actors, and directors in the world before databases. We would probably want to keep it in a file so we could access it later, but would you store it all in one big file? Probably not. Why? It would be really hard to read and maintain!
          </p>
          <p>
            So one big file won't work, what if we break it up into a few files instead depending on what type of data is in that file. We will have one file for actors, one file for directors, and one file for movies. Great idea, stranger reading this tutorial! Within a file, it might make sense to have some sanity in how you organize the data. Instead of storing them in Word documents where each actor has a pargraph description, it would be much easier for you to organize if you stored it in Excel and each row in the spreadhsheet corresponded to one piece of data (in this case an actor). This is essentially what we do with an RDBMS! Each type of data (actors, directors, movies, etc) will be stored in a <b>table</b> and each table will have a predefined set of columns (name, age, agent, etc) that each entry in the table should have. This defined set of columns is called the <b>schema</b> of the table and defines what data each entry in the table will have.
          </p>

          <p>
            Here is an example of a table for Movies in our NotIMDB database.
          </p>
          <Table
            schema={["Title", "Genre", "Year", "Average Review Rating", "Content Rating"]}
            data={[
              ["Howl's Moving Castle", "Animated", "2004", "8.2", "PG"],
              ["The Dark Knight", "Action", "2008", "9.0", "PG-13"]
            ]}
          />
        </div>
      </div>
    );
  }
}
