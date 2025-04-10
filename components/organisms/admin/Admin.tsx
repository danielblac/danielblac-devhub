"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  FormControlLabel,
  CircularProgress,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import {
  Add,
  Edit,
  Delete,
  Search,
  BarChart,
  Description,
  People,
  Close,
  Link as LinkIcon,
  GitHub,
} from "@mui/icons-material";
import axios from "axios";
import { API_URL } from "@/utils/url";
import { signOut, useSession } from "next-auth/react";
import { ProjectType } from "@/types";
import PhotoUpload from "../uploads/PhotoUpload";

type FormData = {
  title: string;
  description: string;
  live_link: string;
  github_link: string;
  cover_img: string;
  featured: boolean;
};

export default function Admin() {
  const { data: session } = useSession();
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(
    null
  );
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    live_link: "",
    github_link: "",
    cover_img: "",
    featured: false,
  });

  console.log(currentProject);

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);

  function getImageUrl(url: string) {
    setFormData({
      ...formData,
      cover_img: url,
    });
  }

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/projects`, {
        headers: {
          Authorization: `Bearer ${session?.user.access_token}`,
          "Content-type": "application/json",
        },
      });
      setLoading(false);
      setProjects(res.data.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveProject = async () => {
    setCreateLoading(true);
    try {
      const headers = {
        Authorization: `Bearer ${session?.user.access_token}`,
        "Content-Type": "application/json",
      };

      if (currentProject) {
        const updateData = {
          title: currentProject.title,
          description: currentProject.description,
          live_link: currentProject.live_link,
          github_link: currentProject.github_link,
          cover_img: currentProject.cover_img,
          featured: currentProject.featured,
        };

        await axios.patch(
          `${API_URL}/projects/${currentProject._id}`,
          updateData,
          {
            headers,
          }
        );
      } else {
        await axios.post(`${API_URL}/projects`, formData, {
          headers,
        });
      }
      setCreateLoading(false);
      fetchProjects();
      setOpenModal(false);
      setCurrentProject(null);
      setFormData({
        title: "",
        description: "",
        live_link: "",
        github_link: "",
        cover_img: "",
        featured: false,
      });
    } catch (error) {
      setCreateLoading(false);
      console.error("Error saving project:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setLoading(true);
      try {
        await axios.delete(`${API_URL}/projects/${id}`, {
          headers: {
            Authorization: `Bearer ${session?.user.access_token}`,
          },
        });
        await fetchProjects();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          if (error.response?.data.message === "Unauthorized") {
            signOut();
          }
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
    }
  };

  return (
    <Box className="dashboard-container">
      {/* Sidebar */}
      <Box className="dashboard-sidebar">
        <h3 className="sidebar-header">DanielBlac DevHub</h3>
        <Box className="sidebar-nav">
          <Button className="nav-link active">
            <BarChart /> Dashboard
          </Button>
          <Button className="nav-link">
            <Description /> Projects
          </Button>
          <Button className="nav-link">
            <People /> Users
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box className="dashboard-main">
        <Box className="dashboard-header">
          <Typography variant="h4" className="header-title">
            Projects Management
          </Typography>
          <Box className="header-actions">
            <TextField
              className="search-input"
              placeholder="Search projects..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Button
              variant="contained"
              className="add-button"
              startIcon={<Add />}
              onClick={() => {
                setCurrentProject(null);
                setOpenModal(true);
              }}
            >
              New Project
            </Button>
          </Box>
        </Box>

        {/* Stats Cards */}
        <Box className="stats-grid">
          <Card className="stat-card">
            <CardContent>
              <Typography className="stat-label">Total Projects</Typography>
              <Typography className="stat-value">{projects.length}</Typography>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardContent>
              <Typography className="stat-label">Featured</Typography>
              <Typography className="stat-value">
                {projects.filter((p) => p.featured).length}
              </Typography>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardContent>
              <Typography className="stat-label">With Live Demo</Typography>
              <Typography className="stat-value">
                {projects.filter((p) => p.live_link).length}
              </Typography>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardContent>
              <Typography className="stat-label">Open Source</Typography>
              <Typography className="stat-value">
                {projects.filter((p) => p.github_link).length}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Projects Table */}
        <Paper className="projects-table">
          {loading ? (
            <Box className="loading-container">
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Project</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Links</TableCell>
                    <TableCell>Featured</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredProjects.map((project) => (
                    <TableRow key={project._id}>
                      <TableCell>
                        <Typography className="project-title">
                          {project.title}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className="project-description">
                          {project.description}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box className="project-links">
                          {project.live_link && (
                            <IconButton
                              href={project.live_link}
                              target="_blank"
                              className="link-button"
                            >
                              <LinkIcon />
                            </IconButton>
                          )}
                          {project.github_link && (
                            <IconButton
                              href={project.github_link}
                              target="_blank"
                              className="link-button"
                            >
                              <GitHub />
                            </IconButton>
                          )}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={project.featured}
                              className="featured-switch"
                            />
                          }
                          label=""
                        />
                      </TableCell>
                      <TableCell>
                        {new Date(project.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            setCurrentProject(project);
                            setOpenModal(true);
                          }}
                          className="action-button"
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          onClick={() => handleDelete(project._id)}
                          className="action-button delete"
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>

        {/* Project Modal */}
        <Dialog
          open={openModal}
          onClose={() => setOpenModal(false)}
          maxWidth="sm"
          fullWidth
        >
          <Box className="project-modal">
            <DialogTitle className="modal-header">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width={"100%"}
              >
                <Typography variant="h6">
                  {currentProject ? "Edit Project" : "Create New Project"}
                </Typography>
                <IconButton
                  onClick={() => setOpenModal(false)}
                  className="close-button"
                >
                  <Close />
                </IconButton>
              </Stack>
            </DialogTitle>
            <DialogContent dividers className="modal-content">
              <Box
                component="form"
                className="project-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="image-upload">
                  <PhotoUpload getImageUrl={getImageUrl} />
                </div>

                {currentProject?.cover_img && (
                  <Box className="image-preview-container">
                    <Typography variant="caption">Preview:</Typography>
                    <Box
                      component="img"
                      src={currentProject.cover_img}
                      alt="Cover preview"
                      className="image-preview"
                    />
                  </Box>
                )}

                <Box className="form-column">
                  <TextField
                    fullWidth
                    label="Project Title *"
                    name="title"
                    value={
                      currentProject ? currentProject.title : formData.title
                    }
                    onChange={(e) => {
                      if (currentProject) {
                        setCurrentProject({
                          ...currentProject,
                          title: e.target.value,
                        });
                      } else {
                        setFormData({
                          ...formData,
                          title: e.target.value,
                        });
                      }
                    }}
                    className="form-input"
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Description *"
                    name="description"
                    value={
                      currentProject
                        ? currentProject.description
                        : formData.description
                    }
                    onChange={(e) => {
                      if (currentProject) {
                        setCurrentProject({
                          ...currentProject,
                          description: e.target.value,
                        });
                      } else {
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        });
                      }
                    }}
                    className="form-input"
                  />

                  <TextField
                    fullWidth
                    label="Live Demo URL"
                    name="live_link"
                    value={
                      currentProject
                        ? currentProject.live_link
                        : formData.live_link
                    }
                    onChange={(e) => {
                      if (currentProject) {
                        setCurrentProject({
                          ...currentProject,
                          live_link: e.target.value,
                        });
                      } else {
                        setFormData({
                          ...formData,
                          live_link: e.target.value,
                        });
                      }
                    }}
                    placeholder="https://example.com"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LinkIcon />
                        </InputAdornment>
                      ),
                    }}
                    className="form-input"
                  />

                  <TextField
                    fullWidth
                    label="GitHub Repository"
                    name="github_link"
                    value={
                      currentProject
                        ? currentProject.github_link
                        : formData.github_link
                    }
                    onChange={(e) => {
                      if (currentProject) {
                        setCurrentProject({
                          ...currentProject,
                          github_link: e.target.value,
                        });
                      } else {
                        setFormData({
                          ...formData,
                          github_link: e.target.value,
                        });
                      }
                    }}
                    placeholder="https://github.com/username/repo"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GitHub />
                        </InputAdornment>
                      ),
                    }}
                    className="form-input"
                  />

                  <FormControlLabel
                    control={
                      <Switch
                        value={
                          currentProject
                            ? currentProject.featured
                            : formData.featured
                        }
                        onChange={(e) => {
                          if (currentProject) {
                            setCurrentProject({
                              ...currentProject,
                              featured: e.target.checked,
                            });
                          } else {
                            setFormData({
                              ...formData,
                              featured: e.target.checked,
                            });
                          }
                        }}
                        className="featured-switch"
                      />
                    }
                    label="Featured Project"
                    className="featured-label"
                  />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions className="modal-actions">
              <Button
                onClick={() => {
                  setOpenModal(false);
                  setCurrentProject(null);
                  setFormData({
                    title: "",
                    description: "",
                    live_link: "",
                    github_link: "",
                    cover_img: "",
                    featured: false,
                  });
                }}
                className="cancel-button"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveProject}
                variant="contained"
                className="submit-button"
                startIcon={currentProject ? <Edit /> : <Add />}
                type="submit"
              >
                {createLoading ? (
                  <CircularProgress color="inherit" size={20} thickness={5} />
                ) : (
                  <Typography>
                    {currentProject ? "Update Project" : "Create Project"}
                  </Typography>
                )}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
}
