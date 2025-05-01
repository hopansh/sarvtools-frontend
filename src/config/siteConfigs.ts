import { devTools, shadiTools, tools, ToolType } from "@/constants/tools";

// Example config for subdomain-based content
export interface SiteConfig {
  logo: string; // path to logo
  headerTitle: string;
  landingContent: string;
  headlines: {
    greeting: string;
    modernTool: string;
    // add more sections as needed
  };
  subHeadlines: {
    greeting: string;
    modernTool: string;
    // add more sections as needed
  };
  tools: ToolType[]; // tool ids
}

export const siteConfigs: Record<string, SiteConfig> = {
  dev: {
    logo: 'devLogo',
    headerTitle: 'SarvTools Dev',
    landingContent: 'Developer tools and resources.',
    headlines: {
      greeting: 'Welcome, Developer!',
      modernTool: 'Essential Developer Tools at Your Fingertips',
    },
    subHeadlines: {
      greeting: 'Your privacy-first, all-in-one dev toolbox.',
      modernTool: 'Boost your productivity with formatters, validators, converters, and more—all privacy-first and client-side.',
    },
    tools: devTools,
  },
  shadi: {
    logo: 'shadiLogo',
    headerTitle: 'SarvTools Shadi',
    landingContent: 'Wedding planning tools and content.',
    headlines: {
      greeting: 'Welcome to Shadi Tools!',
      modernTool: 'Plan Your Dream Wedding Effortlessly',
    },
    subHeadlines: {
      greeting: 'Smart, simple, and creative wedding utilities.',
      modernTool: 'Discover calculators, checklists, and creative tools for every wedding need.',
    },
    tools: shadiTools,
  },
  default: {
    logo: 'defaultLogo',
    headerTitle: 'SarvTools',
    landingContent: 'All-in-one tools for everyone.',
    headlines: {
      greeting: 'Welcome to SarvTools!',
      modernTool: 'Discover Modern Tools for Every Need',
    },
    subHeadlines: {
      greeting: 'A privacy-focused toolbox for developers, writers, designers, and more.',
      modernTool: 'Explore a wide range of tools designed to simplify your tasks, from development to design, text processing, and more.',
    },
    tools,
  },
};
