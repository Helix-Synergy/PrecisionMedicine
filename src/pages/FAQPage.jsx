import React, { useState } from "react";

const faqLinks = {
  tracks:"/precisionmedicine-tracks/",
  abstractSubmission: "/abstract-submission",
  schedule:"/precisionmedicine-event-schedule" ,
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is PRECISIONMEDICINE-2026?",
    answer:
      "PRECISIONMEDICINE-2026, officially titled the “Precision Medicine Summit”, is a premier international conference organized by Helix Conferences. It brings together clinicians, researchers, healthcare professionals, geneticists, biotech companies, pharma leaders, AI experts, and policy makers to explore advancements in personalized medicine, genomics, AI-driven healthcare, targeted therapies, and next-generation clinical solutions.",
  },
  {
    question: "When and where will PRECISIONMEDICINE-2026 take place?",
    answer:
      "PRECISIONMEDICINE-2026 will take place in 2026. The exact dates and venue will be announced soon.",
  },
  {
    question: "What are the highlights of PRECISIONMEDICINE-2026?",
    answer:
      "Keynote addresses, scientific sessions, clinical case studies, technology showcases, expert panels, research presentations, industry forums, and global networking opportunities in precision and personalized medicine.",
  },
  {
    question: "What tracks are featured at PRECISIONMEDICINE-2026?",
    answer: (
      <>
        You can explore the full list of tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          PRECISIONMEDICINE-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I showcase my solutions or explore sponsorship options?",
    answer: (
      <>
        To showcase your solutions or discuss sponsorship opportunities, please
        contact our team at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract or presentation proposal?",
    answer: (
      <>
        You can submit your abstract or proposal{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email address provided during registration. Please check your inbox and spam folder.",
  },
  {
    question: "What materials will participants receive?",
    answer:
      "Registered participants will receive a digital conference kit including the agenda, speaker profiles, session details, and exhibitor information.",
  },
  {
    question: "How long are presentation slots?",
    answer:
      "Presentation slots typically range from 15–20 minutes, including Q&A. Final guidelines will be shared after abstract acceptance.",
  },
  {
    question: "Who should attend PRECISIONMEDICINE-2026?",
    answer:
      "Clinicians, researchers, geneticists, healthcare professionals, biotech and pharma leaders, AI and data science experts, diagnostics companies, startups, investors, and academicians worldwide.",
  },
  {
    question: "How many attendees are expected?",
    answer:
      "PRECISIONMEDICINE-2026 is expected to host 150+ international attendees, including speakers, delegates, exhibitors, and sponsors.",
  },
  {
    question: "Can I submit multiple abstracts or proposals?",
    answer:
      "Yes, multiple submissions are allowed, provided each represents a distinct topic or research focus.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, a limited number of keynote and featured speaker slots are available. Interested applicants should indicate their interest during submission.",
  },
  {
    question: "What is expected from speakers and exhibitors?",
    answer:
      "Speakers and exhibitors are expected to deliver insightful, evidence-based sessions or demonstrations and actively engage with attendees.",
  },
  {
    question: "Is there a participation or registration fee?",
    answer:
      "Yes, registration and participation fees apply. Please visit the “Buy A Ticket” section on the website for detailed pricing.",
  },
  {
    question: "How can I view the event schedule?",
    answer: (
      <>
        The detailed summit schedule will be released soon. You can view or
        download it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I view the agenda and speaker list before the event?",
    answer:
      "Yes, the complete agenda, speaker lineup, and session details will be published ahead of the summit.",
  },
  {
    question: "Can I register in advance?",
    answer:
      "Yes, early registration is recommended as slots may be limited closer to the event date.",
  },
  {
    question: "Who can I contact for travel or accommodation assistance?",
    answer: (
      <>
        For travel or accommodation-related assistance, please contact{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];




const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
