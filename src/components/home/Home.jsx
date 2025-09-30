import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Zap,
  Star,
  Send,
  Phone,
  MapPin,
  Calendar,
  MessageCircle,
  Heart,
  Award,
  Coffee,
  Sun,
  Moon,
  Sparkles,
  Rocket,
  Code2,
  Palette,
  Globe,
  Smartphone,
  Server,
  Target,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  MapPin as MapPinIcon,
  Briefcase,
  Award as AwardIcon,
  HeartHandshake,
  Zap as Flash,
  Crown,
  Star as StarIcon,
  Sparkle,
  Layout,
  ChevronRight,
  ChevronLeft,
  X,
  Building,
} from "lucide-react";
import ayub from "../../assets/ayub4.jpg";
import ftb1 from "../../assets/ftb1.png";
import ftb2 from "../../assets/ftb2.png";
import blood1 from "../../assets/blood1.png";
import blood2 from "../../assets/blood2.png";
import blood3 from "../../assets/blood3.png";
import hoktok1 from "../../assets/hoktok1.png";
import hoktok2 from "../../assets/hoktok2.png";
import hoktok3 from "../../assets/hoktok3.png";
import lanhong1 from "../../assets/lanhong1.png";
import lanhong2 from "../../assets/lanhong2.png";
import lanhong3 from "../../assets/lanhong3.png";
import medico1 from "../../assets/medico1.png";
import medico2 from "../../assets/medico2.png";
import medico3 from "../../assets/medico3.png";
import smart1 from "../../assets/smart1.png";
import smart2 from "../../assets/smart2.png";
import smart3 from "../../assets/smart3.png";
import ebs1 from "../../assets/ebs1.png";
import ebs2 from "../../assets/ebs2.png";
import ebs3 from "../../assets/ebs3.png";
import ebs4 from "../../assets/ebs4.png";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = [
        "home",
        "skills",
        "experience",
        "projects",
        "testimonials",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "home");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Download CV function
  const cvUrl = new URL("../../assets/cv.pdf", import.meta.url).href;

  const downloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Md_Ayub_Ali_CV.pdf"; // You can customize the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900/20 to-black"
          : "bg-gradient-to-br from-blue-50 via-cyan-50/50 to-purple-50/30"
      }`}
    >
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              isDarkMode ? "bg-white/5" : "bg-purple-200/20"
            }`}
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-8 right-8 z-50 w-14 h-14 rounded-2xl backdrop-blur-xl border-2 transition-all duration-500 hover:scale-110 group ${
          isDarkMode
            ? "bg-purple-500/10 border-purple-400/30 text-purple-200 hover:bg-purple-500/20 hover:border-purple-300/50"
            : "bg-amber-500/10 border-amber-400/30 text-amber-600 hover:bg-amber-500/20 hover:border-amber-300/50"
        }`}
      >
        <div className="relative w-6 h-6 mx-auto">
          <Sun
            className={`w-6 h-6 transition-all duration-500 absolute inset-0 ${
              isDarkMode ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            }`}
          />
          <Moon
            className={`w-6 h-6 transition-all duration-500 absolute inset-0 ${
              isDarkMode ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`}
          />
        </div>
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
      </button>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b transition-all duration-500 ${
          isDarkMode
            ? "bg-black/40 border-white/10"
            : "bg-white/40 border-gray-200/50"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <span
                className={`text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}
              >
                Md Ayub Ali
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                "home",
                "skills",
                "experience",
                "projects",
                "testimonials",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    activeSection === item
                      ? "text-purple-400"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                      activeSection === item
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Download CV Button */}
            <button
              onClick={downloadCV}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Cursor Follower */}
      {isDarkMode && (
        <div
          className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 12}px, ${
              mousePosition.y - 12
            }px)`,
          }}
        />
      )}

      <Header
        isLoaded={isLoaded}
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />
      <Skills isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

// Header Component with theme support
const Header = ({ isLoaded, isDarkMode, scrollToSection }) => {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            isDarkMode
              ? "bg-gradient-to-br from-purple-900/40 via-blue-900/20 to-black"
              : "bg-gradient-to-br from-purple-100/60 via-blue-100/40 to-cyan-100/30"
          }`}
        />

        {/* Floating Shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float-slow ${
                i % 3 === 0
                  ? "rounded-full"
                  : i % 3 === 1
                  ? "rotate-45"
                  : "rotate-12"
              }`}
              style={{
                width: `${20 + (i % 5) * 10}px`,
                height: `${20 + (i % 5) * 10}px`,
                background: `radial-gradient(circle, ${
                  isDarkMode
                    ? "rgba(168, 85, 247, 0.1)"
                    : "rgba(192, 132, 252, 0.2)"
                }, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${20 + i * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-10">
          {/* Left Content */}
          <div
            className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Enhanced Status Badge */}
            <div
              className={`inline-flex items-center px-6 py-3 rounded-2xl backdrop-blur-xl border mb-8 animate-pulse ${
                isDarkMode
                  ? "bg-gradient-to-r from-green-400/10 to-emerald-400/10 border-green-400/20 text-green-300 shadow-2xl shadow-green-500/10"
                  : "bg-gradient-to-r from-green-400/20 to-emerald-400/20 border-green-400/30 text-green-700 shadow-2xl shadow-green-500/20"
              }`}
            >
              <div className="relative mr-3">
                <div
                  className={`w-3 h-3 rounded-full animate-ping absolute ${
                    isDarkMode ? "bg-green-400" : "bg-green-500"
                  }`}
                />
                <div
                  className={`w-3 h-3 rounded-full ${
                    isDarkMode ? "bg-green-400" : "bg-green-500"
                  }`}
                />
              </div>
              <span className="font-semibold">
                🚀 Available for International Opportunities
              </span>
            </div>

            {/* Enhanced Main Heading */}
            <div className="mb-8">
              <div className="mb-6">
                <span
                  className={`text-2xl font-light tracking-widest block mb-4 transition-colors duration-500 ${
                    isDarkMode ? "text-purple-300" : "text-purple-600"
                  }`}
                >
                  👋 Hello World, I'm
                </span>
                <div className="relative">
                  <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient">
                      Md Ayub Ali
                    </span>
                  </h1>
                  <div className="absolute -bottom-4 left-0 w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full opacity-80 animate-pulse" />
                </div>
              </div>

              <div className="relative mb-8">
                <h2
                  className={`text-2xl lg:text-2xl font-light mb-6 tracking-wide transition-colors duration-500 ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Senior{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                    Frontend Developer
                  </span>{" "}
                  &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">
                    UI Specialist
                  </span>
                </h2>
                <p
                  className={`text-sm leading-relaxed max-w-2xl transition-colors duration-500 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Building High-Performance Applications That Deliver Business
                  Value Experienced Software Engineer specializing in full-stack
                  development, system architecture, and digital innovation.
                  Proven ability to translate business requirements into
                  technical solutions that enhance user experience and
                  operational efficiency.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105 transform"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={`group px-8 py-4 border-2 font-bold text-lg rounded-2xl transition-all duration-500 hover:scale-105 transform backdrop-blur-sm shadow-xl ${
                  isDarkMode
                    ? "border-purple-500/50 text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:border-purple-400"
                    : "border-purple-500/30 text-purple-700 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400"
                }`}
              >
                <span className="flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Let's Talk
                </span>
              </button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <SocialButton
                href="https://www.linkedin.com/in/salauddin--ayub/"
                icon={<Linkedin />}
                label="LinkedIn"
                isDarkMode={isDarkMode}
              />
              <SocialButton
                href="https://github.com/salauddin-ayub"
                icon={<Github />}
                label="GitHub"
                isDarkMode={isDarkMode}
              />
            </div>
          </div>

          {/* Enhanced Right Content - 3D Profile Effect */}
          <div
            className={`lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 transition-all duration-1000 delay-300 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0 rotate-0"
                : "opacity-0 translate-y-10 rotate-12"
            }`}
          >
            <div className="relative group">
              {/* Animated Orbital Rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-purple-500/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-pink-500/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-blue-500/20 rounded-full" />
              </div>

              {/* Main Profile Container */}
              <div
                className={`relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden backdrop-blur-xl border-2 group-hover:scale-105 transition-all duration-700 shadow-2xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 border-purple-500/30"
                    : "bg-gradient-to-br from-purple-100/50 via-pink-100/40 to-blue-100/30 border-purple-300/50"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10" />

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
                </div>

                <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    {/* Enhanced Avatar */}
                    <div className="relative mx-auto mb-6">
                      <div className="w-32 h-32 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 transform group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                        <img
                          src={ayub}
                          alt="MA"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center animate-bounce">
                        <Sparkle className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Status Indicators */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2" />
                          <span
                            className={`text-sm font-medium ${
                              isDarkMode ? "text-green-300" : "text-green-600"
                            }`}
                          >
                            Available
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 mr-2 text-blue-400" />
                          <span
                            className={`text-sm font-medium ${
                              isDarkMode ? "text-blue-300" : "text-blue-600"
                            }`}
                          >
                            Remote
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-center space-x-2">
                        {["React", "TS", "Next.js"].map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              isDarkMode
                                ? "bg-white/10 text-purple-300"
                                : "bg-black/10 text-purple-600"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center animate-float shadow-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center animate-float delay-1000 shadow-lg">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-1/2 -right-6 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center animate-float delay-2000 shadow-lg">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => scrollToSection("skills")}
            className={`group flex flex-col items-center transition-all duration-500 ${
              isDarkMode
                ? "text-purple-300 hover:text-white"
                : "text-purple-600 hover:text-purple-800"
            }`}
          >
            <span className="text-sm mb-3 tracking-widest font-medium group-hover:scale-110 transition-transform duration-300">
              EXPLORE MORE
            </span>
            <div className="relative">
              <ChevronDown className="w-6 h-6 animate-bounce" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

