import { useRef } from 'react' /*USE STATE HOOK*/
import '../styles/SkillsPage.css'
import SkillList from './SkillList.js'
import { Icon } from '@iconify/react';

export default function SkillsPage() {
    const skill1 = {        
        header: 'Front-End',
        content: 'HTML',
        content2: 'CSS',
        content3: 'JavaScript',
        content4: 'Bootstrap',
        content5: null,
        content6: 'React',
        icon: <Icon icon="vscode-icons:file-type-html" width="50" height="50" />,
        icon2: <Icon icon="vscode-icons:file-type-css" width="50" height="50" />,
        icon3: <Icon icon="logos:javascript" width="50" height="50" />,
        icon4: <Icon icon="logos:bootstrap" width="50" height="50" />,
        icon5: null,
        icon6: <Icon icon="logos:react" width="50" height="50" />,
        skillNum: '1'
    }
    const skill2 = {
        header: 'Back-End',
        content: 'NodeJS',
        content2: 'MongoDB',
        content3: '.NET',
        content4: 'SQL / MySQL',
        content5: 'MariaDB',
        content6: 'Firebase',
        icon: <Icon icon="vscode-icons:file-type-node" width="50" height="50" />,
        icon2: <Icon icon="logos:mongodb-icon" width="50" height="50" />,
        icon3: <Icon icon="vscode-icons:file-type-asp" width="50" height="50" />,
        icon4: <Icon icon="vscode-icons:file-type-sql" width="50" height="50" />,
        icon5: <Icon icon="logos:mariadb-icon" width="50" height="50" />,
        icon6: <Icon icon="logos:firebase" width="50" height="50" />,
        skillNum: '2'
    }
    const skill3 = {
        header: 'Misc',
        content: 'Photoshop',
        content2: 'NPM',
        content3: 'After Effects',
        content4: 'Azure',
        content5: 'Figma',
        content6: 'AWS',
        icon: <Icon icon="logos:adobe-photoshop" width="50" height="50" />,
        icon2: <Icon icon="vscode-icons:file-type-npm" width="50" height="50" />,
        icon3: <Icon icon="logos:adobe-after-effects" width="50" height="50" />,
        icon4: <Icon icon="logos:microsoft-azure" color="orange" width="50" height="50" />,
        icon5: <Icon icon="logos:figma" width="50" height="50" />,
        icon6: <Icon icon="mdi:aws" color="orange" width="50" height="50" />,
        skillNum: '3'
    }
    const skills = useRef([skill1, skill2, skill3]);

  return (
    <>
    <section className="section-transform hide-section portfolio active" id="portfolio">
        <div className="main-title">
          <h2>Ski<span>lls</span><div className="bg-text">skills</div></h2>
        </div>
        <div className="skills-section"><SkillList skills={skills.current} /></div>
    </section>
    </>
  )
}
