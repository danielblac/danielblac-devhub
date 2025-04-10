import ProjectDetails from "@/components/organisms/projects/ProjectDetails";

export default function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <>
      <ProjectDetails query={params.projectId} />
    </>
  );
}
