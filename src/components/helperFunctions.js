export const returnInfoPath = (section, planet) => {
  if (section === "overview") {
    return planet[0].overview;
  } else if (section === "structure") {
    return planet[0].structure;
  } else if (section === "geology") {
    return planet[0].geology;
  }
};

export const returnImgPath = (section, planet) => {
  if (section === "structure") {
    return planet[0].images.internal;
  } else {
    return planet[0].images.planet;
  }
};

export const getColor = (planetName) => {
  const underlineColors = [
    "#419EBB",
    "#EDA249",
    "#6D2ED5",
    "#D14C32",
    "#D83A34",
    "#CD5120",
    "#1ec2a4",
    "#2D68F0",
  ];

  if (planetName === "Venus") {
    return underlineColors[1];
  } else if (planetName === "Earth") {
    return underlineColors[2];
  } else if (planetName === "Mars") {
    return underlineColors[3];
  } else if (planetName === "Jupiter") {
    return underlineColors[4];
  } else if (planetName === "Saturn") {
    return underlineColors[5];
  } else if (planetName === "Uranus") {
    return underlineColors[6];
  } else if (planetName === "Neptune") {
    return underlineColors[7];
  } else {
    return underlineColors[0];
  }
};
