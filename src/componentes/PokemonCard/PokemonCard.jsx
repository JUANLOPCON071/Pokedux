import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "../StarButton/StarButton";
import { useDispatch } from 'react-redux';
import { setFavorite } from "../../slices/dataSlice";

const PokemonCard = ({ name, image, types, id }) => {
    const dispatch = useDispatch();
    const typesString = types.map((elem) => elem.type.name).join(', ');

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }));
    }

    return (
        <Card
            title={name} 
            cover={<img src={image} alt={name} />}
            extra={<StarButton isFavorite onclick={handleOnFavorite} />}
        >
            <Meta description={typesString}/>
        </Card>
    )
}

export default PokemonCard;