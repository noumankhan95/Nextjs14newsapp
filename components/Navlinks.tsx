import { Categories } from "@/constants";
import SingleNavlink from "./SingleLink";
export default function NavLinks() {
  return Categories.map((cat) => <SingleNavlink category={cat} key={cat} />);
}
