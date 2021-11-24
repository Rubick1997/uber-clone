import { Geometry } from "react-native-google-places-autocomplete";

type OriginType = {
  location: Geometry["location"];
  description: string;
};

export type NavReducerType = {
  origin: OriginType | null;
  destination: OriginType | null;
  travelTimeInformation: any;
};
