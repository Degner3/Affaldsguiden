import style from "./Button.module.scss"

// Button-komponenten med flere tilpasningsmuligheder som props
export const Button = ({
  children,
  onClick,
  backgroundColor,
  color,
  borderColor,
  width,
  height,
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  border,
}) => {
  // Definerer en objekt med CSS-style, der tilpasses baseret på de modtagne props
  const buttonStyle = {
    backgroundColor: backgroundColor || style.buttonStyle.backgroundColor, // Baggrundsfarve
    color: color || style.buttonStyle.color, // Tekstfarve
    borderColor: borderColor || style.buttonStyle.borderColor, // Kantfarve
    width: width || style.buttonStyle.width, // bredde
    height: height || style.buttonStyle.height, // højde
    borderRadius: borderRadius || style.buttonStyle.borderRadius, // Border-radius
    fontSize: fontSize || style.buttonStyle.fontSize, // Skriftstørrelse
    fontWeight: fontWeight || style.buttonStyle.fontWeight, // Skriftvægt
    lineHeight: lineHeight || style.buttonStyle.lineHeight, // Linjehøjde
    border: border || style.buttonStyle.border
  };

  return (
    <button className={style.buttonStyle} style={buttonStyle} onClick={onClick}>
      {children} {/* Indholdet af knappen */}
    </button>
  );
};
