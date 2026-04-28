import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  HelpCircle,
  Briefcase,
  Shield,
  DollarSign,
  Camera,
  AlertTriangle,
  CheckCircle,
  MessageCircle,
  Home,
  Calendar,
  CreditCard,
  Lock,
  MessageSquare,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { applyPageSeo } from "../utils/seo";

/* ============================ DATA ============================ */
const serviceProFaqs = [
  {
    question: "Who can use the BlinqFix platform as a contractor?",
    answer:
      "Any qualified professional with valid licensing (if applicable), liability insurance, and approval through the onboarding process.",
    icon: Briefcase,
  },
  {
    question: "What insurance do I need?",
    answer:
      "All service providers must carry General Liability Insurance with a minimum of $500,000 per occurrence. BlinqFix must be listed as a Certificate Holder and Additional Insured.",
    icon: Shield,
  },
  {
    question: "Can I work with customers outside the app?",
    answer:
      "No. Direct communication or business with BlinqFix customers outside the app is a violation of the non-circumvention clause.",
    icon: AlertTriangle,
  },
  {
    question: "What happens if I can't complete a job?",
    answer:
      "Notify BlinqFix immediately through the app. We will assess the situation and communicate with the customer.",
    icon: MessageCircle,
  },
  {
    question: "How do I submit additional charges?",
    answer:
      "Only use the in-app 'Additional Charge' feature when the customer initiates a change in scope or it's necessary to perform the original service. Clearly document the request and wait for customer approval before proceeding.",
    icon: DollarSign,
  },
  {
    question: "Are before and after photos mandatory?",
    answer:
      "Yes. Both must be submitted through the app to verify job completion and release payment.",
    icon: Camera,
  },
  {
    question: "How are disputes handled?",
    answer:
      "Most issues are resolved through support. If unresolved, binding arbitration through the American Arbitration Association will be used.",
    icon: AlertTriangle,
  },
  {
    question: "How do I stay in good standing?",
    answer:
      "Be punctual, professional, follow all app instructions, clean up after your work, communicate with customers, and adhere to the Terms and Agreement.",
    icon: CheckCircle,
  },
  {
    question: "Can I accept tips from customers?",
    answer:
      "Yes, you are welcome to accept tips if a customer offers one. In the future, we may offer in-app tipping functionality as well.",
    icon: DollarSign,
  },
];

