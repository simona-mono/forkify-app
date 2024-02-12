
interface NoResultsProps {
  action: string;
  highlight: string;
}
export default function NoResults({ action, highlight }: NoResultsProps) {
  
    return (
      <>
        <svg className="svg--sunset--big" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V8m0 8h0m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
        <p>
        No results, <br />
        try {action} <span> {highlight}! </span>
        </p>
      </>
    );
  }