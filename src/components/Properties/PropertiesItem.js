import Card from "../UI/Card";
import classes from "./PropertiesItem.module.css";
import { useParams, Link, useLocation } from "react-router-dom";
import DefaultImage from "../../img/defaultImage.jpeg";
import millify from "millify";
// import "boxicons";

const PropertiesItem = ({
  propertyData: {
    coverPhoto,
    price,
    rentFrequency,
    title,
    area,
    rooms,
    baths,
    agency,
    externalID,
  },
}) => {
  const params = useParams();

  // const dispatch = useDispatch();
  // const {
  //   propertyData: {
  //     coverPhoto,
  //     price,
  //     rentFrequency,
  //     title,
  //     area,
  //     agency,
  //     externalID,
  //   },
  // } = props;

  // const addToCartHandler = () => {
  //   dispatch(
  //     cartActions.addItemToCart({
  //       id,
  //       title,
  //       price,
  //     })
  //   );
  // };

  return (
    <div className={classes.item}>
      <Card>
        <Link to={`/propertyData/${externalID}`}>
          <img
            className={classes.image}
            src={coverPhoto ? coverPhoto.url : DefaultImage}
          ></img>
        </Link>
        <div className={classes.content}>
          <div className={classes.price}>
            AED {millify(price)}
            <p>{rentFrequency && `/${rentFrequency}`}</p>
          </div>
          <img
            src={agency?.logo.url}
            alt="agencyImg"
            className={classes.agency}
          ></img>
        </div>
        <header>
          <h4>{title.length > 30 ? `${title.substring(0, 30)}...` : title}</h4>
        </header>
        <div className={classes.actions}>
          <div className={classes.icons}>
            <li>
              <p>
                <i className="bx bx-bed"></i> {rooms}
              </p>
            </li>
            <li>
              <p>
                | <i className="bx bx-bath"></i> {baths}
              </p>
            </li>
            <li>
              <p>
                | <i className="bx bx-area"></i>
                {millify(area)} sqft
              </p>
            </li>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default PropertiesItem;
