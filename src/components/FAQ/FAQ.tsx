import React from "react";

// faqs type
interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  description: () => JSX.Element;
  faqs: FAQ[];
}

const FAQ = ({ title, description, faqs }: FAQProps) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {description()}
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
              about how we can help your business, please send an email to{" "}
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
