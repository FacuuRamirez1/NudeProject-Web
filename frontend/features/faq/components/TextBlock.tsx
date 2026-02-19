import ReactMarkdown from 'react-markdown';

type Props = {
    text: string,
}

export function TextBlock ({ text }: Props) {
    return(
        <div className="flex flex-col gap-6 w-[80%] text-[#492A23] indent-2">
            <ReactMarkdown
                components={{
                    a: ({ children, href, ...props }) => (
                            <a
                                href={href}
                                style={{ textDecoration: 'underline' }}
                                {...props}
                            >
                                {children}
                            </a>
                        )
                    }}
            >
                {text}
            </ReactMarkdown>
        </div>
    );
}