const customerFaqGroups = [
  {
    title: "General",
    icon: HelpCircle,
    items: [
      {
        q: "What is BlinqFix?",
        a: "BlinqFix is a digital platform that connects homeowners with vetted, local service professionals for home repairs and maintenance. Our goal is to simplify the process of finding reliable help for your home needs.",
      },
      {
        q: "How does BlinqFix work?",
        a: "After signing up, you can submit a service request detailing the issue. BlinqFix then matches you with qualified professionals in your area who can address your specific needs.",
      },
      {
        q: "Which areas does BlinqFix serve?",
        a: "Currently, BlinqFix operates in select regions. Please check our website or app to see if services are available in your area. (Blinq Rewards)",
      },
    ],
  },
  {
    title: "Services",
    icon: Home,
    items: [
      {
        q: "What types of services does BlinqFix offer?",
        a: "We provide a range of home services, including plumbing, electrical work, HVAC maintenance, appliance repairs, and general handyman tasks.",
      },
      {
        q: "Are the service professionals vetted?",
        a: "Yes, all professionals on BlinqFix undergo a thorough background check and verification process to ensure quality and reliability.",
      },
    ],
  },
  {
    title: "Booking & Scheduling",
    icon: Calendar,
    items: [
      {
        q: "How do I book a service?",
        a: "Simply log in to your BlinqFix account, select the service you need, provide details about the issue, and choose a convenient time slot.",
      },
      {
        q: "Can I reschedule or cancel a booking?",
        a: "Yes, you can reschedule or cancel appointments through your account dashboard. Please note our cancellation policy for any applicable fees.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    icon: CreditCard,
    items: [
      {
        q: "How is pricing determined?",
        a: "Pricing is based on the type of service, complexity of the task, and market rates in your area. You'll receive a quote before confirming the booking.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept major credit cards, debit cards, and digital payment methods through our secure payment processing system.",
      },
      {
        q: "When am I charged for a service?",
        a: "Payment is typically processed after the service is completed and you've confirmed satisfaction with the work performed.",
      },
    ],
  },
  {
    title: "Safety & Security",
    icon: Lock,
    items: [
      {
        q: "How do you ensure the safety of customers and service providers?",
        a: "All service professionals undergo background checks, and we have safety protocols in place. We also provide insurance coverage for added protection.",
      },
      {
        q: "Is my personal information secure?",
        a: "Yes, we use industry-standard encryption and security measures to protect your personal and payment information.",
      },
    ],
  },
  {
    title: "Support",
    icon: MessageSquare,
    items: [
      {
        q: "How can I contact BlinqFix support?",
        a: "You can reach our support team through the app, website contact form, or by calling our customer service number during business hours.",
      },
      {
        q: "What if I'm not satisfied with a service?",
        a: "We strive for 100% customer satisfaction. If you're not happy with a service, please contact our support team immediately so we can address your concerns.",
      },
    ],
  },
];

/* ============================ STYLES ============================ */
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
    color: '#ffffff',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    borderRadius: '12px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginBottom: '32px',
    backdropFilter: 'blur(10px)',
  },
  backButtonHover: {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-1px)',
  },
  title: {
    fontSize: '48px',
    fontWeight: '900',
    margin: '0 0 16px 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '20px',
    opacity: '0.9',
    margin: '0 0 32px 0',
    fontWeight: '400',
  },
  tabContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  tab: {
    padding: '16px 32px',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  tabActive: {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
  badge: {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
    marginLeft: '8px',
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
    marginBottom: '48px',
  },
  faqCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: '0',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  },
  faqCardHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
  },
  faqQuestion: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '24px',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    width: '100%',
    textAlign: 'left',
    transition: 'all 0.2s ease',
  },
  faqQuestionHover: {
    background: 'rgba(102, 126, 234, 0.05)',
  },
  iconContainer: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)',
  },
  questionText: {
    flex: 1,
    fontSize: '18px',
    fontWeight: '600',
    color: '#2d3748',
    lineHeight: '1.4',
    margin: 0,
  },
  chevronIcon: {
    color: '#718096',
    transition: 'transform 0.2s ease',
  },
  chevronIconExpanded: {
    transform: 'rotate(90deg)',
  },
  faqAnswer: {
    padding: '0 24px 24px 88px',
    color: '#4a5568',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: 0,
  },
  categorySection: {
    marginBottom: '32px',
  },
  categoryHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
  },
  categoryIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)',
  },
  categoryTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#2d3748',
    margin: 0,
  },
  categoryItems: {
    display: 'grid',
    gap: '16px',
  },
  footer: {
    textAlign: 'center',
    padding: '48px 20px',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  footerText: {
    fontSize: '16px',
    marginBottom: '16px',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    flexWrap: 'wrap',
  },
  footerLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    transition: 'all 0.2s ease',
  },
  footerLinkHover: {
    background: 'rgba(255, 255, 255, 0.2)',
  },
};

