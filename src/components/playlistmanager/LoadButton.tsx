import { FC, ReactElement } from "react";

interface Props {
  handler: () => void;
  text: string;
}

const LoadButton: FC<Props> = ({ text, handler }: Props): ReactElement => {
  return (
    <div>
      <button
        className="flex items-center rounded-lg border border-slate-700 bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 m-auto" // Add flex and items-center classes to align icon and text
        onClick={() => handler()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="white"
        >
          <path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z" />
        </svg>
        {text}
      </button>
    </div>
  );
};

export default LoadButton;
