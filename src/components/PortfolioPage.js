import { useRef } from 'react' /*USE STATE HOOK*/
import '../styles/PortfolioPage.css'
import CardList from './CardList.js'
import todoListPic from '../img/todoListPic.png'
import notflix from '../img/notflix.png'
import billieJeansAutoPic from '../img/billieJeansAutoPic.png'
import crudZoologyPic2 from '../img/crudZoologyPic2.png'

export default function PortfolioPage() {
    const project1 = {        
        header: 'To-Do List',
        content: 'You know you\'re not going to remember what it is you need to do. Use my To-Do List.',
        link1: 'https://github.com/clintonhpat/react-to-do-list',
        link2: 'https://reacttodolist.onrender.com/',
        image: todoListPic,
        cardNum: '1',
        hasQA: false,
        qaLink: 'https://your-test-cases-link1.com'
    }
    const project2 = {
        header: 'Netflix Clone',
        content: 'Looks like Netflix, but it\'s Notflix',
        link1: 'https://github.com/clintonhpat/netflix-clone-react',
        link2: 'https://netflixclonereact.onrender.com/',
        image: notflix,
        cardNum: '2',
        hasQA: true,
        qaLink: 'https://docs.google.com/document/d/1Ipf4XDVp13ce9CMBpkj25CwcnZtcLqAL/edit?usp=drive_link&ouid=117839534229967755259&rtpof=true&sd=true'
    }
    const project3 = {
        header: 'CRUD Zoology',
        content: 'A Zoology Crud database of Animals and their respective classes.',
        link1: 'https://github.com/clintonhpat/crud-zoology-api/tree/main/ZoologyCRUDApi',
        link2: 'https://crudzoologyapp.onrender.com',
        image: crudZoologyPic2,
        cardNum: '3',
        hasQA: true,
        qaLink: 'https://docs.google.com/document/d/1zheDnZpzSHG9w0Qe9rvMLj5lDsWd2Zmw/edit?usp=sharing&ouid=117839534229967755259&rtpof=true&sd=true'
    }
    const project4 = {        
        header: 'Ticket Sys',
        content: 'An app to assist companies in keeping track of tasks/employee activity',
        link1: 'https://github.com/clintonhpat/BillieJeansAuto-Api',
        link2: 'https://billiejeansauto.onrender.com',
        image: billieJeansAutoPic,
        cardNum: '4',
        hasQA: true,
        qaLink: 'https://docs.google.com/document/d/1N7AIbKs5oV00kn4DtfWmITtdef5rM482/edit?usp=drive_link&ouid=117839534229967755259&rtpof=true&sd=true'
    }
    const projects = useRef([project1, project2, project3, project4]);

    return (
        <>
            <section className="section-transform hide-section portfolio active" id="portfolio">
                <div className="main-title">
                    <h2>Proj<span>ects</span><div className="bg-text">projects</div></h2>
                </div>
                <div className="projects-section"><CardList projects={projects.current} /></div>
            </section>
        </>
    )
}
