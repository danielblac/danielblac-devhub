import ProjectDetails from "@/components/organisms/projects/ProjectDetails";

export default async function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = await params;

  return (
    <>
      <ProjectDetails query={projectId} />
    </>
  );
}
