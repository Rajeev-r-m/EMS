import { data } from "autoprefixer";

const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                title: "Update database",
                description: "Ensure all records are up-to-date in the system.",
                date: "2025-03-16",
                category: "Database",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Submit weekly report",
                description: "Compile and submit the weekly performance report.",
                date: "2025-03-18",
                category: "Reporting",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Optimize website",
                description: "Improve website load times and responsiveness.",
                date: "2025-03-20",
                category: "Web Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                title: "Inventory audit",
                description: "Conduct a detailed audit of the current inventory.",
                date: "2025-03-17",
                category: "Inventory",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Customer follow-ups",
                description: "Follow up with customers regarding their feedback.",
                date: "2025-03-18",
                category: "Customer Service",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Organize meeting",
                description: "Arrange the quarterly review meeting.",
                date: "2025-03-21",
                category: "Administration",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                title: "Market research",
                description: "Research competitors and industry trends.",
                date: "2025-03-19",
                category: "Market Analysis",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Prepare presentation",
                description: "Create slides for the upcoming client pitch.",
                date: "2025-03-20",
                category: "Sales",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Social media campaign",
                description: "Design a strategy for the new product launch.",
                date: "2025-03-22",
                category: "Marketing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                title: "System maintenance",
                description: "Run checks and update the security software.",
                date: "2025-03-18",
                category: "IT Support",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Team training",
                description: "Conduct a session on effective communication.",
                date: "2025-03-20",
                category: "HR",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Review budgets",
                description: "Analyze the financial plan for this quarter.",
                date: "2025-03-21",
                category: "Finance",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                title: "Content creation",
                description: "Write blog posts for the company website.",
                date: "2025-03-19",
                category: "Content",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Client onboarding",
                description: "Assist in the onboarding process for new clients.",
                date: "2025-03-20",
                category: "Client Relations",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Policy updates",
                description: "Revise company policies as per new guidelines.",
                date: "2025-03-22",
                category: "Policy",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    }
];

const admin = [
    {
        id: 0,
        email: "admin@example.com",
        password: "123"
    }
];

export const setlocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};
export const getlocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    console.log(employees, admin);
};