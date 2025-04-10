import ProjectDetails from "@/components/organisms/projects/ProjectDetails";

interface PageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const { projectId } = params;

  return (
    <>
      <ProjectDetails query={projectId} />
    </>
  );
}
