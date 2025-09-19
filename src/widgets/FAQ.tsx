'use client'

import { Typography } from '@/shared/ui'
import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer?: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <motion.div 
      className="bg-white-pure w-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="flex items-center justify-between p-6 cursor-pointer" 
        onClick={onToggle}
        whileTap={{ scale: 0.98 }}
      >
        <Typography variant="h2" className="text-black flex-1">
          {question}
        </Typography>

        <motion.div 
          className="w-5 h-5 flex-shrink-0 ml-3"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? <Minus /> : <Plus />}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && answer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div 
              className="px-6 pb-6"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Typography variant="bodyL" className="text-grey-input text-[22px] leading-[normal]">
                {answer}
              </Typography>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqData = [
    {
      question: 'Сколько времени занимает запуск?',
      answer: 'Регламенты, чек-листы, прослушка, аттестации, BI‑дашборды, еженедельные спринты',
    },
    {
      question: 'Без маркетинга справимся?',
      answer: 'Регламенты, чек-листы, прослушка, аттестации, BI‑дашборды, еженедельные спринты',
    },
    {
      question: 'Какая CRM лучше?',
      answer: 'Регламенты, чек-листы, прослушка, аттестации, BI‑дашборды, еженедельные спринты',
    },
    {
      question: 'Как вы контролируете качество?',
      answer: 'Регламенты, чек-листы, прослушка, аттестации, BI‑дашборды, еженедельные спринты',
    },
    {
      question: 'Можно только аудит?',
      answer: 'Регламенты, чек-листы, прослушка, аттестации, BI‑дашборды, еженедельные спринты',
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    )
  }

  return (
    <div className="bg-black w-full py-[100px]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1180px] mx-auto">
          {/* Заголовок */}
          <motion.div 
            className="text-center mb-[50px]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typography variant="h1" className="text-white-pure text-left">
              Часто задаваемые вопросы (FAQ)
            </Typography>
          </motion.div>

          {/* Аккордеон */}
          <motion.div 
            className="flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
              >
                <FAQItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItems.includes(index)}
                  onToggle={() => toggleItem(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
