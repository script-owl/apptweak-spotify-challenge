import { TrackList } from "../../containers/tracks/slice";

interface Props {
  query: string;
}

export default function SearchResults({ query }: Props) {
  return <div>{query}</div>;
}
