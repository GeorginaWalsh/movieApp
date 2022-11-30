import React from "react";
import Grid from "@mui/material/Grid";
import ActorCard from "../movieCard/actor";

const ActorList = ( {actors, action }) => {
  let actorCards = actors.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ActorCard key={m.id} actor={m} action={action} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;
