import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const H1 = ({ ...props }) => (
  <h1 className="text-4xl font-bold text-blue-400 my-2" {...props} />
);
const H2 = ({ ...props }) => (
  <h2
    className="text-xl md:text-3xl  font-semibold my-5 text-white/90 "
    {...props}
  />
);
const H3 = ({ ...props }) => (
  <h3
    className="text-lg md:text-2xl font-semibold my-4 text-white/90"
    {...props}
  />
);
const P = ({ ...props }) => (
  <p className="text-sm md:text-base  leading-relaxed my-4 " {...props} />
);
const A = ({ ...props }) => (
  <a className="text-blue-400 hover:underline" {...props} />
);
const Strong = ({ ...props }) => (
  <strong
    className="font-semibold text-white/90 text-base md:text-lg my-4 "
    {...props}
  />
);
const Code = ({ ...props }) => (
  <code
    className="bg-white/5  text-yellow-300 px-1 py-0.5 rounded"
    {...props}
  />
);
const Pre = ({ ...props }) => (
  <pre
    className="bg-black px-4 pb-2 pt-4  rounded-xl overflow-x-scroll text-sm"
    {...props}
  />
);
const Ul = ({ ...props }) => <ul className="  ml-4 my-2 " {...props} />;
const Li = ({ ...props }) => (
  <li
    className="list-disc text-sm md:text-base text-white/80 my-4"
    {...props}
  />
);
const Ol = ({ ...props }) => <ol className="list-decimal ml-6" {...props} />;
const Table = ({ ...props }) => <table className="min-w-full " {...props} />;
const Thead = ({ ...props }) => <thead className="bg-black" {...props} />;
const Tbody = ({ ...props }) => <tbody className="" {...props} />;
const Tr = ({ ...props }) => (
  <tr className="border-b border-gray-700" {...props} />
);
const Th = ({ ...props }) => (
  <th className="px-4 py-2 text-left text-gray-300" {...props} />
);
const Td = ({ ...props }) => (
  <td className="px-4 py-2 text-gray-400" {...props} />
);
const Blockquote = ({ ...props }) => (
  <blockquote
    className="border-l-4 border-gray-500 pl-4 italic text-gray-400"
    {...props}
  />
);

export const MarkdownRenderer = memo(({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        p: P,
        a: A,
        strong: Strong,
        code: Code,
        pre: Pre,
        ul: Ul,
        li: Li,
        ol: Ol,
        table: Table,
        thead: Thead,
        tbody: Tbody,
        tr: Tr,
        th: Th,
        td: Td,
        blockquote: Blockquote,
      }}
    >
      {content}
    </ReactMarkdown>
  );
});

MarkdownRenderer.displayName = "MarkdownRenderer";
