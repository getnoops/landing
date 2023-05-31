import React from "react";

const faqs = [
  {
    id: 1,
    question: "What is NoOps?",
    answer:
      "NoOps is a methodology that aims to eliminate the need for IT operations personnel in software development and deployment processes, by automating the process of deploying and managing applications in production.",
  },
  {
    id: 2,
    question: "What are the benefits of using NoOps?",
    answer:
      "NoOps can help reduce the time and cost associated with deploying and managing applications, as well as improve the reliability and security of your infrastructure. It can also help improve collaboration between development and operations teams, and enable faster time-to-market for new products and features.",
  },
  {
    id: 3,
    question:
      "What benefits does NoOps offer over traditional operations management?",
    answer:
      "NoOps can help reduce the time and cost associated with deploying and managing applications, as well as improve the reliability and security of your infrastructure. It can also help improve collaboration between development and operations teams, and enable faster time-to-market for new products and features.",
  },
  {
    id: 4,
    question: "Is NoOps suitable for all types of applications?",
    answer:
      "NoOps is suitable for most types of applications, including web apps, mobile apps, and APIs. However, some legacy applications or complex architectures may require more manual intervention or customization. Our team can help assess your specific needs and may be able to provide tailored solutions.",
  },
  {
    id: 5,
    question: "Is NoOps secure?",
    answer:
      "Yes, NoOps is designed with security in mind and includes features such as SSL encryption, multi-factor authentication, and automatic backups. Our team follows industry best practices and standards to ensure that your data and applications are secure and compliant.",
  },
  {
    id: 6,
    question: "What if I need help or support with NoOps?",
    answer:
      "Our team provides comprehensive support and consulting services to help you get the most out of NoOps. We offer onboarding assistance, training, and 24/7 technical support. Additionally, our community forums and knowledge base provide resources and answers to common questions.",
  },
];

const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{" "}
            <a
              href="#"
              className="font-semibold text-noops-600 hover:text-noops-500"
            >
              sending us an email
            </a>{" "}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-xl bg-opacity-30 bg-gradient-to-br from-noops-300/50 via-transparent to-noops-400/50 blur-xl"></div>
          <div className="relative mt-24 rounded-xl border border-noops-400/30 bg-noops-300/10 p-4 backdrop-blur-lg">
            <h5 className="mb-2 text-center text-2xl font-medium leading-10 text-noops-950">
              Want to know more?
            </h5>
            <p className="text-center font-medium text-noops-900">
              If you have any questions about NoOps, or would like to learn more
              about how it can help your business, please send an email to{" "}
              <br />
              <span className="mx-auto mt-1 block w-fit select-all font-semibold">
                sam@getnoops.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
