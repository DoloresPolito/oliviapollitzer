// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../App.css";
// import { motion } from "framer-motion";
// import { Ring } from "@uiball/loaders";
// import { Section, Page, Title2 } from "../styles";
// import Navbar from "../components/Navbar";
// import styled from "styled-components";

// const Blog = () => {
//   const [feeds, setFeedsData] = useState([]);
//   let array = []
//   useEffect(() => {
//     async function fetchInstagramPost() {
//       try {
//         const token = process.env.REACT_APP_ACCESS_CODE;
//         axios
//           .get(
//             `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=20&access_token=${token}`
//           )
//           .then((resp) => {
//             setFeedsData(resp.data.data);
//           });
//       } catch (err) {
//         console.log("error", err);
//       }
//     }
//     fetchInstagramPost();
//   }, []);

//   for(let i=7; i<19; i++){
//     array.push(feeds[i])
//   }

//   return (
//     <Page style={{ backgroundColor: "  #f6f6f6;" }}>
//       <Navbar view="blog"  />

//       {feeds[0] ? (
//         <Section style={{ backgroundColor: "  #f6f6f6" }} >
       
//           <motion.div
//             className="container"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//           >
//                <Title2>oliviapollitzer</Title2>
//             <Grid>
//               {array.map((feed) => (
//                 <a href={feed.media_url} target="_blank" rel="noreferrer">
//                   <Item>
//                     <img
//                       src={feed.media_url}
//                       className="gallery-image"
//                       alt=""
//                     />
//                   </Item>
//                 </a>
//               ))}
//             </Grid>
//           </motion.div>

//           {/* <motion.div className="container">
//             <div className="container">
//               <motion.div className="gallery">
//                 {feeds.map((feed) => (
//                   <a href={feed.media_url} target="_blank">
//                     <motion.div
//                       className="gallery-item"
          
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.75, ease: "easeOut" }}
//                     >
//                       <img src={feed.media_url} className="gallery-image" alt="" />

//                       <div className="gallery-item-info"> */}
//           {/* <ul>
//                           <li class="gallery-item-likes">
//                             <span class="visually-hidden">Likes:</span>
//                             <i class="fas fa-heart" aria-hidden="true"></i> 56
//                           </li>
//                           <li class="gallery-item-comments">
//                             <span class="visually-hidden">Comments:</span>
//                             <i class="fas fa-comment" aria-hidden="true"></i> 2
//                           </li>
//                         </ul> */}
//           {/* </div>
//                     </motion.div>
//                   </a>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div> */}
//         </Section>
//       ) : (
//         <Section style={{ backgroundColor: "#ffffff", height: "1000px" }}>
//           <Ring color="#506072" size={35} />
//         </Section>
//       )}
//     </Page>
//   );
// };

// const Item = styled.div`
//   :hover {
//     scale: 1.01;
//     /* filter: grayscale(90%); */
//   }
// `;



// const Grid = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 20px;

//   @media only screen and (max-width: 950px) {
//     grid-template-columns: repeat(3, 1fr);
//     grid-gap: 20px;
//   }

//   @media only screen and (max-width: 700px) {
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 20px;
//   }

//   @media only screen and (max-width: 400px) {
//     grid-template-columns: repeat(1, 1fr);
//     grid-gap: 20px;
//   }
// `;

// export default Blog;
