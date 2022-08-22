import { Card, CardContent, Typography } from "@mui/material";

const FeaturesCard = ({ item }) => {
  return (
    <Card elevation={5} className="features-card">
      <CardContent>
        <span
          style={{
            marginTop: ".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {item.icon}
        </span>
        <Typography
          variant="h6"
          align="center"
          sx={{ pt: 1.5, fontWeight: "bold" }}
        >
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          {item.desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeaturesCard;
