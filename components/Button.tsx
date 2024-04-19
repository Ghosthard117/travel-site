import Image from "next/image"

interface ButtonProps {
  type: "button" | "submit"
  title: string
  icon?: string
  variant: string
}
export default function Button({
  type = "button",
  title = "click me",
  icon,
  variant = "btn_green"
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon &&
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
        />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}