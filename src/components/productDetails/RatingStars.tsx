import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface RatingStarProps {
  rating?: number; // Số lượng sao tối đa
}

const RatingStar: React.FC<RatingStarProps> = ({ rating = 5 }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) =>
        index + 1 <= rating ? (
          <StarIcon
            color="warning"
            sx={{
              fontSize: {
                xs: 20,
                sm: 22,
              },
            }}
            key={index}
          />
        ) : (
          <StarBorderIcon
            color="warning"
            sx={{
              fontSize: {
                xs: 20,
                sm: 22,
              },
            }}
            key={index}
          />
        )
      )}
    </div>
  );
};

export default RatingStar;
