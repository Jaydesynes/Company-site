import React from "react";
import { ServiceDetailData } from "@/components/services/ServiceDetail";

export const servicesData: Record<string, ServiceDetailData> = {
  "digital-strategy": {
    id: "digital-strategy",
    icon: "briefcase",
    title: "Digital Strategy",
    subtitle: "Rooted in Data. Driven by Vision.",
    description: "We help brands move with precision through tailored digital roadmaps.",
    accentColor: "blue",
    overview: (
      <div className="space-y-6">
        <p>Our digital strategy service combines deep market analysis, competitor research, and audience insights to create comprehensive roadmaps that position your brand for sustained digital success.</p>
        <p>We don't just plan—we architect digital experiences that convert, engage, and scale.</p>
      </div>
    ),
    process: (
      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">1. Discovery & Analysis</h4>
          <p>Deep dive into your business objectives, market position, and competitive landscape</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">2. Strategy Development</h4>
          <p>Create tailored roadmaps aligned with your goals and resources</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">3. Implementation Planning</h4>
          <p>Define actionable steps, timelines, and success metrics</p>
        </div>
      </div>
    ),
    benefits: (
      <ul className="space-y-4 list-disc pl-6">
        <li>Clear direction and measurable goals</li>
        <li>Data-driven decision making</li>
        <li>Competitive advantage in your market</li>
        <li>Scalable growth framework</li>
      </ul>
    ),
    results: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Engagement</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+150%</p>
          <p className="text-sm text-muted-foreground">Average increase in user engagement</p>
        </div>
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Conversion</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+85%</p>
          <p className="text-sm text-muted-foreground">Improvement in conversion rates</p>
        </div>
      </div>
    ),
    tools: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-4 text-center">
          <h4 className="font-semibold">Google Analytics</h4>
          <p className="text-sm text-muted-foreground">Data Analysis</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Tableau</h4>
          <p className="text-sm text-muted-foreground">Visualization</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Ahrefs</h4>
          <p className="text-sm text-muted-foreground">SEO Research</p>
        </div>
      </div>
    ),
  },
  "web-app-development": {
    id: "web-app-development", 
    icon: "code",
    title: "Web & App Development",
    subtitle: "Scalable, Responsive, Future-Proof.",
    description: "At Infisane, we build high-performance websites and applications that blend functionality with stunning design. Whether you're launching a startup or scaling an enterprise platform, our dev team delivers responsive, secure, and scalable solutions tailored to your needs.",
    accentColor: "purple",
    overview: (
      <div className="space-y-6">
        <p>At Infisane, we build high-performance websites and applications that blend functionality with stunning design. Whether you're launching a startup or scaling an enterprise platform, our dev team delivers responsive, secure, and scalable solutions tailored to your needs.</p>
        <p>From sleek front-end interfaces to powerful back-end architecture, we focus on seamless user experiences across all smart devices and screen sizes. We don't just build sites — we build platforms that grow with your business.</p>
      </div>
    ),
    process: (
      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">1. Discovery & Planning</h4>
          <p>Define project goals, user requirements, and technical specifications</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">2. Design & Development</h4>
          <p>Create wireframes, prototypes, and build frontend/backend components</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">3. Testing & Deployment</h4>
          <p>Quality assurance, optimization, and launch</p>
        </div>
      </div>
    ),
    benefits: (
      <ul className="space-y-4 list-disc pl-6">
        <li>Mobile-first responsive design</li>
        <li>Progressive web apps and native builds</li>
        <li>Fast load speed optimization</li>
        <li>Clean, scalable codebases</li>
        <li>Custom CMS or headless integration</li>
      </ul>
    ),
    results: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Performance</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+65%</p>
          <p className="text-sm text-muted-foreground">Average speed improvement</p>
        </div>
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Conversion</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+42%</p>
          <p className="text-sm text-muted-foreground">Increase in conversion rates</p>
        </div>
      </div>
    ),
    tools: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-4 text-center">
          <h4 className="font-semibold">React</h4>
          <p className="text-sm text-muted-foreground">Frontend</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Next.js</h4>
          <p className="text-sm text-muted-foreground">Framework</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">TailwindCSS</h4>
          <p className="text-sm text-muted-foreground">Styling</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Node.js</h4>
          <p className="text-sm text-muted-foreground">Backend</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">MongoDB</h4>
          <p className="text-sm text-muted-foreground">Database</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Firebase</h4>
          <p className="text-sm text-muted-foreground">Services</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Flutter</h4>
          <p className="text-sm text-muted-foreground">Mobile</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Figma</h4>
          <p className="text-sm text-muted-foreground">Design</p>
        </div>
      </div>
    ),
  },
  "branding": {
    id: "branding", // Ensure this matches the route
    icon: "pen-tool",
    title: "Branding & Identity",
    subtitle: "Your Identity. Sharpened and Elevated.",
    description: "Create a powerful brand identity that resonates with your audience and stands out.",
    accentColor: "red",
    overview: (
      <div className="space-y-6">
        <p>Our branding service creates distinctive visual identities that capture your company's essence and help you stand out in a crowded market.</p>
        <p>We focus on creating brand systems that are memorable, versatile, and tell your unique story effectively.</p>
      </div>
    ),
    process: (
      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">1. Brand Discovery</h4>
          <p>Deep dive into your vision, values, audience, and competitive landscape</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">2. Identity Creation</h4>
          <p>Design logos, color palettes, typography, and visual elements</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">3. Brand Guidelines</h4>
          <p>Document usage rules and provide assets for consistent application</p>
        </div>
      </div>
    ),
    benefits: (
      <ul className="space-y-4 list-disc pl-6">
        <li>Stronger market recognition</li>
        <li>Enhanced customer trust and loyalty</li>
        <li>Consistent brand experience</li>
        <li>Differentiation from competitors</li>
      </ul>
    ),
    results: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Recognition</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+120%</p>
          <p className="text-sm text-muted-foreground">Increase in brand recognition</p>
        </div>
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Perception</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+75%</p>
          <p className="text-sm text-muted-foreground">Improvement in customer perception</p>
        </div>
      </div>
    ),
    tools: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-4 text-center">
          <h4 className="font-semibold">Adobe CC</h4>
          <p className="text-sm text-muted-foreground">Design Suite</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Figma</h4>
          <p className="text-sm text-muted-foreground">Collaborative Design</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Notion</h4>
          <p className="text-sm text-muted-foreground">Documentation</p>
        </div>
      </div>
    ),
  },
  "creative-content": {
    id: "creative-content", // Ensure this matches the route
    icon: "briefcase",
    title: "Creative Content",
    subtitle: "Stories that Stick. Content that Converts.",
    description: "Engaging content that tells your story and connects with your customers on a deeper level.",
    accentColor: "green",
    overview: (
      <div className="space-y-6">
        <p>Our creative content services deliver compelling visuals and messaging that capture attention and drive engagement across all platforms.</p>
        <p>We blend strategic thinking with creative execution to produce content that resonates with your target audience and supports your business goals.</p>
      </div>
    ),
    process: (
      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">1. Content Strategy</h4>
          <p>Define goals, audience, channels, and key messages</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">2. Creation</h4>
          <p>Develop copy, visuals, videos, and interactive elements</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">3. Distribution</h4>
          <p>Publish, promote, and monitor performance</p>
        </div>
      </div>
    ),
    benefits: (
      <ul className="space-y-4 list-disc pl-6">
        <li>Higher audience engagement</li>
        <li>Increased social sharing</li>
        <li>Stronger emotional connection</li>
        <li>Improved conversion rates</li>
      </ul>
    ),
    results: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Engagement</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+95%</p>
          <p className="text-sm text-muted-foreground">Increase in content engagement</p>
        </div>
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Time on Site</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+62%</p>
          <p className="text-sm text-muted-foreground">Longer visitor sessions</p>
        </div>
      </div>
    ),
    tools: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-4 text-center">
          <h4 className="font-semibold">Adobe Suite</h4>
          <p className="text-sm text-muted-foreground">Creative Tools</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Canva</h4>
          <p className="text-sm text-muted-foreground">Design</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Lumen5</h4>
          <p className="text-sm text-muted-foreground">Video Creation</p>
        </div>
      </div>
    ),
  },
  "digital-marketing": {
    id: "digital-marketing",
    icon: "trending-up",
    title: "Digital Marketing & Analytics",
    subtitle: "Traffic is Vanity. Conversions are Sanity.",
    description: "Data-driven marketing campaigns that reach your ideal audience and deliver measurable results.",
    accentColor: "amber",
    overview: (
      <div className="space-y-6">
        <p>Our digital marketing services drive targeted traffic and convert visitors into customers through data-driven strategies and continuous optimization.</p>
        <p>We focus on ROI-positive campaigns that scale your business while providing complete transparency into performance.</p>
      </div>
    ),
    process: (
      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">1. Strategy Development</h4>
          <p>Research target audience, competition, and create campaign frameworks</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">2. Campaign Implementation</h4>
          <p>Execute SEO, paid media, email, and social strategies</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">3. Analysis & Optimization</h4>
          <p>Track performance, A/B test, and refine for better results</p>
        </div>
      </div>
    ),
    benefits: (
      <ul className="space-y-4 list-disc pl-6">
        <li>Increased qualified traffic</li>
        <li>Higher conversion rates</li>
        <li>Better return on ad spend</li>
        <li>Clear performance metrics</li>
      </ul>
    ),
    results: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">ROAS</h4>
          <p className="text-4xl font-bold text-gradient mb-2">5.2x</p>
          <p className="text-sm text-muted-foreground">Average return on ad spend</p>
        </div>
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Traffic</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+210%</p>
          <p className="text-sm text-muted-foreground">Organic traffic increase</p>
        </div>
      </div>
    ),
    tools: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-4 text-center">
          <h4 className="font-semibold">Google Ads</h4>
          <p className="text-sm text-muted-foreground">PPC</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Ahrefs</h4>
          <p className="text-sm text-muted-foreground">SEO</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">HubSpot</h4>
          <p className="text-sm text-muted-foreground">Marketing Automation</p>
        </div>
      </div>
    ),
  },
  "it-problem-solving": {
    id: "it-problem-solving",
    icon: "wrench",
    title: "IT Problem Solving",
    subtitle: "When Tech Breaks, We Don't Blink.",
    description: "Practical solutions to complex technical challenges to keep your business running smoothly.",
    accentColor: "orange",
    overview: (
      <div className="space-y-6">
        <p>Our IT problem-solving services provide fast, effective solutions to technical challenges that impact your business operations and growth.</p>
        <p>We specialize in diagnosing complex issues, implementing fixes, and optimizing systems for better performance and security.</p>
      </div>
    ),
    process: (
      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">1. Diagnostic Assessment</h4>
          <p>Identify root causes through comprehensive technical evaluation</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">2. Solution Development</h4>
          <p>Create practical fixes and implementation plans</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">3. Implementation & Monitoring</h4>
          <p>Execute solutions and establish preventative measures</p>
        </div>
      </div>
    ),
    benefits: (
      <ul className="space-y-4 list-disc pl-6">
        <li>Reduced system downtime</li>
        <li>Improved technical performance</li>
        <li>Enhanced security</li>
        <li>Future-proofed infrastructure</li>
      </ul>
    ),
    results: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Uptime</h4>
          <p className="text-4xl font-bold text-gradient mb-2">99.9%</p>
          <p className="text-sm text-muted-foreground">System availability</p>
        </div>
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Response</h4>
          <p className="text-4xl font-bold text-gradient mb-2">-85%</p>
          <p className="text-sm text-muted-foreground">Decrease in resolution time</p>
        </div>
      </div>
    ),
    tools: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-4 text-center">
          <h4 className="font-semibold">AWS</h4>
          <p className="text-sm text-muted-foreground">Cloud Infrastructure</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Docker</h4>
          <p className="text-sm text-muted-foreground">Containerization</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Sentry</h4>
          <p className="text-sm text-muted-foreground">Error Monitoring</p>
        </div>
      </div>
    ),
  },
  "copywriting": {
    id: "copywriting",
    icon: "pen-line",
    title: "Copywriting",
    subtitle: "Words that Sell. Voices that Stick.",
    description: "Words that work. We write with clarity, purpose, and persuasion for resonance and conversion.",
    accentColor: "cyan",
    overview: (
      <div className="space-y-6">
        <p>Our copywriting service creates compelling, persuasive content that captures your brand voice and drives your audience to take action.</p>
        <p>We craft everything from website copy and ad campaigns to email sequences and social media content with precision and purpose.</p>
      </div>
    ),
    process: (
      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">1. Voice Discovery</h4>
          <p>Identify your brand's unique tone, style, and messaging approach</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">2. Content Creation</h4>
          <p>Craft targeted copy for your specific channels and goals</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">3. Refinement</h4>
          <p>Edit and optimize for maximum impact and conversion</p>
        </div>
      </div>
    ),
    benefits: (
      <ul className="space-y-4 list-disc pl-6">
        <li>Clear, consistent brand voice</li>
        <li>Higher conversion rates</li>
        <li>Improved SEO performance</li>
        <li>More engaging customer experience</li>
      </ul>
    ),
    results: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">CTR</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+72%</p>
          <p className="text-sm text-muted-foreground">Improved click-through rates</p>
        </div>
        <div className="glass-morphism p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Engagement</h4>
          <p className="text-4xl font-bold text-gradient mb-2">+48%</p>
          <p className="text-sm text-muted-foreground">Increase in content engagement</p>
        </div>
      </div>
    ),
    tools: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-4 text-center">
          <h4 className="font-semibold">Grammarly</h4>
          <p className="text-sm text-muted-foreground">Writing Assistant</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Hemingway</h4>
          <p className="text-sm text-muted-foreground">Clarity Tool</p>
        </div>
        <div className="p-4 text-center">
          <h4 className="font-semibold">Notion</h4>
          <p className="text-sm text-muted-foreground">Organization</p>
        </div>
      </div>
    ),
  },
};
