const WorkExperienceData = [
    {
        "designation": "Software Engineer 3",
        "organization": {
            "name": "Google",
            "location": "Bengaluru",
            "website": "https://www.google.co.in/",
            "logo": "images/organizations/google.jpg"
        },
        "timePeriod": "2022 - PRESENT",
        "projects": [
            {
                "type": "Project",
                "name": "Google Cloud Platform",
                "responsibilities": [
                    "Cloud Security and Compliance"
                ],
                "technologies": [
                    "Java", "GCP"
                ],
                "link": null
            }
        ]
    },
    {
        "designation": "Lead Software Engineer",
        "organization": {
            "name": "Freshworks",
            "location": "Chennai",
            "website": "https://www.freshworks.com/",
            "logo": "images/organizations/freshworks.png"
        },
        "timePeriod": "2021 - 2022",
        "projects": [
            {
                "type": "Project",
                "name": "Edge API Gateway",
                "responsibilities": [
                    "Working on an Edge API-Gateway platform service which acts as the front proxy for multiple products at Freshworks.",
                    "Worked on other API-Gateway components like rate-limiting and authentication services.",
                    "Experienced in building mirco-services with availability of five nines (99.999%) and throughput of over 400K requests per minute."
                ],
                "technologies": [
                    "Kubernetes", "AWS", "Golang", "Docker", "Envoy", "Redis", "Distributed Systems", "Terraform", "Grafana", "Spring-boot"
                ],
                "link": null
            }
        ]
    },
    {
        "designation": "Senior Software Engineer",
        "organization": {
            "name": "Freshworks",
            "location": "Chennai",
            "website": "https://www.freshworks.com/",
            "logo": "images/organizations/freshworks.png"
        },
        "timePeriod": "2019 - 2021",
        "projects": [
            {
                "type": "Project",
                "name": "Rate-limiting Service",
                "responsibilities": [
                    "Working with the API-Gateway team at Freshworks on building a service which provides api-throttling and rate-limiting.",
                    "Developed features in the rate-limiting service while maintaining the core tenets of having low-latency and high throughput.",
                    "Worked on tuning reverse proxy - Envoy, for improved performance of rate-limiting service to process more than half a billion requests a day at 1ms",
                    "Open-source feature contributions to Envoy (a CNCF graduated project)."
                ],
                "technologies": [
                    "Java", "AWS", "Redis", "Docker", "Envoy", "Distributed Systems"
                ],
                "link": null
            },
            {
                "type": "Project",
                "name": "Requests monitoring service",
                "responsibilities": [
                    "Designed and developed a spring-boot kafka consumer service for monitoring and creating alerts for surge protection."
                ],
                "technologies": [
                    "Java", "Sprint-boot", "Kafka", "Docker", "AWS", "Grafana", "Prometheus"
                ],
                "link": null
            }
        ]
    },
    {
        "designation": "Software Engineer II",
        "organization": {
            "name": "Amazon",
            "location": "Chennai",
            "website": "https://www.amazon.in/",
            "logo": "images/organizations/amazon.jpg"
        },
        "timePeriod": "2018 - 2019",
        "projects": [
            {
                "type": "Project",
                "name": "Kindle Create",
                "responsibilities": [
                    "Worked with the publisher tools team at Amazon on building a desktop application for Windows and Mac OS in C++ using Qt framework.",
                    "Migrated the application from 32-bit to 64-bit for MacOS.",
                    "Developed features like Early access, importing Comic books, creating paperbacks from kindle create and designing content-recovery in Kindle Create."
                ],
                "technologies": [
                    "C++", "Qt", "Xcode", "Event-driven architecture"
                ],
                "link": "https://www.amazon.com/Kindle-Create/b?ie=UTF8&node=18292298011"
            }
        ]
    },
    {
        "designation": "Software Engineer I",
        "organization": {
            "name": "Amazon",
            "location": "Chennai",
            "website": "https://www.amazon.in/",
            "logo": "images/organizations/amazon.jpg"
        },
        "timePeriod": "2016 - 2018",
        "projects": [
            {
                "type": "Project",
                "name": "Kindle -  Word documents conversion",
                "responsibilities": [
                    "Worked with the Kindle team at Amazon on building a service which converts Word documents to Kindle Format.",
                    "Worked on developing features which enhance the quality of a book in kindle like uniform styling, page-breaks, etc."
                ],
                "technologies": [
                    "Java", "Linux", "Aspose Word for Java"
                ],
                "link": null
            },
            {
                "type": "Project",
                "name": "Kindle create add-in for Microsoft Word",
                "responsibilities": [
                    "Designed and developed a plugin for Microsoft Word to create custom kindle styles in a word document",
                    "Participated in requirements discussions, design choices and set-up the build infrastructure for VB.NET applications.",
                    "Worked on the conversion of word documents edited with the add-in to kindle format.",
                    "Developed a windows daemon service for monitoring any windows desktop application. "
                ],
                "technologies": [
                    "VB.NET", "C#", "Java"
                ],
                "link": null
            }
        ]
    }
]

export default WorkExperienceData;