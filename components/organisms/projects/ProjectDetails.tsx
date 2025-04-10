interface IProps {
  query: string;
}

export default function ProjectDetails({ query }: IProps) {
  return (
    <div style={{ padding: "10em 3em" }}>
      <p>{query}</p>
    </div>
  );
}
