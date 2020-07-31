const data = {
  name: 'Paula Pereira',
  mainEmoji: {
    character: '🙃',
    ariaLabel: 'smile',
  },
  phoneNumber: '000.000.0000',
  email: 'ppereira1@rbi.com',
  githubHandle: 'paulapereira1',
  linkedInHandle: 'paulanfpereira',
  workExperiences: [
    {
      emoji: "☕️",
      jobTitle: "Manager, Insights & Category Development",
      institution: "Tim Hortons, Restaurant Brands International",
      dates: "2020 - Present", 
    },
    {
      emoji: "🍸",
      jobTitle: "Head of Marketing",
      institution: "Cãna Brazilian Cachaça",
      dates: "2019 - 2020",
      details: [
      "Developed and exercuted a go-to-market plan to launch a premium Brazilian cachaca brand to meet the demand for craft and premiumization of the psirits in the US market",
      "Managed marketing tactics such as the delivery of relevant video communication through social media channels, scaling a promotional events model and building key brand partnerships, which contributed to product placement in 10+ on and off premise NY locations in four months since launch",
      "Lead sprint e-commerce development and digital ads through Facebook and Google",
      ],
    },
    {
      emoji: "📢",
      jobTitle: "Manager of Athlete & Brand Strategy",
      institution: "Talent Resources Sports",
      dates: "2017 - 2018", 
      details: [
      "Oversaw the sports division team, as well as directed project operations management including but not limited to pitch development, partnership and sponsorship outreach, vendor negotiations, budget and P&L management",
      "Produced experiential events at Super Bowl and NBA All-Star 2018 for top consumer brands like Mercedes-Benz and Under Armour",
      "Implemented the Sports divisions first CRM system by leading procurement and compiling a database of over 15,000+ clients using Copper",
      ],
    },
  ],
  educationalExperiences:[
    {
      emoji: "💙❤️",
      university: "University of Pennsylvania",
      school: "College of Liberal and Professional Studies ",
      dates: "2019 - 2020",
      details: [
        "Master of Behavioral and Decision Sciences",
        "1st Place in the IPSOS Sustainability Behavioral Design Challenge"
      ],
    },
    {
      emoji: "🦁",
      university: "Columbia University",
      school: "School of Professional Studies",
      dates: "2018 - 2019",
      details: [
        "Advanced Graduate Certificate in Business",
        "1st Place in Saks Fifth Avenue x Columbia Business School Competition"
      ],
    },
    {
      emoji: "💙❤️",
      university: "University of Pennsylvania",
      school: "Annenberg School of Communication",
      dates: "2018 - 2019",
      details: [
        "Major: Communications, Minor: Consumer Psychology",
        "Wharton Council Emerging Leadership Award, Wharton Council Sustainability Award, Cipactli Latinx Honor Society, Kappa Alpha Theta, "
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

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;

const githubContainer = document.querySelector('#github-link');
githubContainer.textContent = `github.com/${data.githubHandle}`;

const linkedInContainer = document.querySelector('#linkedin-link');
linkedInContainer.textContent = `linkedin.com/in/${data.linkedInHandle}`;

const workContainer = document.querySelector('#work-experience');
workContainer.textContent = data.workExperiences;

const educationContainer = document.querySelector('#education');
educationContainer.textContent = data.educationalExperiences;
