import { FaCaretRight } from "react-icons/fa"

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  text: string
}>

type FooterLinks = Array<{
  id: number
  links: Array<{
    href: string
    text: string
  }>
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <FaCaretRight className="size-3.5" />,
    href: "/",
    text: "Home",
  },
  {
    icon: <FaCaretRight className="size-3.5" />,
    href: "/idvisual",
    text: "ID visual",
  },
  {
    icon: <FaCaretRight className="size-3.5" />,
    href: "/webdesign",
    text: "Web design",
  },
  {
    icon: <FaCaretRight className="size-3.5" />,
    href: "/code",
    text: "Code",
  },
  {
    icon: <FaCaretRight className="size-3.5" />,
    href: "/about",
    text: "About",
  },
]