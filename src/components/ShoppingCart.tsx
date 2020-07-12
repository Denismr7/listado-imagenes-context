import React, { useContext } from "react";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { Typography, Paper, Button } from "@material-ui/core";
import { StateConsumer } from "../context";
import { PictureInfo } from "../interfaces";

export default function ShoppingCart() {
  const [selectedItem, setSelectedItem] = useContext(StateConsumer);

  const renderSelectedItems = (items: PictureInfo[]) => {
    return items.map((item) => (
      <Paper key={items.indexOf(item)} className="shoppingCartPaper">
        <img src={item.picUrl} alt="item" className="shoppingCartImg" />
        <Typography variant="h6" component="h3">
          {item.title}
        </Typography>
        <Button
          onClick={() =>
            setSelectedItem(selectedItem.filter((i: PictureInfo) => i !== item))
          }
        >
          <DeleteRoundedIcon fontSize="large" color="secondary" />
        </Button>
      </Paper>
    ));
  };

  return (
    <div>
      <div className="shoppingCartTitle">
        <ShoppingCartRoundedIcon />{" "}
        <Typography variant="h5" component="h2">
          Cart
        </Typography>
        <Button
          onClick={() => setSelectedItem([])}
          variant="contained"
          color="secondary"
        >
          <DeleteRoundedIcon />
          EMPTY ALL
        </Button>
      </div>
      <div>{renderSelectedItems(selectedItem)}</div>
    </div>
  );
}
