import * as Icon from "react-feather";

const Faqs: React.FC = () => {
  const toggleContent = (e: React.MouseEvent<HTMLDivElement>) => {
    const arrow = e.currentTarget.querySelector(".arrow-icon");
    const content = e.currentTarget.nextElementSibling as HTMLParagraphElement;
    content.classList.toggle("h-0");
    content.classList.toggle("overflow-hidden");
    arrow?.classList.toggle("rotate-180");
  };

  const faqs = [
    {
      question: "What is CuteX?",
      answer:
        "CuteX is a free URL shortening service that allows you to shorten long URL. Also, you can track the performance of your shortened URLs with our analytic tools.",
    },
    {
      question: "How do I shorten URL with cuteX?",
      answer:
        "First, copy any long URL from any site and paste it into the input field on the homepage. Then click the 'Shorten' button and let cuteX do the job for you in no time. There you have it, your UlR has been shortened and you can now use it by simply copying and pasting on your browser.",
    },
    {
      question: "How can I get Analytics?",
      answer:
        "You can track the performance of your shortened URLs by signing up and accessing the analytics dashboard. You can see the number of clicks, location of clicks, and more.",
    },
    {
      question: "Is CuteX a free service?",
      answer:
        "Yes, CuteX is free to use. You can shorten URLs without signing up. However, in order to access the analytics dashboard, you will need to sign up.",
    },
    {
      question: "How do I customize a URL?",
      answer:
        "You can customize a URL entering a custom alias for the URL before shortening. This is only avaiable if you're signed in.",
    },
    {
      question: "How do I get started?",
      answer:
        "You can get started by shortening a URL on the homepage. You can also sign up to access the analytics dashboard.",
    },
  ];

  return (
    <div className="mt-10 flex items-center justify-center flex-col">
      <div id="faqs" className="w-[50px] h-[50px]"></div>
      <h3 className="text-text font-semibold text-2xl relative z-30 after:content-[''] after:absolute after:w-1/4 after:h-[3px] after:bg-accent after:-z-10 after:left-[50%] after:translate-x-[-50%] after:top-8 after:rounded-lg">
        Faqs
      </h3>
      <div className="text-text pt-5 md:w-[50%] cursor-pointer">
        {faqs.map((faq) => (
          <div key={faq.question} className="border-b p-3">
            <div
              onClick={toggleContent}
              className="flex items-center justify-between"
            >
              <p className="py-4">{faq.question}</p>
              <Icon.ChevronDown
                className="arrow-icon transition-all"
                size="30px"
              />
            </div>
            <p className="h-0 overflow-hidden transition-all">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
