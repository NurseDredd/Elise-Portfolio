import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const VerticalNav: React.FC = () => {
  return (
    <div
      className="fixed bottom-0 left-8 z-50 hidden md:flex flex-col items-center animate-fade-in-stagger"
      role="navigation"
      aria-label="Social media links"
    >
      {/* Icons */}
      <div className="flex flex-col gap-4 mb-4">
        <a
          href="mailto:elise.philipsson@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors vertical-nav-hover animate-slide-up-stagger-1"
          aria-label="Send email to Elise Philipsson"
        >
          <FaEnvelope size={32} />
        </a>
        <a
          href="https://github.com/NurseDredd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors vertical-nav-hover animate-slide-up-stagger-2"
          aria-label="Visit Elise Philipsson's GitHub profile"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://linkedin.com/in/elise-philipsson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors vertical-nav-hover animate-slide-up-stagger-3"
          aria-label="Visit Elise Philipsson's LinkedIn profile"
        >
          <FaLinkedin size={32} />
        </a>
      </div>

      {/* Vertical line */}
      <div className="w-[2px] bg-gray-400 animate-line-grow" />
    </div>
  );
};
