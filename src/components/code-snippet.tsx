'use client';

import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from '@/components/ui/button';
import { Check, Clipboard } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'csharp' }) => {
  const [copied, setCopied] = React.useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative my-5">
      <Button variant={'secondary'} size="sm" onClick={copyToClipboard} className="absolute top-2 right-2">
        {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
      </Button>
      <SyntaxHighlighter className="rounded-lg" language={language} style={vs2015}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
