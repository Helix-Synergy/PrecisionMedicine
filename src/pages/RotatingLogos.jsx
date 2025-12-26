import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../assets/tracks/img1.jpeg";
import img2 from "../assets/tracks/img2.jpeg"
import img3  from "../assets/tracks/img3.jpeg";
import img4 from "../assets/tracks/img4.jpeg";
import img5 from "../assets/tracks/img5.jpeg";
import img6 from "../assets/tracks/img6.jpeg"
import img7 from "../assets/tracks/img7.jpeg";
import img8 from "../assets/tracks/img8.jpeg"
import img9 from "../assets/tracks/img9.jpeg";
import img10 from "../assets/tracks/img10.png"
import img11 from "../assets/tracks/img11.jpeg";
import img12 from "../assets/tracks/img12.jpeg"
import img13 from "../assets/tracks/img13.jpeg";
import img14 from "../assets/tracks/img14.jpeg"
import img15 from "../assets/tracks/img15.png";
import img16 from "../assets/tracks/img16.jpeg"
import img17 from "../assets/tracks/img17.jpeg"
import img18 from "../assets/tracks/img18.jpg";
import img19 from "../assets/tracks/img19.jpeg"
import img20 from "../assets/tracks/img20.webp"

export const tracks = [
  {
    image: img1,
    title: "AI in Healthcare",
    description: (
      <>
This track examines artificial intelligence applications across{" "}
        <Link
          to="/contact"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        healthcare,
        </Link> including clinical decision support, predictive analytics, diagnostics, imaging, and operational efficiency. Sessions address ethical AI, data governance, algorithm validation, regulatory challenges, and real-world deployment of AI systems enabling precision medicine, personalized care, and improved patient outcomes globally.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Pharma & Biotech",
    description: (
      <>
This track highlights innovations within{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        pharmaceutical and biotechnology
        </Link>{" "}  industries driving precision medicine. Topics include biologics, targeted therapies, translational research, clinical pipelines, regulatory strategies, manufacturing advances, and strategic partnerships accelerating drug discovery, development, and commercialization for personalized, effective, and sustainable healthcare solutions worldwide.
       
      </>
    ),
  },

  {
    image: img3,
    title: "Genomics & Multi-Omics",
    description: (
      <>
  This track focuses on genomics, transcriptomics, proteomics{" "}
        <Link
          to="/precisionmedicine-event-schedule" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   metabolomics,
        </Link>  and integrated multi-omics approaches. Discussions explore disease risk prediction, biomarker discovery, molecular profiling, data integration, and clinical translation of omics insights into personalized diagnostics, targeted therapies, and population-scale precision health initiatives.
      </>
    ),
  },

  {
    image: img4,
    title: "Public Health",
    description: (
      <>
     This track explores the integration of precision medicine into public health systems. Topics include population genomics, disease prevention, health equity, data-driven surveillance, policy development, and ethical frameworks enabling personalized interventions that improve community health outcomes and strengthen national and   {" "}
        <Link
          to="/precisionmedicine-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
global public health resilience.
        </Link>{" "}

      </>
    ),
  },

  {
    image: img5,
    title: "Advanced Precision Medicine",
    description: (
      <>
This track highlights next-generation precision medicine innovations, including systems biology, digital twins, AI-driven diagnostics, predictive modeling, and individualized therapeutic design. Sessions focus on clinical translation, scalability, interoperability, and future frameworks advancing deeply personalized, data-driven, and outcome-focused healthcare delivery systems worldwide.{" "}
        {/* <Link
          to="/foodtech-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     
        </Link>{" "} */}
   
      </>
    ),
  },

  {
    image: img6,
    title: "Cancer biology",
    description: (
      <>
This track examines molecular and cellular mechanisms underlying 
        <Link
          to="/about-precisionmedicine-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     cancer
        </Link>{" "} development, progression, and resistance. Topics include tumor genomics, signaling pathways, tumor microenvironment, immune interactions, and translational discoveries informing targeted therapies, biomarker development, and precision oncology strategies for improved diagnosis and treatment outcomes.
     
      </>
    ),
  },

  {
    image:  img7,
    title: "Cell & Gene therapies",
    description: (
      <>
This track focuses on advances in gene editing, stem{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        cell technologies, 
        </Link>{" "} CAR-T therapies, and regenerative medicine. Sessions address clinical development, manufacturing challenges, safety, regulatory pathways, and real-world applications transforming treatment paradigms for genetic disorders, cancer, and complex diseases through precision therapeutic approaches.
      </>
    ),
  },

  {
    image: img8,
    title: "Women’s Health",
    description: (
      <>
     This track addresses precision medicine approaches tailored to{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     women’s health 
        </Link>{" "} across life stages. Topics include reproductive health, maternal care, gynecologic and breast cancers, hormonal disorders, sex-specific biology, and improving clinical research inclusion to advance equitable, personalized healthcare outcomes for women globally.
    
      </>
    ),
  },

  {
    image: img9,
    title:"Liquid Biopsies",
    description: (
      <>
    This track explores non-invasive{" "}
        <Link
          to= "https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       diagnostic technologies
        </Link>{" "} including circulating tumor DNA, exosomes, and blood-based biomarkers. Sessions focus on early disease detection, treatment monitoring, minimal residual disease assessment, clinical validation, and integration of liquid biopsy platforms into precision oncology and personalized disease management strategies.
 
      </>
    ),
  },

  {
    image: img10,
    title: "Bioinformatics",
    description: (
      <>
 This track covers computational methods supporting precision medicine, including genomic data analysis, machine learning, data integration, visualization, and cloud-based platforms. Discussions emphasize translating complex biological datasets into clinically actionable insights while addressing data quality, interoperability, scalability, and ethical data management challenges.{" "}
        {/* <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       standards and global regulatory compliance 
        </Link>{" "} */}

      </>
    ),
  },

  {
    image:img11,
    title:  "Neurology & Neurodegenerative",
    description: (
      <>
    This track explores precision approaches to{" "}
        <Link
          to="/about-precisionmedicine-conclave" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        neurological and neurodegenerative
        </Link>  disorders such as Alzheimer’s, Parkinson’s, ALS, and multiple sclerosis. Topics include neurogenomics, biomarkers, imaging technologies, digital monitoring tools, and targeted therapies addressing disease heterogeneity, progression, and personalized patient care strategies.
      </>

    ),
  },

  {
    image: img12,
    title:"Precision Oncology",
    description: (
      <>
 This track focuses on personalized cancer care using molecular profiling, targeted therapies, immuno-oncology, and adaptive treatment strategies. Sessions address biomarker-driven clinical trials, resistance mechanisms, companion diagnostics, real-world implementation, and integrating precision oncology into routine clinical practice for improved patient outcomes. {" "}
        {/* <Link
          to="/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    food processing innovations aligned with green technologies.
        </Link>{" "}    */}
      
      </>
    ),
  },

  {
    image: img13,
    title: "Genetic Disorders",
    description: (
      <>
This track addresses inherited and rare genetic diseases through precision diagnostics and therapies. Topics include genomic screening, gene-based treatments, newborn screening programs, ethical considerations, patient access, and translating genetic discoveries into personalized management strategies improving quality of life and long-term clinical outcomes.{" "}
        {/* <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       plant–microbiome engineering
        </Link>  */}

        
      </>
    ),
  },

  {
    image: img14,
    title: "Digital Health & Wearables",
    description: (
      <>
This track explores  {" "}
        <Link
          to= "/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     digital technologies transforming healthcare,
        </Link> including wearable devices, remote monitoring, mobile health applications, and real-time analytics. Sessions focus on patient engagement, continuous data collection, interoperability, regulatory considerations, and leveraging digital tools to enable personalized, preventive, and value-based healthcare delivery.
        
      </>
    ),
  },

  {
    image: img15,
    title:  "Clinical Implementation",
    description: (
      <>
   This track addresses real-world adoption of precision medicine in healthcare settings. Topics include clinical workflows, physician education, reimbursement models, regulatory compliance, data integration, and strategies for embedding genomic, digital, and AI-driven tools into routine patient care and health system operations.{" "}
        {/* <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        climate-smart food systems and Life Cycle Assessment 
        </Link>  */}
     
      </>
    ),
  },

  {
    image: img16,
    title: "Cardiology & Metabolic Disease",
    description: (
      <>
This track focuses on precision approaches to cardiovascular and metabolic conditions including heart disease, diabetes, and obesity. Topics include genetic risk assessment, biomarkers, personalized therapies, lifestyle interventions, and digital monitoring tools improving prevention, early diagnosis, and long-term disease management outcomes. {" "}
        {/* <Link
          to="/about-foodtech-conclave" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          regenerative horticulture, agroforestry, and polyculture systems. 
        </Link> */}
</>
    ),
  },

  {
    image:img17,
    title: "Infectious Diseases",
    description: (
      <>
   This track explores precision medicine applications in {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          infectious disease 
        </Link> prevention, diagnosis, and treatment. Topics include pathogen genomics, antimicrobial resistance, personalized therapeutics, vaccine development, outbreak surveillance, and data-driven strategies enhancing global preparedness and response to emerging and re-emerging infectious threats.
      </>
    ),
  },
// Ethical

  {
    image:img18,
    title: "Biomarkers & Diagnostics",
    description: (
      <>
     {" "}
        {/* <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          microbiome research 
        </Link>  */}
This track focuses on discovery, validation, and clinical application of biomarkers for disease prediction, diagnosis, prognosis, and treatment response. Sessions address molecular diagnostics, companion diagnostics, regulatory pathways, analytical validation, and integrating biomarker-driven tools into precision medicine clinical workflows.
      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title:  "Pharmacogenomics",
    description: (
      <>
This track examines how genetic variation influences drug response, efficacy, and safety. Topics include clinical implementation, dosing optimization, adverse event reduction, decision-support systems, and integrating pharmacogenomics into prescribing practices to improve therapeutic outcomes and support personalized medication management.  {" "}
        {/* <Link
          to="/about-foodtech-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  precision fermentation,
        </Link>   */}
      </>
    ),
  },
  {
    image: img20,
    title: "Drug development",
    description: (
      <>
This track explores precision-driven drug discovery and development processes. Topics include target identification, biomarker-guided trials, adaptive study designs, translational research, regulatory strategies, and accelerating personalized therapeutics from preclinical research to clinical application and global market access. {" "}
        {/* <Link
          to="/foodtech-conference-tracks/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      certification frameworks for regenerative farming.
        </Link>{" "}  */}
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
