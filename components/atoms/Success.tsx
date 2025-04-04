// import { FaRegCheckCircle } from "react-icons/fa";
// import { Button, Modal } from "react-bootstrap";

// interface IProps {
//   show: boolean;
//   onHide: () => void;
//   message?: string;
// }

// export default function Success(props: IProps) {
//   return (
//     <Modal
//       size="sm"
//       show={props.show}
//       onHide={props.onHide}
//       aria-labelledby="example-modal-sizes-title-sm"
//       centered
//     >
//       <div
//         style={{
//           padding: "2em 2em 3em",
//           display: "flex",
//           flexDirection: "column",
//           gap: "1em",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <FaRegCheckCircle
//           style={{
//             color: "green",
//             fontSize: "60px",
//           }}
//         />
//         <h2>Successful!</h2>
//         {props.message && (
//           <p
//             style={{
//               fontSize: "20px",
//               marginTop: "-18px",
//             }}
//           >
//             {props.message}
//           </p>
//         )}
//         <Button
//           onClick={() => props.onHide()}
//           style={{
//             backgroundColor: "#2c3164",
//             width: "80%",
//             letterSpacing: "1.5px",
//           }}
//         >
//           Ok
//         </Button>
//       </div>
//     </Modal>
//   );
// }
