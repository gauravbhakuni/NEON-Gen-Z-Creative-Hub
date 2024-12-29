import React from 'react';

interface LinkGroup {
  title: string;
  links: string[];
}

const linkGroups: LinkGroup[] = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Templates", "Showcase"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"]
  },
  {
    title: "Resources",
    links: ["Blog", "Community", "Tutorials", "Support"]
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Status"]
  }
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {linkGroups.map((group) => (
        <div key={group.title}>
          <h3 className="font-semibold text-white mb-4">{group.title}</h3>
          <ul className="space-y-2">
            {group.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}