import style from "./Button.module.scss"

export const Button = ({ children, onClick, ...props }) => {
  return (
    <button className={style.buttonStyle} onClick={onClick} {...props}>{children}</button>
  )
}
