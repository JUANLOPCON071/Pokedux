import { Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const StarButton = ({ isFavorite, onclick }) => {
    const Icon = isFavorite ? StarFilled  : StarOutlined;
    return <Button icon={<Icon />} onClick={onclick} />
};

export default StarButton;