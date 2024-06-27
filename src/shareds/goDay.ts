import { scrollToElement } from "./scrollToElement";

export const goDay = (day: number,smooth = true) => scrollToElement(`week-${day}`, -60, smooth)