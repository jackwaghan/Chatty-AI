import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ ...props }) => (
          <h1 className="text-3xl font-bold text-blue-400 my-2" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2
            className="text-2xl font-semibold text-green-400 my-2"
            {...props}
          />
        ),
        p: ({ ...props }) => (
          <p className="text-base text-white/80 leading-relaxed" {...props} />
        ),
        code: ({ ...props }) => (
          <code
            className="bg-gray-900 text-yellow-300 px-1 py-0.5 rounded"
            {...props}
          />
        ),
        ul: ({ ...props }) => (
          <ul className="list-disc list-inside ml-4" {...props} />
        ),
        ol: ({ ...props }) => (
          <ol className="list-decimal list-inside ml-4" {...props} />
        ),
        blockquote: ({ ...props }) => (
          <blockquote
            className="border-l-4 border-gray-500 pl-4 italic text-gray-400"
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
