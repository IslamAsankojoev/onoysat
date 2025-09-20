import { motion } from 'framer-motion'
import Image from 'next/image'

// Импорты изображений
const imgSend = '/c5d134bac1959749e19d188fa14f9ed4b118d1d1.svg'

export const ArrowIcon = () => {
  return (
    <motion.div
      className="flex items-center justify-center"
      animate={{ x: [0, 5, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="rotate-180 scale-y-[-100%]">
        <div className="w-[27px] h-[27px]">
          <Image src={imgSend} alt="send icon" width={27} height={27} className="w-full h-full" />
        </div>
      </div>
    </motion.div>
  )
}
