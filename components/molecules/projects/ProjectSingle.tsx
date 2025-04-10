// "use client";
// import { Button } from "@/components/atoms/Button";
// import { ProjectType } from "@/types";
// import {
//   Box,
//   SpeedDial,
//   SpeedDialAction,
//   SpeedDialIcon,
//   TextField,
// } from "@mui/material";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { ChangeEvent, useState } from "react";
// import { FaRegCommentAlt, FaRegHeart, FaTimes } from "react-icons/fa";
// import { FiEye } from "react-icons/fi";
// // import axios from "axios";

// interface IProps {
//   project: ProjectType;
// }

// const actions = [
//   { icon: <FaRegHeart />, name: "Like" },
//   { icon: <FaRegCommentAlt />, name: "Comment" },
// ];

// export default function ProjectSingle({ project }: IProps) {
//   const router = useRouter();
//   const [comments, setComments] = useState(false);
//   const [viewComments, setViewComments] = useState(true);
//   const [shareComments, setShareComments] = useState(false);
//   const [nameError, setNameError] = useState(false);
//   const [commentError, setCommentError] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     comment: "",
//   });

//   function handleLike() {
//     alert("Like clicked " + project.title);
//   }

//   function handleComment() {
//     setComments(true);
//   }

//   function CloseCommentsBox(event: { stopPropagation: () => void }) {
//     event.stopPropagation();
//     setComments(false);
//     setViewComments(true);
//     setShareComments(false);
//   }

//   async function handlePostComment(event: { stopPropagation: () => void }) {
//     event.stopPropagation();
//     if (!formData.name) setNameError(true);
//     if (!formData.comment) setCommentError(true);

//     if (formData.name && formData.comment) {
//       alert(`Submitting: ${formData.name} ${formData.comment}`);
//       //   try {
//       //     const res = await axios.post(`${API_URL}/personnel`, formData, {
//       //       headers: {
//       //         "Content-Type": "application/json",
//       //       },
//       //     });
//       //     console.log(res);
//       //     reset();
//       //   } catch (error) {
//       //     console.error("Submission error:", error);
//       //   }
//     }
//   }

//   const handleFormClick = (event: { stopPropagation: () => void }) => {
//     event.stopPropagation();
//   };

