import { useEffect } from "react";
import reloadFonts from "../../shared/fonts";

export default function FontLoader() {
  useEffect(() => reloadFonts(), []);
  return <></>;
}
