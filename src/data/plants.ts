import images from "./images";

const LEMON_TREES = "Lemon trees";
const AVOCADO_AND_MEDLAR_TREES = "Avocado and medlar trees";

export interface Plant {
  name: string;
  image: {
    source: string;
    date: Date;
  };
}

const getPlant = (
  name: string,
  imageSource: string,
  imageDate: Date
): Plant => ({
  name,
  image: {
    source: imageSource,
    date: imageDate
  }
});

console.log(images.lemon_trees_20180510);

export const plants: Plant[] = [
  getPlant(LEMON_TREES, images.lemon_trees_20180510, new Date("2018-05-10")),
  getPlant(LEMON_TREES, images.lemon_trees_20180512, new Date("2018-05-12")),
  getPlant(LEMON_TREES, images.lemon_trees_20180515, new Date("2018-05-15")),
  getPlant(LEMON_TREES, images.lemon_trees_20180529, new Date("2018-05-29")),
  getPlant("Gotcha!", images.gotcha, new Date(0)),
  getPlant(LEMON_TREES, images.lemon_trees_20180604, new Date("2018-06-04")),
  getPlant(LEMON_TREES, images.lemon_trees_20180710, new Date("2018-07-10")),
  getPlant(
    AVOCADO_AND_MEDLAR_TREES,
    images.avocado_and_medlar_trees_20180409,
    new Date("2018-04-09")
  )
];
