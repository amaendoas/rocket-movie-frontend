import { MdStar, MdOutlineStarOutline } from "react-icons/md";
import { Container } from "./styles";


export function StarRating({value = 0, ...rest}) {
  return (
    <Container>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return(
        <label>
        <MdStar
        key={String(i)}
        className="star"
        color={ratingValue <= (value) ? "#FF859B" : "#312E38"}
        />

        <input
        type="radio"
        name="radio"
        value={value}
        {...rest}
        />
        </label>
        )
      }
      )}
    </Container>
  )
}
