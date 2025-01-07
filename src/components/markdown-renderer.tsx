import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyList,
  TypographyH4,
  TypographyH1,
} from '@/components/typography-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

const markdownComponents = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  ul: ({ children }) => <TypographyList>{children}</TypographyList>,
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
      <div className="relative my-5">
        <SyntaxHighlighter className="rounded-lg" language={match[1]}>
          {children}
        </SyntaxHighlighter>
      </div>
    ) : (
      // inline code style
      <code className="bg-gray-100 text-gray-800 font-mono text-sm px-1.5 py-0.5 rounded">{children}</code>
    );
  },
};

interface MarkdownRendererProps {
  markdown: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  return <ReactMarkdown components={markdownComponents}>{markdown}</ReactMarkdown>;
};
