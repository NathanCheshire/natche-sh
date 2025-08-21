import WebFont from "webfontloader";

enum FontWeight {
  Thin = 100,
  ExtraLight = 200,
  Light = 300,
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
  ExtraBold = 800,
  Black = 900,
}

export enum FontTypeface {
  Inter = "Inter",
  Kanit = "Kanit",
}

const generateFont = (typeface: FontTypeface, weight: FontWeight): string => {
  return `${typeface}:${weight}`;
};

const fontWeights: FontWeight[] = Object.values(FontWeight).filter(
  (v): v is FontWeight => typeof v === "number"
);

const fonts = [
  ...Object.values(FontTypeface).flatMap((typeface) =>
    fontWeights.map((weight) => generateFont(typeface, weight))
  ),

  // Just to be safe
  FontTypeface.Inter,
  FontTypeface.Kanit,
];

const reloadFonts = () => {
  WebFont.load({
    google: {
      families: fonts,
    },
  });
};

export default reloadFonts;
