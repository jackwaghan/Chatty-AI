import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = memo(({ content }: { content: string }) => {
  const components = {
    h1: ({ ...props }) => (
      <h1 className="text-4xl font-bold text-blue-400 my-2" {...props} />
    ),
    h2: ({ ...props }) => (
      <h2
        className="text-xl md:text-3xl font-semibold my-5 text-white/90"
        {...props}
      />
    ),
    h3: ({ ...props }) => (
      <h3
        className="text-lg md:text-2xl font-semibold my-4 text-white/90"
        {...props}
      />
    ),
    p: ({ ...props }) => <p className="text-base my-4" {...props} />,
    a: ({ ...props }) => (
      <a className="text-blue-400 hover:underline text-wrap" {...props} />
    ),
    strong: ({ ...props }) => (
      <strong className="font-semibold text-white/90 text-lg my-4" {...props} />
    ),
    code: ({ ...props }) => (
      <code
        className="bg-white/5 text-yellow-300 px-1 py-0.5 rounded text-base"
        {...props}
      />
    ),
    pre: ({ ...props }) => (
      <pre
        className="bg-black px-4 pb-2 pt-4 rounded-xl overflow-x-scroll text-sm my-4"
        {...props}
      />
    ),
    ul: ({ ...props }) => <ul className="ml-4 my-2" {...props} />,
    li: ({ ...props }) => (
      <li className="list-disc text-base text-white/80 my-4" {...props} />
    ),
    ol: ({ ...props }) => <ol className="list-decimal ml-6" {...props} />,
    table: ({ ...props }) => <table className="min-w-full" {...props} />,
    thead: ({ ...props }) => <thead className="bg-black" {...props} />,
    tbody: ({ ...props }) => <tbody className="" {...props} />,
    tr: ({ ...props }) => (
      <tr className="border-b border-gray-700" {...props} />
    ),
    th: ({ ...props }) => (
      <th className="px-4 py-2 text-left text-gray-300" {...props} />
    ),
    td: ({ ...props }) => <td className="px-4 py-2 text-gray-400" {...props} />,
    blockquote: ({ ...props }) => (
      <blockquote
        className="border-l-4 border-gray-500 pl-4 italic text-gray-400"
        {...props}
      />
    ),
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
});

MarkdownRenderer.displayName = "MarkdownRenderer";

export { MarkdownRenderer };
