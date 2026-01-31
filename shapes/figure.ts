import type { Coordinates } from "@/types/chess";
import type { CoordinatesX } from "@/types/chess";
import type { CoordinatesY } from "@/types/chess";
import type { PieceType } from "@/types/chess";
import type { Color } from "@/types/chess";

export abstract class Figure {
  private cordinates: Coordinates;
  private color: Color;
  private type: PieceType;
  protected xMap: CoordinatesX[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

  constructor(cordinates: Coordinates, color: Color, type: PieceType) {
    this.cordinates = cordinates;
    this.color = color;
    this.type = type;
  }

  public getCordinates() {
    return this.cordinates;
  }

  public getColor() {
    return this.color;
  }

  public getType() {
    return this.type;
  }

  public setCordinates(cordinates: Coordinates) {
    this.cordinates = cordinates;
  }

  public setColor(color: Color) {
    this.color = color;
  }

  public abstract hasMoved(figures: Figure[]): Coordinates[];

  public destroy() {
    this.cordinates = null as any;
  }
}
