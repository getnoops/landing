import {
    BeakerIcon,
    ClockIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    GlobeAltIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'

const HomeContent = {
    hero: {
        description:
            'NoOps is a fully managed cloud platform that automates your infrastructure and operations, so you can focus on building your product.',
    },

    bridge: {
        title: 'Streamline your Pipeline',
        description:
            'Enhance your pipeline’s reliability while accelerating delivery',
    },

    steps: {
        title: 'Easy as',
        description:
            'The NoOps experience is simple and intuitive. Just follow these 3 easy steps.',

        steps: [
            {
                title: 'Write your Code',
                subject: 'Write',
                description:
                    'Write your code however you want, using whatever tools you want. NoOps is flexible and will fit into your workflow.',
            },
            {
                title: 'Configure your Stack File',
                subject: 'Describe',
                description:
                    'Create a stack file which will be used to configure your product and its infrastructure.',
                cta: (
                    <a
                        href="#"
                        className="block w-fit text-noops-400 transition hover:text-noops-500"
                    >
                        Learn more about stack files {'→'}
                    </a>
                ),
            },
            {
                title: "And You're Off",
                subject: 'Deploy',
                description:
                    'Thats it. Deploy. NoOps will automatically create the infrastructure needed to run your product with 24/7 monitoring and alerting.',
            },
        ],
    },

    features: {
        title: 'Painless Operations Management',
        description:
            'Gone are the days of manual infrastructure management. Rest easy knowing that your infrastructure is being managed automatically',
        subtitle: 'What about Ops?',

        features: [
            {
                name: 'Push to deploy.',
                description:
                    'Automatically deploy changes to your application as soon as they are ready, with no downtime and no manual intervention required.',
                icon: CloudArrowUpIcon,
            },
            {
                name: 'Advanced security.',
                description:
                    'Protect your application and data with modern industry security standards.',
                icon: FingerPrintIcon,
            },
            {
                name: '24/7 monitoring and alerting.',
                description:
                    "Monitor your application's performance and health around the clock, with real-time alerts and notifications to keep you informed.",
                icon: ClockIcon,
            },
            {
                name: 'Automated backups and disaster recovery.',
                description:
                    'Protect your data and ensure business continuity with automated backups and disaster recovery features.',
                icon: ServerIcon,
            },
            {
                name: 'Full stack automation',
                description:
                    'Frontend, backend and data are all handled by our team at NoOps.',
                icon: BeakerIcon,
            },
            {
                name: 'Multi-region deployment.',
                description:
                    ' Deploy your application to multiple regions and data centers around the world, for increased availability and reduced latency.',
                icon: GlobeAltIcon,
            },
        ],
    },

    pricing: {
        title: 'Simple pricing model that works for you',
        subtitle: 'Pricing',
    },

    skeptic: {
        title: 'Still Unconvinced?',

        prompt: 'Here are our some of our Stack files for NoOps:',
        cta: 'Learn more',
    },

    faqs: {
        title: 'Frequently Asked Questions',
        description: () => (
            <>
                Have a different question and can’t find the answer you’re
                looking for? Reach out to our support team by{' '}
                <a
                    href="#"
                    className="font-semibold text-noops-600 hover:text-noops-500"
                >
                    sending us an email
                </a>{' '}
                and we’ll get back to you as soon as we can.
            </>
        ),

        faqs: [
            {
                id: 1,
                question: 'How does NoOps differ from DevOps?',
                answer: 'DevOps focuses on collaboration and automation between development and operations teams, sharing responsibility for the application lifecycle, while NoOps aims to automate and abstract away operational tasks entirely, empowering developers to take full control of application deployment and management without a dedicated operations team.',
            },
            {
                id: 2,
                question: 'What are the benefits of using NoOps?',
                answer: 'NoOps can help reduce the time and cost associated with deploying and managing applications, as well as improve the reliability and security of your infrastructure. It can also help improve collaboration between development and operations teams, and enable faster time-to-market for new products and features.',
            },
            {
                id: 3,
                question: 'How does NoOps impact scalability and performance?',
                answer: 'NoOps positively impacts scalability and performance by automating scaling processes, providing elastic infrastructure, and fostering continuous optimization. It enables rapid deployment and rollback, reduces operational overhead, and allows developers to proactively optimize resource usage, resulting in efficient scalability and improved application performance.',
            },
            {
                id: 4,
                question: 'Is NoOps suitable for all types of applications?',
                answer: 'NoOps is suitable for most types of applications, including web apps, mobile apps, and APIs. However, some legacy applications or complex architectures may require more manual intervention or customization. Our team can help assess your specific needs and may be able to provide tailored solutions.',
            },
            {
                id: 5,
                question: 'Is NoOps secure?',
                answer: 'Yes, NoOps is designed with security in mind and includes features such as SSL encryption, multi-factor authentication, and automatic backups. Our team follows industry best practices and standards to ensure that your data and applications are secure and compliant.',
            },
            {
                id: 6,
                question: 'What if I need help or support with NoOps?',
                answer: 'Our team provides comprehensive support and consulting services to help you get the most out of NoOps. We offer onboarding assistance, training, and 24/7 technical support. Additionally, our community forums and knowledge base provide resources and answers to common questions.',
            },
        ],
    },

    cta: {
        line1: 'Still not convinced?',
        line2: 'Try a basic deployment',
        cta: 'Try a Deployment',
    },
}

export default HomeContent
