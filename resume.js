const data = {
  name: 'Paula Pereira',
  mainEmoji: {
    character: '🐥',
    ariaLabel: 'chick',
  },
  phoneNumber: '000.000.0000',
  email: 'ppereira1@rbi.com',
  githubHandle: 'andyweiss1982',
  linkedInHandle: 'paulanfpereira',
  headingEmojis: {
    workExperience: {
      character: '‍👩🏽‍💻',
      ariaLabel: 'computer-woman',
    },
    educationExperience: {
      character: '👩🏽‍🎓',
      ariaLabel: 'graduate-woman',
    },
    skills: {
      character: '⚙️',
      ariaLabel: 'tool',
    },
  },
  workExperiences: [
    {
      emoji: '🔍',
      ariaLabel: 'magnifier',
      jobTitle: 'Organizational Behavior Research Assistant',
      institution: 'The Wharton School Management Department',
      dates: '2019 - 2020',
      details: [
        'Administered a two-week field experiment with 600+ participants using Qualtrics surveys in order to gather insights about the effects if daily commute habits and mindset on engagement at work',
        'Analyzed qualitative results using a custom code, as well as self-taught and applied Latent Dirichlet Allocation to contribute to research findings',
      ],
    },
    {
      emoji: '☕️',
      ariaLabel: 'coffee',
      jobTitle: 'Manager, Insights and Category Development',
      institution: 'Restaurant Brands International',
      dates: '2020 - present',
    },
    {
      emoji: '🍸',
      ariaLabel: 'martini',
      jobTitle: 'Head of Marketing',
      institution: 'Cãna Brazilian Cachaça',
      dates: '2019 - 2020',
      details: [
        'Developed and exercuted a go-to-market plan to launch a premium Brazilian cachaca brand to meet the demand for craft and premiumization of the psirits in the US market',
        'Managed marketing tactics such as the delivery of relevant video communication through social media channels, scaling a promotional events model and building key brand partnerships, which contributed to product placement in 10+ on and off premise NY locations in four months since launch',
        'Lead sprint e-commerce development and digital ads through Facebook and Google',
      ],
    },
    {
      emoji: '🏈',
      ariaLabel: 'football',
      jobTitle: 'Manager of Athlete & Brand Strategy',
      institution: 'Talent Resources Sports',
      dates: '2015 - 2018',
      details: [
        'Oversaw the sports division team, as well as directed project operations management including but not limited to pitch development, partnership and sponsorship outreach, vendor negotiations, budget and P&L management',
        'Produced experiential events at Super Bowl and NBA All-Star 2018 for top consumer brands like Mercedes-Benz and Under Armour',
        'Implemented the Sports divisions first CRM system by leading procurement and compiling a database of over 15,000+ clients using Copper',
      ],
    },
    {
      emoji: '🤝',
      jobTitle: 'Software Developer',
      ariaLabel: 'handshake',
      institution: 'Consultant',
      dates: '2014 - present',
      details: [
        'Design and develop web and native applications for existing businesses and startups',
        'Work with clients to test and revise assumptions throughout application development',
      ],
    },
  ],
  educationalExperiences: [
    {
      emoji: '📓',
      ariaLabel: 'notebook',
      university: 'University of Pennsylvania',
      school: 'The College of Liberal and Professional Studies',
      dates: '2019 - 2020',
      details: [
        'Master of Behavioral and Decision Sciences',
      ],
    },
    {
      emoji: '🦁',
      ariaLabel: 'lion',
      university: 'Columbia University',
      school: 'School of Professional Studies',
      dates: '2018 - 2019',
      details: [
        'Advanced Graduate Certificate in Business',
      ],
    },
    {
      emoji: '💙',
      ariaLabel: 'blue-heart',
      university: 'University of Pennsylvania',
      school: 'School of Arts and Sciences',
      dates: '2013 - 2017',
      details: [
        'Major: Communications, Annenberg School, Minor: Consumer Psychology, Wharton',
      ],
    },
  ],
  skills: [
    {
      emoji: '⚙️',
      ariaLabel: 'tool',
      dates: '1994 - present',
      skillone: 'Languages',
      skilltwo: 'Frameworks',
      details: [
        'R, HTML, CSS, JavaScript',
        'Native Portugues, Fluent English, Intermediate French and Spanish',
      ],
    },
  ],
};

