import { BiBed, BiBath } from "react-icons/bi";

// Components
import BaseTag from "./BaseTag";

export function BedroomTag({ count }) {
  return <BaseTag Icon={BiBed} count={count} preText="Beds" />;
}

export function BathroomTag({ count }) {
  return <BaseTag Icon={BiBath} count={count} preText="Baths" />;
}

export default BedroomTag;
