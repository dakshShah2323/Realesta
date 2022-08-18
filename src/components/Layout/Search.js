// import { useEffect } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import fetchApi from "../../lib/api";

// const Search = (props) => {
//   const { query } = props;
//   // const Properties = (props) => {
//   //   const [propertyForRent, setPropertyForRent] = useState([]);

//   //   useEffect(() => {
//   //     const fetchProperties = async () => {
//   //       const propertyForRent = await fetchApi(
//   //         `${bayutUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
//   //       );
//   //       const propertiesForRent = propertyForRent.hits;
//   //       setPropertyForRent(propertiesForRent);
//   //     };
//   //     fetchProperties();
//   //   }, []);

//   const purpose = query.purpose || "for-rent";
//   const rentFrequency = query.rentFrequency || "yearly";
//   const minPrice = query.minPrice || "0";
//   const maxPrice = query.maxPrice || "1000000";
//   const roomsMin = query.roomsMin || "0";
//   const bathsMin = query.bathsMin || "0";
//   const sort = query.sort || "price-desc";
//   const areaMax = query.areaMax || "35000";
//   const locationExternalIDs = query.locationExternalIDs || "5002";
//   const categoryExternalID = query.categoryExternalID || "4";

//   const [results, setResults] = useState();
//   useEffect(() => {
//     const fetchResults = async () => {
//       const results = await fetchApi(
//         `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
//       );
//       const searchData = results.hits;
//       setResults(searchData);
//       console.log(results);
//     };
//     fetchResults();
//   }, []);
// };

// export default Search;
