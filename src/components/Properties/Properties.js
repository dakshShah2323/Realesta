import PropertiesItem from "./PropertiesItem";
import classes from "./Properties.module.css";
import { bayutUrl, fetchApi } from "../../lib/api";
import { useEffect, useState } from "react";

// const DUMMY_PROPERTIES = [
//   {
//     id: "p1",
//     price: 839,
//     title: "Leonardo Da Vinci",
//     author: "By Walter Issacson",
//   },
//   {
//     id: "p2",
//     price: 270,
//     title: "Wings of Fire",
//     author: "By APJ Abdul Kalam",
//   },
//   {
//     id: "p3",
//     price: 839,
//     title: "Leonardo Da Vinci",
//     author: "By Walter Issacson",
//   },
//   {
//     id: "p4",
//     price: 270,
//     title: "Wings of Fire",
//     author: "By APJ Abdul Kalam",
//   },
// ];

const Properties = (props) => {
  const [propertyForRent, setPropertyForRent] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const propertyForRent = await fetchApi(
        `${bayutUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
      );
      const propertiesForRent = propertyForRent.hits;
      setPropertyForRent(propertiesForRent);
    };
    fetchProperties();
  }, []);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      <ul>
        {propertyForRent.map((propertyData) => (
          <PropertiesItem propertyData={propertyData} key={propertyData.id} />
        ))}
      </ul>
    </section>
  );
};

export default Properties;