/* ============================ COMPONENTS ============================ */
function FAQItem({ question, answer, icon: Icon }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.faqCard,
        ...(isHovered ? styles.faqCardHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        style={{
          ...styles.faqQuestion,
          ...(isHovered ? styles.faqQuestionHover : {})
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={styles.iconContainer}>
          <Icon size={24} color="#ffffff" />
        </div>
        <h3 style={styles.questionText}>{question}</h3>
        <ChevronRight 
          size={20} 
          style={{
            ...styles.chevronIcon,
            ...(isExpanded ? styles.chevronIconExpanded : {})
          }} 
        />
      </button>
      {isExpanded && (
        <p style={styles.faqAnswer}>{answer}</p>
      )}
    </div>
  );
}

function CategorySection({ title, icon: Icon, items }) {
  return (
    <div style={styles.categorySection}>
      <div style={styles.categoryHeader}>
        <div style={styles.categoryIcon}>
          <Icon size={20} color="#ffffff" />
        </div>
        <h2 style={styles.categoryTitle}>{title}</h2>
      </div>
      <div style={styles.categoryItems}>
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.q}
            answer={item.a}
            icon={HelpCircle}
          />
        ))}
      </div>
    </div>
  );
}

/* ============================ MAIN COMPONENT ============================ */
export default function FAQ() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "customer";
  const [activeTab, setActiveTab] = useState(initialTab);

  React.useEffect(() => {
    const customerQuestions = customerFaqGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    );

    const providerQuestions = serviceProFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));

    return applyPageSeo({
      title: "BlinqFix FAQ | Customer and Service Pro Questions",
      description:
        "Read common BlinqFix questions for customers and service providers, including booking, pricing, insurance, payments, and platform policies.",
      canonical: "https://www.blinqfix.com/faq",
      keywords:
        "blinqfix faq, home service faq, contractor faq, booking questions, payout questions, insurance requirements",
      og: {
        url: "https://www.blinqfix.com/faq",
        title: "BlinqFix FAQ",
        description:
          "Frequently asked questions for customers and service pros using BlinqFix.",
      },
      twitter: {
        title: "BlinqFix FAQ",
        description:
          "Answers to common questions about booking, pricing, payments, and service provider requirements.",
      },
      schema: [
        {
          id: "blinqfix-faq-schema",
          data: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [...customerQuestions, ...providerQuestions],
          },
        },
      ],
    });
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("tab", tab);
    navigate(`?${newSearchParams.toString()}`, { replace: true });
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <Link 
            to="/" 
            style={styles.backButton}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.backButtonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.backButton)}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <h1 style={styles.title}>Frequently Asked Questions</h1>
          <p style={styles.subtitle}>
            Find answers to common questions about BlinqFix services
          </p>

          {/* Tab Navigation */}
          <div style={styles.tabContainer}>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === "customer" ? styles.tabActive : {})
              }}
              onClick={() => handleTabChange("customer")}
            >
              <HelpCircle size={20} />
              For Customers
              <span style={styles.badge}>
                {customerFaqGroups.reduce((acc, group) => acc + group.items.length, 0)}
              </span>
            </button>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === "provider" ? styles.tabActive : {})
              }}
              onClick={() => handleTabChange("provider")}
            >
              <Briefcase size={20} />
              For Service Providers
              <span style={styles.badge}>{serviceProFaqs.length}</span>
            </button>
          </div>
        </div>

        {/* FAQ Content */}
        {activeTab === "provider" ? (
          <div style={styles.faqGrid}>
            {serviceProFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
              />
            ))}
          </div>
        ) : (
          <div>
            {customerFaqGroups.map((group, index) => (
              <CategorySection
                key={index}
                title={group.title}
                icon={group.icon}
                items={group.items}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Can't find what you're looking for? Send us an email <a style={{color:'black'}} href="mailto:support@blinqfix.com">support@blinqfix.com</a>
          </p>
          {/* <div style={styles.footerLinks}>
            <a 
              href="/contact" 
              style={styles.footerLink}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.footerLinkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.footerLink)}
            >
              Contact Support
            </a>
            <a 
              href="/help" 
              style={styles.footerLink}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.footerLinkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.footerLink)}
            >
              Help Center
            </a>
            <a 
              href="/feedback" 
              style={styles.footerLink}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.footerLinkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.footerLink)}
            >
              Send Feedback
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
