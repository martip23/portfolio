import Portfolio from '../../models/portfolio'

export const initState: Portfolio = {
    meta: {
        title: 'Patrick Martinez',
        description: 'Full Stack Engineer',
        showRepoLink: true,
    },
    menu: {
        home: 'Hello',
        about: 'Resume',
    },
    intro: {
        headline: "Hi, I'm Patrick.",
        typed: [
            "I'm a full-stack web developer",
            'who can build UIs',
            'and APIs',
            'and deploy them.',
        ],
    },
    resume: {
        headline: 'Full Stack Software Engineer',
        summary: [
            "I'm an automation-oriented individual. I like to design user and developer interfaces, \
            and beautifully implement them. I write UI components based on efficiency, ease of use \
            and maintainability.",

            "I also like to build effective and impactful APIs. I like to automate production \
            so my team can focus on development. I like teaching and leading others to learn new things.",

            "As long as I am learning, or teaching, I am fulfilled."
        ],
        jobsHeadline: 'Employment',
        jobs: [
            {
                title: 'Research Computer Scientist',
                company: 'Southwest Research Institute',
                timeframe: '2019-2022',
                summary:
                    "I design and implement UI components, APIs, and business logic for a full-stack web \
                    application which is used by traffic operators in New England to monitor traffic conditions \
                    and send updates to various traffic monitors and devices. I am helping transition our monolithic \
                    windows application to a dockerized, decentralized system of micro-services. I design and \
                    implement components, map tools and datagrids for a transition from a windows system to a react \
                    based thin web client. I save hundreds of allocated development hours by building reusable template \
                    pages and improving upon existing UI developer interfaces. I used React.js, Angular, dotnet, Docker, \
                    Kubernetes and SQL to accomplish this.",
            },
            {
                title: 'Software Development Intern',
                company: 'Charles Schwab',
                timeframe: 'Summer 2019',
                summary:
                    'I was a full stack web developer and created a feature component which sent handled sending out \
                    release, maintenance, support and patching notifications. Component allowed user to select a specific \
                    template, edit details and send emails to a predefined group. I used Angular, Java, Spring and MongoDB \
                    to accomplish this.',
            },
            {
                title: 'Adult Education Teacher',
                company: 'Foundation Communities',
                timeframe: '2015-2019',
                summary:
                    'I helped hundreds of Latin American students learn English, Science, Math, Social Studies and Writing to obtain their GED degree.',
            },
        ],
        toolsHeadline: 'Skills',
        tools: [
            {
                name: 'Strong In:',
                list: 'User Interface Design and Implementation, React, JavaScript, TypeScript, APIs, HTML5, CSS, C#, Application \
                Support, AWS, AWS ECR, AWS EC2, Route 53, git, Jira, Bamboo, Angular, Redux'
            },
            {
                name: 'Intermediate In:',
                list: 'ArcGIS/ESRI, CI/CD, SQL, Java, Project Cost Estimation, Project Marketing, AWS Route 53, \
                CircleCI, Docker, AWS S3, AWS ECS, Python, C++, .NET, Spring, MongoDB',
            },
        ],
    },
    sections: [
        {
            id: 'portfolio',
            menu: 'Portfolio',
            headline: 'Portfolio',
            subhead: 'Projects that got me started.',
            projects: [
                {
                    id: 'section-1-project-1',
                    title: 'Adelante GED',
                    summary:
                        'A website built while I was in University. Uses RTFD and Sphinx. For use by Southwest Key Programs as a hub for class information. Re-hosted here.',
                    image: 'paginaGED.jpg',
                    links: [
                        {
                            label: 'Link',
                            url:
                                'http://patrickmartinez.us/ged',
                        },
                    ],
                },
                {
                    id: 'section-1-project-2',
                    title: 'ESRI Map Helper',
                    summary:
                        'An internal build tool I designed and implemented to allow user to easily create feature layers, and add map icons using only a single JSON file with icon locations, icon details, and an embedded react component for the popup',
                    image: 'map.png',
                },
                {
                    id: 'section-1-project-3',
                    title: 'DataGrid Helper',
                    summary:
                        'DataGrid helper came out of an anticipated need I saw for many similar components. I designed and built a developer interface that abstracted state management and allowed developer to create datagrids using a single JSON object.',
                    image: 'datagrid.png',
                },
                {
                    id: 'section-1-project-4',
                    title: 'patrickmartinez.us',
                    summary: 'This webserver and site is a work in progress. Everything is hosted on the cloud using an automated CI/CD pipeline, numerous AWS services and React.',
                    image: 'aws.png',
                },
            ],
        },
    ],
    footer: {
        social: [
            {
                service: 'github',
                link: 'https://github.com',
            },
            {
                service: 'linkedin',
                link: 'https://www.linkedin.com',
            },
        ],
        footerMessage: 'Thanks for reading.',
        background: '',
    },
}

export default (state: Portfolio = initState) => {
    return state
}
