import {
  AiOutlineShoppingCart,
  AiFillCreditCard,
  AiFillAppstore,
} from "react-icons/ai";
import { MdCompareArrows, MdArticle } from "react-icons/md";

const data = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <AiFillAppstore size={"1.5rem"} />,
  },
  {
    label: "Products",
    path: "/dashboard/products",
    icon: <AiOutlineShoppingCart size={"1.5rem"} />,
  },
  {
    label: "Purchases",
    path: "/dashboard/purchases",
    icon: <AiFillCreditCard size={"1.5rem"} />,
  },
  {
    label: "Sales",
    path: "/dashboard/sales",
    icon: <p style={{ fontSize: "1.4rem" }}>&#8358;</p>,
  },
  {
    label: "Returns",
    path: "/dashboard/returns",
    icon: <MdCompareArrows size={"1.5rem"} />,
  },
  {
    label: "Reports",
    path: "/dashboard/report",
    icon: <MdArticle size={"1.5rem"} />,
  },
];
export default data;
