require('../../../public/css/main.css')

import FlatButton from 'material-ui/FlatButton';
import ActionDns from 'material-ui/svg-icons/action/dns';
import NotificationPersonalVideo from 'material-ui/svg-icons/notification/personal-video';
import { Link } from 'react-router';

import ProjectCard from './ProjectCard';
import Section from './Section';
import Header from '../shared/Header';
import ImplementationDrawer from '../shared/ImplementationDrawer';
import LandingParallax from '../shared/LandingParallax';
import MaterializeCssIcon from '../svg/MaterializeCssIcon';
import NGINXIcon from '../svg/NGINXIcon';
import NodeIcon from '../svg/NodeIcon';
import ReactIcon from '../svg/ReactIcon';
import WebpackIcon from '../svg/WebpackIcon';


const IMPLEMENTED_WITH = [
  {
    name: "Front-End",
    icon: NotificationPersonalVideo,
    items: [
      {
        name: "React",
        icon: ReactIcon,
        href: "https://facebook.github.io/react/"
      },
      {
        name: "Materialize CSS",
        icon: MaterializeCssIcon,
        href: "http://materializecss.com/"
      }
    ]
  },
  {
    name: "Back-End",
    icon: ActionDns,
    items: [
      {
        name: "Node.js",
        icon: NodeIcon,
        href: "https://nodejs.org/en/"
      },
      {
        name: "NGINX",
        icon: NGINXIcon,
        href: "https://www.nginx.com/"
      },
      {
        name: "Webpack",
        icon: WebpackIcon,
        href: "https://webpack.github.io"
      }
    ]
  }
];

var PROJECTS = [
    [
        {
            name: "Campus Paths - Web",
            image: "/images/campusmaps_small.jpg",
            description: "In our Software Design & Implementation class, we developed a Java GUI application that could find paths between buildings on campus in order to learn about GUI creation and practice the MVC pattern. I took the project an extra step by making it a web app.",
            link: "campusmaps",
            codeLink: "request_permission"
        },
        {
            name: "Personal Website",
            image: "images/website.png",
            description: "Hold onto your hat, it's about to get meta! I wanted to put a link here since I've spent some time on this and I wanted to share the code. If you find a bug, please file an issue on GitHub!",
            link: "/",
            codeLink: "https://github.com/hschafer/hunters-website"
        }
    ],
    [
        {
            name: "Networms Collaborative Editor",
            image: "images/editor.png",
            description: "In our networks class, we were given the opportunity to implement anything we wanted that relates to networks in some way. My team and I developed a collaborative editor that allows multiple users to edit a document together.",
            link: "/editor",
            codeLink: "https://github.com/hschafer/collaborative-editor"
        },
        {
            name: "PolitifactViz",
            image: "images/politifactviz.png",
            description: "TODO",
            link: "/politifact_viz",
            codeLink: "https://github.com/hschafer/hunters-website"
        }
    ]
];

function makeProjectCard(data) {
    return <ProjectCard
        projectName={data.name}
        projectImage={data.image}
        projectDescription={data.description}
        projectLink={data.link}
        codeLink={data.codeLink}
     />;
}

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header title="Hunter Schafer"/>
        <LandingParallax
          text="Hello"
          imageUrl="images/dock.jpg"
          imageOffset="405px"
        />
        <div className="container">
          <Section title="Bio">
            <div className="bio row valign-wrapper">
              <div className="col s4">
                <img className="headshot circle z-depth-1" src="images/hunter.jpg" />
              </div>
              <div className="col s8">
                <h2>Hunter Schafer</h2>
                <p className="promo-caption">University of Washington</p>
                <p className="promo-caption">Combined Bachelors / Masters of Computer Science</p>
                <p className="grey-text">&lt;Insert description you want me to have here &gt;</p>
              </div>
            </div>
          </Section>
          <Section title="Projects">
            {PROJECTS.map(function(projectRow) {
                return <div className="row">
                    {makeProjectCard(projectRow[0])}
                    {projectRow.length > 1 ? makeProjectCard(projectRow[1]) : null}
                </div>;
            })}
          </Section>
        </div>
        <ImplementationDrawer components={IMPLEMENTED_WITH} />
      </div>
    );
  }
}
