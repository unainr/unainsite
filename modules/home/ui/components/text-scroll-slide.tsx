import { TextScroll } from '@/components/ui/text-scroll'

const TextScrollSlide =  () => {

  return (
    <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-20"
      text="Brand Identity Web Development App Design Brand Identity "
      default_velocity={5}
    />
  )
}

export default TextScrollSlide