//   return (
//     <div
//       className="project-single"
//       onClick={() => router.push(`/projects/${project.id}`)}
//     >
//       <div className={comments ? "img blur" : "img"}>
//         <Image
//           src={`/images/${project.coverImg}`}
//           alt={project.title}
//           loading="lazy"
//           width={750}
//           height={600}
//           className="project-single-img"
//         />
//         <Box
//           sx={{
//             height: 320,
//             transform: "translateZ(0px)",
//             flexGrow: 1,
//           }}
//           className="link-box"
//         >
//           <SpeedDial
//             ariaLabel="SpeedDial basic example"
//             sx={{
//               position: "absolute",
//               bottom: 16,
//               right: 16,
//               "& .MuiFab-root": {
//                 backgroundColor: "white",
//                 color: "black",
//                 "&:hover": {
//                   backgroundColor: "#ff7c2c",
//                   color: "white",
//                 },
//               },
//               "& .MuiSpeedDialAction-fab": {
//                 backgroundColor: "white",
//                 color: "#ff7c2c",
//                 width: 50,
//                 height: 50,
//               },
//             }}
//             icon={<SpeedDialIcon />}
//             onClick={(event) => {
//               event.stopPropagation();
//             }}
//           >
//             {actions.map((action) => (
//               <SpeedDialAction
//                 key={action.name}
//                 icon={action.icon}
//                 title={action.name}
//                 onClick={(event) => {
//                   event.stopPropagation();
//                   if (action.name === "Like") {
//                     handleLike();
//                   } else if (action.name === "Comment") {
//                     handleComment();
//                   }
//                 }}
//               />
//             ))}
//           </SpeedDial>
//         </Box>
//         {comments && (
//           <div className="comment-interactions">
//             <div className="close" onClick={CloseCommentsBox}>
//               <FaTimes size={14} />
//             </div>
//             <div className="comments-box">
//               <div className="share-thoughts">
//                 {viewComments && (
//                   <div
//                     className="share-thought thoughts-view"
//                     onClick={handleFormClick}
//                   >
//                     <p>Feedback</p>
//                     <div
//                       className="feedback"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setShareComments(true);
//                         setViewComments(false);
//                       }}
//                     >
//                       <p>Share your thoughts</p>
//                     </div>
//                   </div>
//                 )}
//                 {shareComments && (
//                   <div
//                     onClick={handleFormClick}
//                     className="share-thought thoughts-share"
//                   >
//                     <TextField
//                       id="outlined-basic"
//                       color="secondary"
//                       variant="outlined"
//                       placeholder="Enter Full Name"
//                       error={nameError}
//                       helperText={nameError ? "Full Name is required" : ""}
//                       onFocus={() => setNameError(false)}
//                       value={formData.name}
//                       fullWidth
//                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                         setNameError(false);
//                         setFormData({
//                           ...formData,
//                           name: e.target.value,
//                         });
//                       }}
//                       sx={{
//                         "& .MuiInputBase-root": {
//                           height: "45px", // Fixed height here
//                         },
//                         mb: 1,
//                       }}
//                     />
//                     <TextField
//                       id="outlined-basic"
//                       variant="outlined"
//                       color="secondary"
//                       multiline
//                       rows={2}
//                       placeholder="Share your thoughts"
//                       error={commentError}
//                       helperText={commentError ? "Comment is required" : ""}
//                       onFocus={() => setCommentError(false)}
//                       value={formData.comment}
//                       fullWidth
//                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                         setCommentError(false);
//                         setFormData({
//                           ...formData,
//                           comment: e.target.value,
//                         });
//                       }}
//                       sx={{
//                         mb: 1,
//                       }}
//                     />
//                     <Button onClick={handlePostComment}>Post</Button>
//                   </div>
//                 )}
//               </div>
//               <div
//                 className={
//                   viewComments
//                     ? "all-comments comments-view"
//                     : "all-comments comments-share"
//                 }
//                 onClick={handleFormClick}
//               >
//                 <div className="all-the-comments">
//                   <div className="latest-comments">
//                     <Image
//                       src="/images/avatar-one.png"
//                       alt="avatar"
//                       width={40}
//                       height={40}
//                     />
//                     <div className="comment-details">
//                       <p className="commenter-name">Habibi Roachaman</p>
//                       <p className="commenter-comment">Love this project</p>

//                       <div className="comment-actions">
//                         <p>3 months </p>
//                         <p>&bull;</p>
//                         <p>Like</p>
//                         <p>Reply</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="latest-comments">
//                     <Image
//                       src="/images/avatar-one.png"
//                       alt="avatar"
//                       width={40}
//                       height={40}
//                     />
//                     <div className="comment-details">
//                       <p className="commenter-name">Habibi Roachaman</p>
//                       <p className="commenter-comment">Love this project</p>

//                       <div className="comment-actions">
//                         <p>3 months </p>
//                         <p>&bull;</p>
//                         <p>Like</p>
//                         <p>Reply</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="latest-comments">
//                     <Image
//                       src="/images/avatar-one.png"
//                       alt="avatar"
//                       width={40}
//                       height={40}
//                     />
//                     <div className="comment-details">
//                       <p className="commenter-name">Habibi Roachaman</p>
//                       <p className="commenter-comment">Love this project</p>

//                       <div className="comment-actions">
//                         <p>3 months </p>
//                         <p>&bull;</p>
//                         <p>Like</p>
//                         <p>Reply</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="latest-comments">
//                     <Image
//                       src="/images/avatar-one.png"
//                       alt="avatar"
//                       width={40}
//                       height={40}
//                     />
//                     <div className="comment-details">
//                       <p className="commenter-name">Habibi Roachaman</p>
//                       <p className="commenter-comment">Love this project</p>

//                       <div className="comment-actions">
//                         <p>3 months </p>
//                         <p>&bull;</p>
//                         <p>Like</p>
//                         <p>Reply</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="project-single-details">
//         <h3>{project.title}</h3>

//         <div className="project-single-interactions">
//           <div className="interactions">
//             <div className="inter-icon">
//               <FaRegHeart size={18} />
//             </div>
//             <p>1.5k</p>
//           </div>
//           <div className="interactions">
//             <div className="inter-icon">
//               <FaRegCommentAlt size={18} />
//             </div>
//             <p>2.5k</p>
//           </div>
//           <div className="interactions">
//             <div className="inter-icon">
//               <FiEye size={24} />
//             </div>
//             <p>8.5k</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
