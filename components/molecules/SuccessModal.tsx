// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   IconButton,
//   Typography,
//   Button,
//   useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { FiCheckCircle, FiX } from "react-icons/fi";

// interface SuccessModalProps {
//   open: boolean;
//   onClose: () => void;
//   title?: string;
//   message?: string;
// }

// const SuccessModal: React.FC<SuccessModalProps> = ({
//   open,
//   onClose,
//   title = "Message Sent!",
//   message = "Thank you for contacting us. We'll get back to you soon.",
// }) => {
//   const theme = useTheme();

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       slotProps={{
//         root: {
//           // Backdrop animation
//           component: motion.div,
//           initial: { opacity: 0 },
//           animate: { opacity: 1 },
//           exit: { opacity: 0 },
//         },
//         paper: {
//           // Paper animation
//           component: motion.div,
//           initial: { scale: 0.8, opacity: 0 },
//           animate: { scale: 1, opacity: 1 },
//           exit: { scale: 0.8, opacity: 0 },
//           transition: { type: "spring", damping: 20, stiffness: 300 },
//           style: {
//             borderRadius: "24px",
//             overflow: "hidden",
//             maxWidth: "500px",
//             width: "90%",
//             margin: "auto",
//             position: "relative",
//             background: theme.palette.background.paper,
//           },
//         },
//         backdrop: {
//           style: {
//             backdropFilter: "blur(4px)",
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//           },
//         },
//       }}
//     >
//       <IconButton
//         aria-label="close"
//         onClick={onClose}
//         sx={{
//           position: "absolute",
//           right: 16,
//           top: 16,
//           color: theme.palette.grey[500],
//           "&:hover": {
//             color: theme.palette.grey[700],
//           },
//         }}
//       >
//         <FiX size={24} />
//       </IconButton>

//       <DialogContent
//         sx={{
//           p: 6,
//           textAlign: "center",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2, type: "spring" }}
//           style={{ marginBottom: "24px" }}
//         >
//           <FiCheckCircle
//             size={80}
//             color={theme.palette.success.main || "#4CAF50"}
//           />
//         </motion.div>

//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: 700,
//             mb: 2,
//             color: "text.primary",
//             lineHeight: 1.3,
//           }}
//         >
//           {title}
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{
//             mb: 4,
//             color: "text.secondary",
//             lineHeight: 1.6,
//             maxWidth: "400px",
//           }}
//         >
//           {message}
//         </Typography>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           style={{ width: "100%" }}
//         >
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={onClose}
//             fullWidth
//             sx={{
//               py: 1.5,
//               borderRadius: "50px",
//               fontWeight: 600,
//               textTransform: "none",
//               fontSize: "1rem",
//               boxShadow: "none",
//               "&:hover": {
//                 transform: "translateY(-2px)",
//                 boxShadow: theme.shadows[4],
//               },
//             }}
//           >
//             Got it!
//           </Button>
//         </motion.div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default SuccessModal;
