import classes from "./FilterProperties.module.css";

import { useEffect, useState } from "react";
import { bayutUrl, fetchApi } from "../../lib/api";
import { filterData, getFilterValues } from "../../lib/filterData";
import {
  Link,
  query,
  Router,
  useLocation,
  useSearchParams,
  useNavigate,
  useParams
} from "react-router-dom";
import DropDown from "./DropDown";

/**
 * https://stackoverflow.com/questions/73392166/react-router-function-not-getting-props
 */

const FilterProperties = () => {
  const location = useLocation();
  const [filters, setFilters] = useState(filterData);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // const { query } = useParams();
  // const options = [
  //   { label: "Fruit", value: "fruit" },
  //   { label: "Vegetable", value: "vegetable" },
  //   { label: "Meat", value: "meat" },
  // ];

  // const [value, setValue] = useState("fruit");

  // const handleChange =
  // };

  // const purpose = query.purpose || "for-rent";
  // const rentFrequency = query.rentFrequency || "yearly";
  // const minPrice = query.minPrice || "0";
  // const maxPrice = query.maxPrice || "1000000";
  // const roomsMin = query.roomsMin || "0";
  // const bathsMin = query.bathsMin || "0";
  // const sort = query.sort || "price-desc";
  // const areaMax = query.areaMax || "35000";
  // const locationExternalIDs = query.locationExternalIDs || "5002";
  // const categoryExternalID = query.categoryExternalID || "4";
  // const [results, setResults] = useState();
  // useEffect(() => {
  //   const fetchResults = async () => {
  //     const results = await fetchApi(
  //       `${bayutUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  //     );
  //     const searchData = results.hits;
  //     setResults(searchData);
  //     console.log(results);
  //   };
  //   fetchResults();
  // }, []);

  const query = searchParams.get("query");
  // console.log(location);
  // console.log(query);
  const searchProperties = (filterValues) => {
    // const path = location.pathname;
    // // console.log(location.pathname);

    // console.log(query); // undefined

    // const values = getFilterValues(filterValues); // error

    // values.forEach((item) => {
    //   setSearchParams[item.name] = item.value;
    // });
    // console.log(values);
    // navigate({ pathname: path, query });

    // const values = getFilterValues(filterValues); // *

    Object.entries(filterValues).forEach(([name, value]) => {
      searchParams.set(name, value); // <-- set query parameter value
    });
    setSearchParams(searchParams); // <-- update query params
  };

  // searchProperties();

  // // const { query } = Router;

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        {filters.map((filter) => (
          <DropDown
            key={filter.queryName}
            placeholder={filter.placeholder}
            filter={filter}
            onChange={(e) => {
              searchProperties({ [filter.queryName]: e.target.value });
            }}
          />
        ))}
      </div>
    </div>

    // {
    //   filters.map((filter) => (
    //     key=filter.queryName,
    //   ))
    // }
    // <li className={classes.item}>
    //   <figure>
    //     <blockquote>
    //       <p>Hello</p>
    //     </blockquote>
    //     <figcaption>Albert</figcaption>
    //   </figure>
    // </li>
  );
};

export default FilterProperties;
