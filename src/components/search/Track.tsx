import { FC, ReactElement } from "react";

interface Props {
  track: {
    name: string;
    id: string;
  };
}

const Track: FC<Props> = ({ track }: Props): ReactElement => {
  return (
    <div className="flex justify-between border rounded border-slate-800 bg-indigo-200 px-1 mb-1">
      <div>{track.name}</div>
    </div>
  );
};

export default Track;
