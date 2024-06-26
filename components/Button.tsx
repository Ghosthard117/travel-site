import Image from "next/image"

interface ButtonProps {
  type: "button" | "submit"
  title: string
  icon?: string
  variant: string
  full?: boolean
}
export default function Button({
  type = "button",
  title = "click me",
  icon,
  variant = "btn_green",
  full
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
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