document.title = data.name;

const name = document.querySelector('#name');
name.textContent = data.name;

const emojiContainer = document.querySelector('h1 span[role="img"]');
emojiContainer.textContent = data.mainEmoji.character;
emojiContainer.setAttribute('aria-label', data.mainEmoji.ariaLabel);

const phoneNumberContainer = document.querySelector('#phone-number');
phoneNumberContainer.textContent = data.phoneNumber;
const phoneLink = document.querySelector('li:nth-child(1) a');
phoneLink.href += data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;
const emailLink = document.querySelector('li:nth-child(2) a');
emailLink.href += data.email;

const githubContainer = document.querySelector('#github-link');
githubContainer.textContent += data.githubHandle;
const githubLink = document.querySelector('li:nth-child(3) a');
githubLink.href += data.githubHandle;

const linkedInContainer = document.querySelector('#linkedin-link');
linkedInContainer.textContent += data.linkedInHandle;
const linkedInLink = document.querySelector('li:nth-child(4) a');
linkedInLink.href += data.linkedInHandle;

const workExperienceHeadingEmojiContainer = document.querySelector(
  "h2:nth-of-type(1) span[role='img']"
);
workExperienceHeadingEmojiContainer.textContent =
  data.headingEmojis.workExperience.character;
workExperienceHeadingEmojiContainer.setAttribute(
  'aria-label',
  data.headingEmojis.workExperience.ariaLabel
);
const educationalExperienceHeadingEmojiContainer = document.querySelector(
  "h2:nth-of-type(2) span[role='img']"
);
educationalExperienceHeadingEmojiContainer.textContent =
  data.headingEmojis.educationExperience.character;
educationalExperienceHeadingEmojiContainer.setAttribute(
  'aria-label',
  data.headingEmojis.educationExperience.ariaLabel
);
const skillsHeadingEmojiContainer = document.querySelector(
  "h2:nth-of-type(3) span[role='img']"
);
skillsHeadingEmojiContainer.textContent = data.headingEmojis.skills.character;
skillsHeadingEmojiContainer.setAttribute(
  'aria-label',
  data.headingEmojis.skills.ariaLabel
);

function renderWorkExperience(workExperience) {
  return `
  <div>
    <span class="date">${workExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${workExperience.ariaLabel}">${
    workExperience.emoji
  }</span>
      ${workExperience.jobTitle}<span class="comma">,</span>
      <span class="light">${workExperience.institution}</span>
    </h3>
    <ul>
      ${workExperience.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
}

const workExperienceContainer = document.querySelector('#work-experience');
const eachWorkExperienceHTML = data.workExperiences.map(renderWorkExperience);
const allWorkExperiencesHTML = eachWorkExperienceHTML.join('');
workExperienceContainer.innerHTML = allWorkExperiencesHTML;

const renderEducationalExperience = educationalExperience => `
  <div>
    <span class="date">${educationalExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${educationalExperience.ariaLabel}">${
  educationalExperience.emoji
}</span>
      ${educationalExperience.university}<span class="comma">,</span>
      <span class="light">${educationalExperience.school}</span>
    </h3>
    <ul>
      ${educationalExperience.details
        .map(detail => `<li>${detail}</li>`)
        .join('')}
    </ul>
  </div>`;

const educationContainer = document.querySelector('#education');
const eachEducationalExperienceHTML = data.educationalExperiences.map(
  renderEducationalExperience
);
const allEducationalExperiencesHTML = eachEducationalExperienceHTML.join('');
educationContainer.innerHTML = allEducationalExperiencesHTML;

function renderSkills(skill) {
  return `
  <div>
    <span class="date">${skill.dates}</span>
    <h3>
      <span role="img" aria-label="${skill.ariaLabel}">${skill.emoji}</span>
      ${skill.skillone}<span class="comma">,</span>
      <span class="light">${skill.skilltwo}</span>
    </h3>
    <ul>
    ${skill.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
}
const skillContainer = document.querySelector(`#skills`);
const eachSkillHTML = data.skills.map(renderSkills);
const allSkillsHTML = eachSkillHTML.join('');
skillContainer.innerHTML = allSkillsHTML;