// Updated Social Button Component with theme support
const SocialButton = ({ href, icon, label, isDarkMode }) => (
  <a
    href={href}
    className={`group relative p-4 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-110 transform ${
      isDarkMode
        ? "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
        : "bg-black/5 border-black/10 text-gray-600 hover:text-black hover:bg-black/10"
    }`}
    aria-label={label}
  >
    <div className="relative z-10">
      <div className="text-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
  </a>
);

// Updated Skills Section with theme support
const Skills = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: "Frontend Excellence",
      icon: <Code2 className="w-8 h-8" />,
      skills: [
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Redux",
        "GraphQL",
      ],
      gradient: "from-purple-500 to-pink-500",
      level: 95,
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      skills: [
        "Figma",
        "Design Systems",
        "Prototyping",
        "User Research",
        "Animation",
      ],
      gradient: "from-blue-500 to-cyan-500",
      level: 90,
    },
    {
      title: "Backend & DevOps",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker"],
      gradient: "from-green-500 to-emerald-500",
      level: 85,
    },
    {
      title: "Mobile & Emerging",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["React Native", "WebGL", "AI Integration", "Blockchain"],
      gradient: "from-orange-500 to-red-500",
      level: 80,
    },
  ];

  return (
    <section id="skills" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-6 py-3 rounded-2xl backdrop-blur-xl border mb-6 transition-colors duration-500 ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-300"
                : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-700"
            }`}
          >
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="font-semibold">Tech Stack & Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Skills Mastery
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Mastering cutting-edge technologies to deliver exceptional digital
            solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              isDarkMode={isDarkMode}
              index={index}
            />
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3
            className={`text-2xl font-bold text-center mb-8 transition-colors duration-500 ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Technologies I Work With
          </h3>
          <div
            className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 rounded-3xl backdrop-blur-xl border transition-colors duration-500 ${
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/80 border-gray-200/50"
            }`}
          >
            {[
              { icon: "⚛️", name: "React" },
              { icon: "🔷", name: "TypeScript" },
              { icon: "🎨", name: "Tailwind" },
              { icon: "▲", name: "Next.js" },
              { icon: "🔗", name: "GraphQL" },
              { icon: "🐳", name: "Docker" },
              { icon: "☁️", name: "AWS" },
              { icon: "📱", name: "React Native" },
              { icon: "🗃️", name: "MongoDB" },
              { icon: "⚡", name: "Node.js" },
              { icon: "🎯", name: "Jest" },
              { icon: "🔧", name: "Webpack" },
            ].map((tech, i) => (
              <div
                key={i}
                className={`text-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
                }`}
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div
                  className={`text-sm font-medium transition-colors duration-500 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated Skill Card Component with theme support
