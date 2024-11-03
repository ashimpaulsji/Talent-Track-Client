const defaultCoverImage = "https://res.cloudinary.com/di6pliiql/image/upload/v1730641969/TalantTrack/nhrq91wgj3xwyhtf8nsw.png";
const defaultLogo = "https://res.cloudinary.com/di6pliiql/image/upload/v1730642246/TalantTrack/gtyelw0tp1jqz4jo7oul.png";

export const jobs = [
    {
        id: 1,
        employer_id: 1,
        title: "UI / UX Designer",
        description: "Design user interfaces and user experiences for our cutting-edge products.",
        is_recent: true,
        requirements: [
            "Proficiency in Adobe XD",
            "Experience with Figma",
            "Strong skills in Photoshop"
        ],
        responsibilities: [
            "Create wireframes",
            "Develop prototypes",
            "Write design specifications"
        ],
        location: "New York, US",
        salary_range: "$500/month",
        employment_type: "Fulltime",
        experience_level: "Mid-Level",
        category: "Design",
        tags: ["UI/UX", "Adobe XD", "Figma", "Photoshop"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "LinkedIn",
            company_website: "https://www.linkedin.com",
            company_size: "10,000+",
            company_type: "Public",
            company_industry: "Technology",
            company_address: "Sunnyvale, California",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "2 days ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 2,
        employer_id: 2,
        title: "Full Stack Developer",
        description: "Develop and maintain web applications using modern technologies.",
        is_recent: true,
        requirements: [
            "Proficiency in JavaScript",
            "Experience with React and Node.js",
            "Knowledge of SQL and NoSQL databases"
        ],
        responsibilities: [
            "Build scalable web applications",
            "Optimize application performance",
            "Collaborate with cross-functional teams"
        ],
        location: "San Francisco, US",
        salary_range: "$800/month",
        employment_type: "Fulltime",
        experience_level: "Senior-Level",
        category: "Development",
        tags: ["JavaScript", "React", "Node.js", "SQL"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Twitter",
            company_website: "https://www.twitter.com",
            company_size: "5,000-10,000",
            company_type: "Public",
            company_industry: "Social Media",
            company_address: "San Francisco, California",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "1 week ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 3,
        employer_id: 3,
        title: "Data Scientist",
        description: "Apply statistical and machine learning techniques to solve complex business problems.",
        is_recent: false,
        requirements: [
            "Advanced degree in Statistics, Mathematics, or related field",
            "Proficiency in Python and R",
            "Experience with big data technologies"
        ],
        responsibilities: [
            "Develop predictive models",
            "Perform statistical analysis",
            "Present findings to stakeholders"
        ],
        location: "Seattle, US",
        salary_range: "$1000/month",
        employment_type: "Fulltime",
        experience_level: "Senior-Level",
        category: "Data Science",
        tags: ["Python", "R", "Machine Learning", "Big Data"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Amazon",
            company_website: "https://www.amazon.com",
            company_size: "100,000+",
            company_type: "Public",
            company_industry: "E-commerce",
            company_address: "Seattle, Washington",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "3 weeks ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 4,
        employer_id: 4,
        title: "Product Manager",
        description: "Lead the development and launch of innovative products.",
        is_recent: true,
        requirements: [
            "5+ years of product management experience",
            "Strong analytical and problem-solving skills",
            "Excellent communication and leadership abilities"
        ],
        responsibilities: [
            "Define product vision and strategy",
            "Manage product roadmap",
            "Collaborate with engineering and design teams"
        ],
        location: "Menlo Park, US",
        salary_range: "$1200/month",
        employment_type: "Fulltime",
        experience_level: "Senior-Level",
        category: "Product Management",
        tags: ["Product Strategy", "Agile", "Roadmapping", "User Research"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Facebook",
            company_website: "https://www.facebook.com",
            company_size: "50,000+",
            company_type: "Public",
            company_industry: "Social Media",
            company_address: "Menlo Park, California",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "1 day ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 5,
        employer_id: 5,
        title: "DevOps Engineer",
        description: "Implement and manage continuous integration and delivery systems.",
        is_recent: false,
        requirements: [
            "Experience with cloud platforms (AWS, Azure, or GCP)",
            "Proficiency in scripting languages (Python, Bash)",
            "Knowledge of containerization and orchestration tools"
        ],
        responsibilities: [
            "Automate deployment processes",
            "Manage and optimize cloud infrastructure",
            "Implement security best practices"
        ],
        location: "Austin, US",
        salary_range: "$900/month",
        employment_type: "Fulltime",
        experience_level: "Mid-Level",
        category: "DevOps",
        tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Dell",
            company_website: "https://www.dell.com",
            company_size: "100,000+",
            company_type: "Public",
            company_industry: "Technology",
            company_address: "Round Rock, Texas",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "1 month ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 6,
        employer_id: 6,
        title: "Mobile App Developer",
        description: "Create innovative mobile applications for iOS and Android platforms.",
        is_recent: true,
        requirements: [
            "Proficiency in Swift and Kotlin",
            "Experience with mobile app architecture",
            "Knowledge of mobile UI/UX best practices"
        ],
        responsibilities: [
            "Develop and maintain mobile applications",
            "Collaborate with design team",
            "Optimize app performance"
        ],
        location: "Cupertino, US",
        salary_range: "$950/month",
        employment_type: "Fulltime",
        experience_level: "Mid-Level",
        category: "Mobile Development",
        tags: ["iOS", "Android", "Swift", "Kotlin"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Apple",
            company_website: "https://www.apple.com",
            company_size: "100,000+",
            company_type: "Public",
            company_industry: "Technology",
            company_address: "Cupertino, California",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "3 days ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 7,
        employer_id: 7,
        title: "Cybersecurity Analyst",
        description: "Protect organization's networks and systems from security threats.",
        is_recent: false,
        requirements: [
            "Bachelor's degree in Computer Science or related field",
            "CISSP or related security certifications",
            "Experience with security information and event management (SIEM) tools"
        ],
        responsibilities: [
            "Monitor networks for security breaches",
            "Conduct vulnerability assessments",
            "Develop security policies and procedures"
        ],
        location: "Redmond, US",
        salary_range: "$1100/month",
        employment_type: "Fulltime",
        experience_level: "Senior-Level",
        category: "Cybersecurity",
        tags: ["Network Security", "SIEM", "Vulnerability Assessment", "Security Policies"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Microsoft",
            company_website: "https://www.microsoft.com",
            company_size: "100,000+",
            company_type: "Public",
            company_industry: "Technology",
            company_address: "Redmond, Washington",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "2 weeks ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 8,
        employer_id: 8,
        title: "Business Intelligence Analyst",
        description: "Transform complex data into actionable insights for business decision-making.",
        is_recent: true,
        requirements: [
            "Strong SQL skills",
            "Experience with BI tools (Tableau, Power BI)",
            "Knowledge of data warehousing concepts"
        ],
        responsibilities: [
            "Design and maintain BI dashboards",
            "Perform data analysis and reporting",
            "Collaborate with stakeholders to understand business needs"
        ],
        location: "Chicago, US",
        salary_range: "$750/month",
        employment_type: "Fulltime",
        experience_level: "Mid-Level",
        category: "Business Intelligence",
        tags: ["SQL", "Tableau", "Data Analysis", "Reporting"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Boeing",
            company_website: "https://www.boeing.com",
            company_size: "100,000+",
            company_type: "Public",
            company_industry: "Aerospace",
            company_address: "Chicago, Illinois",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "5 days ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 9,
        employer_id: 9,
        title: "Cloud Solutions Architect",
        description: "Design and implement scalable cloud-based solutions for enterprise clients.",
        is_recent: false,
        requirements: [
            "Extensive experience with major cloud platforms (AWS, Azure, GCP)",
            "Strong understanding of cloud architecture principles",
            "Excellent communication and client-facing skills"
        ],
        responsibilities: [
            "Develop cloud migration strategies",
            "Design scalable and secure cloud architectures",
            "Provide technical leadership to implementation teams"
        ],
        location: "Seattle, US",
        salary_range: "$1300/month",
        employment_type: "Fulltime",
        experience_level: "Senior-Level",
        category: "Cloud Computing",
        tags: ["AWS", "Azure", "GCP", "Cloud Architecture"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Amazon Web Services",
            company_website: "https://aws.amazon.com",
            company_size: "30,000+",
            company_type: "Subsidiary",
            company_industry: "Cloud Computing",
            company_address: "Seattle, Washington",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "1 month ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 10,
        employer_id: 10,
        title: "Machine Learning Engineer",
        description: "Develop and deploy machine learning models to solve complex business problems.",
        is_recent: true,
        requirements: [
            "Advanced degree in Computer Science, Mathematics, or related field",
            "Strong programming skills in Python",
            "Experience with ML frameworks (TensorFlow, PyTorch)"
        ],
        responsibilities: [
            "Design and implement machine learning algorithms",
            "Optimize ML models for production",
            "Collaborate with data scientists and software engineers"
        ],
        location: "Mountain View, US",
        salary_range: "$1400/month",
        employment_type: "Fulltime",
        experience_level: "Senior-Level",
        category: "Artificial Intelligence",
        tags: ["Machine Learning", "Python", "TensorFlow", "PyTorch"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Google",
            company_website: "https://www.google.com",
            company_size: "100,000+",
            company_type: "Public",
            company_industry: "Technology",
            company_address: "Mountain View, California",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "2 days ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 11,
        employer_id: 11,
        title: "Blockchain Developer",
        description: "Develop and implement blockchain solutions for decentralized applications.",
        is_recent: true,
        requirements: [
            "Experience with blockchain platforms (Ethereum, Hyperledger)",
            "Proficiency in Solidity and smart contract development",
            "Strong understanding of cryptography and consensus algorithms"
        ],
        responsibilities: [
            "Design and develop smart contracts",
            "Implement blockchain-based solutions",
            "Ensure security and efficiency of blockchain systems"
        ],
        location: "San Francisco, US",
        salary_range: "$1000/month",
        employment_type: "Fulltime",
        experience_level: "Mid-Level",
        category: "Blockchain",
        tags: ["Ethereum", "Solidity", "Smart Contracts", "Cryptography"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Coinbase",
            company_website: "https://www.coinbase.com",
            company_size: "1,000-5,000",
            company_type: "Public",
            company_industry: "Cryptocurrency",
            company_address: "San Francisco, California",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "1 week ago",
        similar_jobs: [],
        featured_jobs: []
    },
    {
        id: 12,
        employer_id: 12,
        title: "AR/VR Developer",
        description: "Create immersive augmented and virtual reality experiences.",
        is_recent: false,
        requirements: [
            "Experience with Unity or Unreal Engine",
            "Proficiency in C# or C++",
            "Knowledge of 3D modeling and animation"
        ],
        responsibilities: [
            "Develop AR/VR applications",
            "Optimize performance for various devices",
            "Collaborate with designers and 3D artists"
        ],
        location: "Los Angeles, US",
        salary_range: "$850/month",
        employment_type: "Fulltime",
        experience_level: "Mid-Level",
        category: "AR/VR Development",
        tags: ["Unity", "Unreal Engine", "C#", "3D Modeling"],
        company_details: {
            company_logo: defaultLogo,
            company_name: "Snap Inc.",
            company_website: "https://www.snap.com",
            company_size: "5,000-10,000",
            company_type: "Public",
            company_industry: "Social Media",
            company_address: "Santa Monica, California",
            comany_cover_image: defaultCoverImage
        },
        posted_time: "3 weeks ago",
        similar_jobs: [],
        featured_jobs: []
    }
]