const SkillCard = ({ category, isDarkMode, index }) => {
  return (
    <div
      className={`group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-700 hover:scale-105 ${
        isDarkMode
          ? "bg-white/5 border-white/10 hover:bg-white/10"
          : "bg-white/80 border-gray-200/50 hover:bg-white"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div
            className={`p-3 rounded-2xl bg-gradient-to-r ${category.gradient} shadow-lg`}
          >
            {category.icon}
          </div>
          <div
            className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
          >
            {category.level}%
          </div>
        </div>

        <h3
          className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {category.title}
        </h3>

        {/* Skill Level Bar */}
        <div
          className={`w-full h-2 rounded-full mb-6 overflow-hidden ${
            isDarkMode ? "bg-white/10" : "bg-black/10"
          }`}
        >
          <div
            className={`h-full rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out`}
            style={{ width: `${category.level}%` }}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className={`flex items-center p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                isDarkMode ? "hover:bg-white/5" : "hover:bg-black/5"
              }`}
            >
              <CheckCircle
                className={`w-4 h-4 mr-3 ${
                  category.gradient.includes("purple")
                    ? "text-purple-400"
                    : category.gradient.includes("blue")
                    ? "text-blue-400"
                    : category.gradient.includes("green")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              />
              <span
                className={`font-medium transition-colors duration-500 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Updated Experience Section with theme support
const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Dekko Isho Group",
      period: "Dec 2024 - Present",
      location: "Dhaka, Bangladesh",
      description:
        "Architecting enterprise-grade solutions for one of Bangladesh's leading conglomerates, delivering high-performance applications serving 20,000+ users across multiple business divisions.",
      achievements: [
        "Engineered core business modules (HR, Inventory, Tech Service, Merchandising, Finance)",
        "Achieved 20% reduction in load time, significantly improving user experience",
        "Built scalable component architecture for cross-functional team collaboration",
      ],
      gradient: "from-purple-600 to-pink-600",
      technologies: [
        "React.js",
        "Redux",
        "Context API",
        "RESTful APIs",
        "Next.js",
      ],
      icon: <Crown className="w-6 h-6" />,
    },
    {
      role: "Software Engineer",
      company: "Buyonia Bangladesh Ltd",
      period: "Apr 2022 - Nov 2024",
      location: "Dhaka, Bangladesh",
      description:
        "Specialized in building modern, responsive business applications with focus on performance optimization and scalable architecture using cutting-edge frontend technologies.",
      achievements: [
        "Enhanced core application modules with React.js, Redux, and Tailwind CSS",
        "Developed intuitive user interfaces that elevated business application standards",
        "Implemented modular component design ensuring maintainability and scalability",
      ],
      gradient: "from-blue-600 to-cyan-600",
      technologies: [
        "React.js",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "JavaScript",
      ],
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-6 py-3 rounded-2xl backdrop-blur-xl border mb-6 transition-colors duration-500 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-300"
                : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-700"
            }`}
          >
            <Briefcase className="w-5 h-5 mr-2" />
            <span className="font-semibold">Professional Journey</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Delivering innovative software solutions and driving digital
            transformation with measurable business impact
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0 group">
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-purple-500/50 to-transparent group-hover:from-pink-500/70 transition-colors duration-500" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black shadow-lg z-10 group-hover:scale-125 transition-transform duration-300" />

              <div
                className={`ml-16 p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 hover:scale-102 ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/80 border-gray-200/50 hover:bg-white"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${exp.gradient} shadow-lg`}
                    >
                      {exp.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex items-center space-x-4">
                        <p
                          className={`text-lg bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-semibold`}
                        >
                          {exp.company}
                        </p>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span
                            className={
                              isDarkMode ? "text-gray-400" : "text-gray-600"
                            }
                          >
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex items-center px-4 py-2 rounded-full ${
                      isDarkMode ? "bg-white/10" : "bg-black/10"
                    }`}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    <span
                      className={`font-medium ${
                        isDarkMode ? "text-purple-300" : "text-purple-600"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p
                  className={`text-lg mb-6 leading-relaxed transition-colors duration-500 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4
                      className={`font-semibold mb-3 flex items-center transition-colors duration-500 ${
                        isDarkMode ? "text-green-300" : "text-green-600"
                      }`}
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className={`flex items-center p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                            isDarkMode ? "hover:bg-white/5" : "hover:bg-black/5"
                          }`}
                        >
                          <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          <span
                            className={
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            }
                          >
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4
                      className={`font-semibold mb-3 flex items-center transition-colors duration-500 ${
                        isDarkMode ? "text-blue-300" : "text-blue-600"
                      }`}
                    >
                      <Code2 className="w-5 h-5 mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                            isDarkMode
                              ? "bg-white/10 text-gray-300 hover:bg-white/20"
                              : "bg-black/10 text-gray-600 hover:bg-black/20"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div
          className={`mt-16 p-8 rounded-3xl backdrop-blur-xl border transition-colors duration-500 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20"
              : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "2.5+",
                label: "Years Experience",
                icon: <Calendar className="w-8 h-8" />,
              },
              {
                number: "50+",
                label: "Features Delivered",
                icon: <Target className="w-8 h-8" />,
              },
              {
                number: "20K+",
                label: "Active Users",
                icon: <Globe className="w-8 h-8" />,
              },
              {
                number: "20%",
                label: "Performance Boost",
                icon: <Heart className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div
                  className={`p-4 rounded-2xl inline-flex mb-4 transition-all duration-500 group-hover:scale-110 ${
                    isDarkMode ? "bg-white/10" : "bg-white/50"
                  }`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div
                  className={`font-medium transition-colors duration-500 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated Projects Section with theme support
const Projects = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => {
        const updated = { ...prev };
        projects.forEach((_, index) => {
          updated[index] =
            ((prev[index] || 0) + 1) % projects[index].images.length;
        });
        return updated;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "EBS-365 ERP",
      category: "Enterprise Resource Planning",
      description:
        "Comprehensive enterprise management platform serving major corporations with end-to-end business process automation.",
      longDescription:
        "Led front-end development of a comprehensive ERP system serving multiple enterprises including Dekko Isho Group and Montrims Ltd. Designed and implemented modules for Purchase-to-Pay, Merchandising, Finance, HRM, Production, and Commercial operations, reducing manual processes by 40%. Integrated RESTful APIs and AWS services for scalable cloud deployment, ensuring high availability and real-time data synchronization across modules.",
      tech: [
        "React.js",
        "Prime React",
        "Tailwind CSS",
        ".NET Core",
        "Redux",
        "SQL Server",
        "REST API",
        "AWS",
      ],
      images: [ebs1, ebs2, ebs3, ebs3],
      gradient: "from-indigo-600 to-blue-600",
      stats: {
        enterprises: "2+ Major Corps",
        efficiency: "40% Reduction",
        modules: "6+ Integrated",
      },
      impact: [
        "Reduced manual business processes by 40% through automation",
        "Served major enterprises including Dekko Isho Group and Montrims Ltd",
        "Implemented comprehensive modules covering entire business operations",
        "Enabled real-time data synchronization across all departments",
        "Scalable cloud deployment with AWS ensuring high availability",
      ],
      featured: true,
      liveLink: "https://demogmt.ebs365.info/#/login",
      githubLink: "#",
      type: "Enterprise SaaS",
      duration: "Apr 2022 – Nov 2024",
    },

    {
      title: "Fast Track Booking",
      category: "Hotel Management System",
      description:
        "Enterprise-grade hotel booking platform revolutionizing hospitality operations across Cox's Bazar.",
      longDescription:
        "Architected and deployed a sophisticated full-stack hotel management ecosystem that transforms traditional booking processes into streamlined digital experiences. The platform integrates advanced calendar-based room allocation algorithms, intelligent conflict detection, and comprehensive reporting capabilities.",
      tech: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "Ant Design",
        "REST API",
        "Vercel",
        "Render",
      ],
      images: [ftb1, ftb2],
      gradient: "from-blue-600 to-cyan-600",
      stats: {
        hotels: "5 Hotels",
        efficiency: "+50%",
        bookings: "Real-time",
      },
      impact: [
        "Deployed across 5 premium hotels in Cox's Bazar tourist hub",
        "Achieved 50% improvement in operational efficiency metrics",
        "Real-time room availability with zero double-booking incidents",
        "Automated invoice generation reducing admin work by 60%",
      ],
      featured: true,
      liveLink: "https://www.fasttrackbookingbd.com/",
      githubLink: "#",
      type: "Full Stack",
    },
    {
      title: "Hoktok Fashion",
      category: "E-Commerce Platform",
      description:
        "Modern fashion e-commerce with integrated logistics and real-time inventory management.",
      longDescription:
        "Engineered a responsive, high-performance e-commerce ecosystem for fashion retail with intelligent product categorization, dynamic search capabilities, and real-time inventory synchronization. Integrated Pathao Courier API for automated shipping and live order tracking.",
      tech: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "REST API",
        "Pathao API",
        "Vercel",
      ],
      images: [hoktok1, hoktok2, hoktok3],
      gradient: "from-purple-600 to-pink-600",
      stats: {
        products: "500+",
        orders: "Live Track",
        seo: "Optimized",
      },
      impact: [
        "Dynamic product catalog with advanced filtering and search",
        "Seamless Pathao Courier integration for automated logistics",
        "User authentication with secure order management",
        "SEO optimization driving 200% increase in organic traffic",
      ],
      featured: true,
      liveLink: "https://www.hoktok.com.bd/",
      githubLink: "#",
      type: "E-Commerce",
    },
    {
      title: "Smart Dhopa",
      category: "Laundry Management",
      description:
        "Bangladesh's first digital laundry platform with location-based ordering and real-time tracking.",
      longDescription:
        "Pioneered DIU's first online laundry management platform, digitalizing washing, dry cleaning, and laundry operations. Built with React.js and Firebase for real-time order synchronization, automated notifications, and intelligent staff management portals.",
      tech: [
        "React.js",
        "Firebase",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Material UI",
        "JavaScript",
      ],
      images: [smart1, smart2, smart3],
      gradient: "from-green-600 to-emerald-600",
      stats: {
        users: "DIU Campus",
        turnaround: "Automated",
        tracking: "Real-time",
      },
      impact: [
        "First online laundry platform at Dhaka International University",
        "Location-based order creation with automated routing",
        "Real-time Firebase notifications for order status updates",
        "Staff management portal optimizing operational workflow",
      ],
      featured: true,
      liveLink: "https://smart-dhopa-online-laundry-app.web.app/",
      githubLink: "#",
      type: "SaaS Platform",
    },
    {
      title: "Medico",
      category: "Healthcare E-Commerce",
      description:
        "Secure online medicine store with prescription management and SSL payment integration.",
      longDescription:
        "Developed a secure, compliant online pharmacy platform with prescription upload and verification system. Features intelligent medicine search, category-based browsing, and SSL Commerz payment gateway integration for secure transactions.",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "SSL Commerz",
        "Firebase",
      ],
      images: [medico1, medico2, medico3],
      gradient: "from-red-600 to-orange-600",
      stats: {
        medicines: "500+",
        secure: "SSL",
        rx: "Verified",
      },
      impact: [
        "Prescription upload and verification for controlled dispensing",
        "Advanced medicine search with categorization system",
        "Secure payment processing with SSL Commerz integration",
        "User authentication ensuring privacy and security compliance",
      ],
      featured: false,
      liveLink: "https://medico-eb8e9.web.app/",
      githubLink: "https://github.com/salauddin-ayub/Medico",
      type: "Healthcare Platform",
    },
    {
      title: "Lanhong Textile",
      category: "Corporate Portfolio",
      description:
        "Premium corporate portfolio showcasing textile manufacturing capabilities.",
      longDescription:
        "Crafted a sophisticated corporate portfolio website for textile business representation. Built with Next.js for lightning-fast performance and superior SEO rankings. Features responsive design showcasing textile collections and manufacturing capabilities.",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      images: [lanhong1, lanhong2, lanhong3],
      gradient: "from-indigo-600 to-purple-600",
      stats: {
        performance: "A+ Score",
        seo: "Optimized",
        responsive: "100%",
      },
      impact: [
        "Clean, professional design elevating brand image",
        "Next.js optimization for superior loading speeds",
        "Responsive layouts across all device categories",
        "SEO-friendly structure improving search visibility",
      ],
      featured: false,
      liveLink: "https://lanhongtextile.vercel.app/",
      githubLink: "https://github.com/anisurarzu/lanhong-textile",
      type: "Corporate Website",
    },
    {
      title: "Blood Donation",
      category: "Social Impact Platform",
      description:
        "Community-driven blood donation platform connecting donors with recipients.",
      longDescription:
        "Created a social impact platform facilitating life-saving blood donations across communities. Built with React.js and Tailwind CSS emphasizing accessibility and user experience. Features efficient donor registration and streamlined request management system.",
      tech: ["React.js", "Tailwind CSS", "Firebase"],
      images: [blood1, blood2, blood3],
      gradient: "from-rose-600 to-pink-600",
      stats: {
        donors: "Community",
        accessible: "WCAG 2.1",
        responsive: "Mobile-First",
      },
      impact: [
        "User-friendly donor registration and profile management",
        "Blood group and location-based search functionality",
        "Responsive design ensuring accessibility on all devices",
        "Efficient form handling streamlining donation requests",
      ],
      featured: false,
      liveLink: "https://bdblooddonation.netlify.app/",
      githubLink: "https://github.com/salauddin-ayub/Blood_Donation",
      type: "Social Platform",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  const nextImage = (projectIndex) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length,
    }));
  };

  const prevImage = (projectIndex) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length,
    }));
  };

  const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 mt-20">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
          onClick={onClose}
        />

        {/* Modal Content */}
        <div
          className={`relative w-full max-w-5xl h-[85vh] rounded-2xl transform transition-all duration-500 scale-100 flex overflow-hidden ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-white/20"
              : "bg-white border-2 border-gray-200"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 z-10 p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-90 ${
              isDarkMode
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Section - Fixed Width */}
          <div className="relative w-[45%] flex-shrink-0">
            <div className="relative h-full overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="w-full h-full object-contain"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
              />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (currentImageIndex - 1 + project.images.length) %
                          project.images.length
                      )
                    }
                    className={`absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 ${
                      isDarkMode
                        ? "bg-white/20 hover:bg-white/30"
                        : "bg-black/20 hover:bg-black/30"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (currentImageIndex + 1) % project.images.length
                      )
                    }
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 ${
                      isDarkMode
                        ? "bg-white/20 hover:bg-white/30"
                        : "bg-black/20 hover:bg-black/30"
                    }`}
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}

              {/* Image Dots */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === currentImageIndex
                          ? "w-8 bg-white shadow-lg"
                          : "w-1.5 bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Image Counter */}
              <div className="absolute top-4 left-4">
                <div
                  className={`px-3 py-1.5 rounded-lg backdrop-blur-xl font-semibold text-xs ${
                    isDarkMode
                      ? "bg-white/20 text-white"
                      : "bg-black/20 text-white"
                  }`}
                >
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Header */}
            <div className="mb-4">
              <div
                className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold mb-2 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                }`}
              >
                <Layout className="w-3 h-3 mr-1.5" />
                {project.category}
              </div>

              <h2
                className={`text-xl font-black mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {project.title}
              </h2>

              <p
                className={`text-xs leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.longDescription}
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-2 p-3 rounded-xl mb-4 ${
                isDarkMode
                  ? "bg-gradient-to-br from-white/5 to-white/10"
                  : "bg-gradient-to-br from-gray-50 to-gray-100"
              }`}
            >
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div
                    className={`text-sm font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-0.5`}
                  >
                    {value}
                  </div>
                  <div
                    className={`text-[10px] font-semibold uppercase tracking-wide ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {key}
                  </div>
                </div>
              ))}
            </div>

            {/* Impact */}
            <div className="mb-4">
              <h3
                className={`text-sm font-bold mb-2 flex items-center ${
                  isDarkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                <TrendingUp className="w-4 h-4 mr-1.5" />
                Key Impact
              </h3>
              <div className="space-y-2">
                {project.impact.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start p-2 rounded-lg transition-all duration-300 ${
                      isDarkMode
                        ? "bg-white/5 hover:bg-white/10"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <Zap
                      className={`w-3 h-3 mr-2 mt-0.5 flex-shrink-0 ${
                        isDarkMode ? "text-yellow-400" : "text-yellow-600"
                      }`}
                    />
                    <span
                      className={`text-xs leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-4">
              <h3
                className={`text-sm font-bold mb-2 flex items-center ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                <Code2 className="w-4 h-4 mr-1.5" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-white/10 text-white border-white/20 hover:bg-white/20"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-2">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex-1 text-sm shadow-xl ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-purple-500/50"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-purple-500/50"
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>

              {project.githubLink !== "#" && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl font-bold transition-all duration-300 hover:scale-105 text-sm ${
                    isDarkMode
                      ? "bg-white/10 text-white hover:bg-white/20 border-2 border-white/20"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-300"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project, isDarkMode, index }) => {
    const currentImageIndex = activeImageIndex[index] || 0;

    return (
      <>
        <div
          onClick={() => {
            setSelectedProject(project);
            setCurrentImageIndex(0);
          }}
          className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-purple-500/20"
              : "bg-white backdrop-blur-xl border border-gray-200/50 shadow-lg hover:shadow-purple-500/30"
          }`}
        >
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-20">
              <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white text-xs font-bold shadow-xl flex items-center space-x-1.5 animate-pulse">
                <Award className="w-3.5 h-3.5" />
                <span>Featured</span>
              </div>
            </div>
          )}

          {/* Project Type Badge */}
          <div className="absolute top-4 left-4 z-20">
            <div
              className={`px-3 py-1.5 rounded-full backdrop-blur-xl text-xs font-semibold border shadow-lg ${
                isDarkMode
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-white/90 border-gray-200 text-gray-700"
              }`}
            >
              {project.type}
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative h-56 overflow-hidden">
            <div className="relative w-full h-full">
              {project.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`${project.title} - View ${imgIndex + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    imgIndex === currentImageIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                />
              ))}
            </div>

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${
                isDarkMode
                  ? "from-gray-900 via-gray-900/50 to-transparent"
                  : "from-white via-white/50 to-transparent"
              }`}
            />

            {/* Color Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay`}
            />

            {/* Navigation Arrows - Always visible on hover */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage(index);
                  }}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-white/20 hover:bg-white/30"
                      : "bg-black/20 hover:bg-black/30"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage(index);
                  }}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-white/20 hover:bg-white/30"
                      : "bg-black/20 hover:bg-black/30"
                  }`}
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>

                {/* Elegant Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => ({
                          ...prev,
                          [index]: dotIndex,
                        }));
                      }}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        dotIndex === currentImageIndex
                          ? "w-8 bg-white shadow-lg"
                          : "w-1.5 bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category */}
            <div
              className={`inline-flex items-center mb-2 text-xs font-semibold ${
                isDarkMode ? "text-purple-400" : "text-purple-600"
              }`}
            >
              <Layout className="w-3.5 h-3.5 mr-1.5" />
              {project.category}
            </div>

            {/* Title */}
            <h3
              className={`text-lg font-bold mb-3 transition-colors duration-300 line-clamp-1 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm mb-4 leading-relaxed transition-colors duration-300 line-clamp-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {project.description}
            </p>

            {/* Stats Bar */}
            <div
              className={`grid grid-cols-3 gap-2 p-3 rounded-xl mb-4 ${
                isDarkMode ? "bg-white/5" : "bg-gray-50"
              }`}
            >
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div
                    className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {value}
                  </div>
                  <div
                    className={`text-xs ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium backdrop-blur-sm border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                      isDarkMode
                        ? "text-purple-400 bg-purple-500/10"
                        : "text-purple-600 bg-purple-50"
                    }`}
                  >
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex-1 text-sm ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/40"
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>

              {project.githubLink !== "#" && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                  title="View Code"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
          />
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={project}
          isOpen={selectedProject?.title === project.title}
          onClose={() => setSelectedProject(null)}
        />
      </>
    );
  };

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-300"
          }`}
        />
        <div
          className={`absolute top-1/2 -left-16 w-64 h-64 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-pink-500" : "bg-pink-300"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center px-4 py-1.5 rounded-lg backdrop-blur-xl border mb-3 transition-colors duration-500 ${
              isDarkMode
                ? "bg-white/5 border-white/10 text-purple-300"
                : "bg-purple-50 border-purple-200 text-purple-700"
            }`}
          >
            <Rocket className="w-3 h-3 mr-1.5" />
            <span className="font-semibold text-xs">Featured Work</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-black mb-3">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>

          <p
            className={`text-base max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Innovative digital solutions driving business growth and delivering
            measurable impact
          </p>

          {/* Stats Bar */}
          <div
            className={`mt-6 inline-flex items-center space-x-4 px-5 py-2 rounded-lg backdrop-blur-xl border ${
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/80 border-gray-200"
            }`}
          >
            {[
              { value: "6+", label: "Projects" },
              { value: "5", label: "Industries" },
              { value: "100%", label: "Deployed" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-base font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-xs ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isDarkMode={isDarkMode}
              index={index}
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`group px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-105 backdrop-blur-xl border-2 text-base shadow-lg ${
                isDarkMode
                  ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  : "bg-purple-50 border-purple-300 text-purple-700 hover:bg-purple-100"
              }`}
            >
              <span className="flex items-center justify-center">
                {showAll ? (
                  <>
                    Show Less
                    <ArrowRight className="w-4 h-4 ml-2 rotate-180 transition-transform duration-300" />
                  </>
                ) : (
                  <>
                    View All Projects
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Updated Testimonials Section with theme support
const Testimonials = ({ isDarkMode }) => {
  const testimonials = [
    {
      name: "Anisur Rahman",
      role: "Business Owner",
      company: "Fast Track Booking",
      content:
        "Ayub developed our complete hotel management system that transformed our operations. The platform handles bookings for 5+ hotels efficiently with real-time availability tracking. His technical expertise and attention to detail made the entire process smooth.",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500",
      avatar: "🏨",
      project: "Fast Track Booking",
    },
    {
      name: "Saad Ahmed",
      role: "Healthcare Entrepreneur",
      company: "Medico Pharmacy",
      content:
        "The Medico platform Ayub built revolutionized our pharmacy operations. The prescription management system and secure payment integration have made online medicine ordering safe and reliable for our customers. Highly recommended for healthcare solutions.",
      rating: 5,
      gradient: "from-green-500 to-emerald-500",
      avatar: "💊",
      project: "Medico",
    },
    {
      name: "Ashraful Islam Spondon",
      role: "Social Activist",
      company: "Blood Donation Community",
      content:
        "Ayub created an amazing blood donation platform that connects donors with recipients seamlessly. The user-friendly interface and efficient matching system have helped save countless lives in our community. Truly impactful work!",
      rating: 5,
      gradient: "from-red-500 to-rose-500",
      avatar: "🩸",
      project: "Blood Donation Platform",
    },
    {
      name: "Khairul Islam Razu",
      role: "E-Commerce Manager",
      company: "Hoktok Fashion",
      content:
        "The e-commerce platform developed by Ayub has significantly boosted our online sales. The integration with Pathao Courier and real-time inventory management made our operations much more efficient. Great work!",
      rating: 5,
      gradient: "from-purple-500 to-pink-500",
      avatar: "👕",
      project: "Hoktok Fashion",
    },
  ];

  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
        <div
          className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-green-500" : "bg-green-300"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center px-4 py-2 rounded-lg backdrop-blur-xl border mb-4 ${
              isDarkMode
                ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                : "bg-blue-100 border-blue-200 text-blue-700"
            }`}
          >
            <HeartHandshake className="w-4 h-4 mr-2" />
            <span className="font-semibold text-sm">Client Testimonials</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>

          <p
            className={`text-base max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Feedback from entrepreneurs and organizations I've worked with
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div
                  className={`text-2xl p-3 rounded-lg ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  {testimonial.avatar}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current mr-1"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p
                    className={`text-sm mb-4 leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div>
                    <h4
                      className={`font-semibold text-base mb-1 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className={`text-sm mb-1 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {testimonial.role}
                    </p>
                    <p
                      className={`text-xs ${
                        isDarkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {testimonial.company} • {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div
          className={`p-8 rounded-xl border ${
            isDarkMode
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                value: "6+",
                label: "Projects Completed",
                icon: <CheckCircle className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500",
              },
              {
                value: "5+",
                label: "Happy Clients",
                icon: <Users className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                value: "100%",
                label: "On-Time Delivery",
                icon: <Clock className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                value: "4+",
                label: "Industries Served",
                icon: <Building className="w-6 h-6" />,
                color: "from-orange-500 to-red-500",
              },
            ].map((metric, index) => (
              <div key={index} className="group">
                <div
                  className={`p-3 rounded-lg inline-flex mb-3 transition-all duration-300 group-hover:scale-110 ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  {metric.icon}
                </div>
                <div
                  className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}
                >
                  {metric.value}
                </div>
                <div
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div
            className={`inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl border ${
              isDarkMode
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="text-left">
              <h3
                className={`font-semibold text-lg mb-1 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Ready to start your project?
              </h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Let's discuss how I can help bring your ideas to life
              </p>
            </div>
            <a
              href="#contact"
              className={`px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300 whitespace-nowrap`}
            >
              Start Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated Contact Section with theme support
const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/meorglqj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your message! I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact me directly at salauddinnayub@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submitStatus) setSubmitStatus(null);
  };

  const SocialButton = ({ href, icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
        isDarkMode
          ? "bg-gray-700 border border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
          : "bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
      } shadow-sm`}
      aria-label={label}
    >
      {icon}
    </a>
  );

  return (
    <section
      id="contact"
      className={`py-20 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-blue-50 via-white to-indigo-50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-900" : "bg-blue-200"
          }`}
        />
        <div
          className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-purple-900" : "bg-purple-200"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-cyan-900" : "bg-cyan-200"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-4 py-2 rounded-lg border mb-4 transition-colors duration-500 ${
              isDarkMode
                ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                : "bg-blue-100 border-blue-200 text-blue-700"
            }`}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="font-semibold text-sm">Let's Connect</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <p
            className={`text-base max-w-2xl mx-auto transition-colors duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3
                className={`text-xl font-semibold mb-4 transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Let's start a conversation
              </h3>
              <p
                className={`text-sm leading-relaxed transition-colors duration-500 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm always open to discussing new opportunities, creative
                projects, or potential collaborations. Whether you have a
                project in mind or just want to say hello, I'd love to hear from
                you!
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <Mail className="w-4 h-4" />,
                  title: "Email",
                  content: "salauddinnayub@gmail.com",
                  href: "mailto:salauddinnayub@gmail.com",
                  gradient: "from-purple-500 to-pink-500",
                  lightBg: "bg-purple-50",
                  lightBorder: "border-purple-200",
                  lightHover: "hover:bg-purple-100",
                  darkBg: "bg-purple-500/10",
                  darkBorder: "border-purple-500/20",
                  darkHover: "hover:bg-purple-500/20",
                },
                {
                  icon: <Phone className="w-4 h-4" />,
                  title: "Phone",
                  content: "+8801910546032",
                  href: "tel:+8801910546032",
                  gradient: "from-blue-500 to-cyan-500",
                  lightBg: "bg-blue-50",
                  lightBorder: "border-blue-200",
                  lightHover: "hover:bg-blue-100",
                  darkBg: "bg-blue-500/10",
                  darkBorder: "border-blue-500/20",
                  darkHover: "hover:bg-blue-500/20",
                },
                {
                  icon: <MessageCircle className="w-4 h-4" />,
                  title: "WhatsApp",
                  content: "+8801640901906",
                  href: "https://wa.me/8801640901906",
                  gradient: "from-green-500 to-emerald-500",
                  lightBg: "bg-green-50",
                  lightBorder: "border-green-200",
                  lightHover: "hover:bg-green-100",
                  darkBg: "bg-green-500/10",
                  darkBorder: "border-green-500/20",
                  darkHover: "hover:bg-green-500/20",
                },
                {
                  icon: <MapPin className="w-4 h-4" />,
                  title: "Location",
                  content: "Ati Bazar, Keraniganj, Dhaka",
                  href: "https://maps.google.com/?q=Ati+Bazar,+Keraniganj,+Dhaka",
                  gradient: "from-orange-500 to-red-500",
                  lightBg: "bg-orange-50",
                  lightBorder: "border-orange-200",
                  lightHover: "hover:bg-orange-100",
                  darkBg: "bg-orange-500/10",
                  darkBorder: "border-orange-500/20",
                  darkHover: "hover:bg-orange-500/20",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 border rounded-xl transition-all duration-300 hover:scale-105 shadow-sm ${
                    isDarkMode
                      ? `${item.darkBg} ${item.darkBorder} ${item.darkHover}`
                      : `${item.lightBg} ${item.lightBorder} ${item.lightHover}`
                  }`}
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mr-3 shadow-sm`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-sm transition-colors duration-500 ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-sm transition-colors duration-500 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <SocialButton
                href="https://github.com/salauddin-ayub"
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
              />
              <SocialButton
                href="https://www.linkedin.com/in/salauddin-ayub/"
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
              <SocialButton
                href="mailto:salauddinnayub@gmail.com"
                icon={<Mail className="w-5 h-5" />}
                label="Email"
              />
              <SocialButton
                href="https://wa.me/8801640901906"
                icon={<MessageCircle className="w-5 h-5" />}
                label="WhatsApp"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`border rounded-xl p-6 shadow-sm transition-colors duration-500 ${
              isDarkMode
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className={`block font-medium mb-2 text-sm transition-colors duration-500 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block font-medium mb-2 text-sm transition-colors duration-500 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block font-medium mb-2 text-sm transition-colors duration-500 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                  placeholder="Tell me about your project, timeline, and budget..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center shadow-lg ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-blue-500/25"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div
            className={`inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl border shadow-sm transition-colors duration-500 ${
              isDarkMode
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="text-left">
              <h3
                className={`font-semibold text-lg mb-1 transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Ready to start your project?
              </h3>
              <p
                className={`text-sm transition-colors duration-500 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Let's discuss how I can help bring your ideas to life
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-blue-500/25"
            >
              Start Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated Footer Component with theme support
const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative border-t py-12 transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-b from-black to-slate-900 border-white/10"
          : "bg-gradient-to-b from-blue-50 to-indigo-100 border-gray-200"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <span
                className={`text-xl font-bold transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Md Ayub Ali
              </span>
            </div>
            <p
              className={`transition-colors duration-500 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Crafting digital experiences that inspire and innovate
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-6 lg:mb-0">
            {["Skills", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <SocialButton
              href="https://github.com/salauddin-ayub"
              icon={<Github />}
              isDarkMode={isDarkMode}
            />
            <SocialButton
              href="https://www.linkedin.com/in/salauddin--ayub/"
              icon={<Linkedin />}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        <div
          className={`border-t mt-8 pt-8 text-center transition-colors duration-500 ${
            isDarkMode ? "border-white/10" : "border-gray-200"
          }`}
        >
          <p
            className={`transition-colors duration-500 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © {currentYear} Md Ayub Ali. All rights reserved. Crafted with{" "}
            <Heart className="w-4 h-4 inline mx-1 text-red-500" /> and lots of{" "}
            <Coffee className="w-4 h-4 inline mx-1 text-yellow-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Home;
